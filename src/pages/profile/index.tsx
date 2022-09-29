import {
  Avatar,
  Button,
  Typography,
  notification,
  Modal,
  Form,
  Upload,
} from "antd";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { useEffect, useReducer, useState, useRef } from "react";
import { initialState, reducer } from "../../components/profile/ProfileReudcer";
import { ProfileAction } from "../../components/profile/types";
import {
  PlusCircleOutlined,
  LinkOutlined,
  EditOutlined,
  CopyFilled,
  EditTwoTone,
  UploadOutlined,
} from "@ant-design/icons";
import { DataStore, Storage } from "aws-amplify";
import AddProject from "../../components/drawers/profileModule/AddProject";
import { Project, Profile } from "../../models/index.js";
import Image from "../../components/s3Image";
import withAuthenticator from "../../components/HOC/withAuthenticator";
const { Paragraph, Title } = Typography;

export interface DataType {
  url: string;
  name: string;
  caseStudie: string;
  poster: string;
}

type fileType = {
  name: string;
  file: { name: string };
};

function ProfilePage(props: any) {
  const [saving, setSaving] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<DataType | null>(null);
  const [currentProfile, setCurrentProfile] = useState<Profile>();
  const [uploading, setUploading] = useState(false);
  const [openUploader, setUploader] = useState(false);

  const handleChange = (args: ProfileAction) => {
    dispatch({ type: args.type, payload: args.payload });
  };

  const handleUploadFile = async (values: any) => {
    const { avatar } = values;
    setUploading(true);
    const currentFile = avatar.file;

    try {
      const { key } = await Storage.put(
        currentFile.name,
        currentFile.originFileObj
      );
      handleChange({ type: "SET_AVATAR", payload: key });
      setUploading(false);
      setUploader(false);
    } catch (error) {
      setUploading(false);
    }
  };

  const DataSave = async (data: any) => {
    return DataStore.save(new Profile(data));
  };

  const DataUpdate = async (data: any) => {
    return DataStore.save(
      Profile.copyOf(currentProfile as Profile, (updated) => {
        Object.assign(updated, data);
      })
    );
  };

  const handleSaveProfile = async (value: Omit<Profile, "id">) => {
    try {
      setSaving(true);

      currentProfile
        ? await DataUpdate({ ...value, userID: props.user.attributes.sub })
        : await DataSave({ ...value, userID: props.user.attributes.sub });
      setSaving(false);

      notification.open({
        message: "Profile Status",
        description: "Profile saved successfully!",
        placement: "bottomLeft",
        type: "success",
      });
    } catch (error) {
      console.log("Error saving post", error);
    }
  };

  useEffect(() => {
    const subscription = DataStore.observeQuery(Project).subscribe(
      ({ items }) => {
        handleChange({ type: "SET_PORTFOLIO", payload: items });
        console.log(items);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    DataStore.query(Profile).then((items) => {
      if (items.length) {
        setCurrentProfile(items[0]);
        console.log(items);
        handleChange({
          type: "SET_STORE",
          payload: {
            avatar: items[0].avatar,
            tagline: items[0].tagline,
            summary: items[0].summary,
          },
        });
      }
    });
  }, [props?.user]);

  return (
    <section>
      <div className="h-12  flex justify-end items-center space-x-4">
        <Button type="dashed">Preview</Button>
        <Button
          loading={saving}
          onClick={() => handleSaveProfile(state)}
          type="primary"
        >
          Publish
        </Button>
      </div>

      <div className="flex items-center flex-col space-y-3">
        <div className="flex">
          <div className=" h-24 w-24 rounded-full border border-solid border-gray-300 overflow-hidden">
            <Image imgKey={state.avatar} name="Avatar" />
          </div>

          <EditTwoTone
            onClick={() => setUploader(true)}
            className="flex items-end text-lg cursor-pointer"
            twoToneColor="#1890ff"
          />
        </div>
        <Title
          level={4}
          editable={{
            onChange: (val) =>
              handleChange({ type: "SET_TAGLINE", payload: val }),
          }}
        >
          {state.tagline}
        </Title>

        <Paragraph
          className="text-center"
          editable={{
            onChange: (val) =>
              handleChange({ type: "SET_SUMMARY", payload: val }),
          }}
        >
          {state.summary}
        </Paragraph>
        <Button type="link">
          Copy Profile link
          <CopyFilled />
        </Button>
      </div>
      <div className="my-20 border border-gray-500">
        <Title level={5}>Projects</Title>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-3">
          <div
            onClick={() => setOpen(true)}
            className=" aspect-square cursor-pointer rounded-xl porfoilio overflow-hidden border border-dashed w-full border-gray-500 flex flex-col justify-center items-center"
          >
            <PlusCircleOutlined className=" text-2xl" />
            <p>Add a new project</p>
          </div>

          {state.projects.map((project: any) => (
            <div
              key={project.id}
              className="aspect-square rounded-xl overflow-hidden relative group"
            >
              <Image imgKey={project.poster} name={project.name} />

              <div className="absolute backdrop-brightness-50 text-white z-10 bottom-0 p-3 w-full  justify-between group-hover:flex hidden">
                <span className="capitalize text-base">{project.name}</span>
                <div className="space-x-3">
                  <a href={project.url} target="_blank" className="text-white">
                    <LinkOutlined className="text-xl" />
                  </a>
                  <EditOutlined
                    className="text-xl cursor-pointer"
                    onClick={() => {
                      setOpen(true);
                      setEditData(project);
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddProject
        visible={open}
        onClose={() => setOpen(false)}
        editData={editData}
        setEditData={setEditData}
      />

      <Modal
        visible={openUploader}
        footer={null}
        onCancel={() => setUploader(false)}
      >
        <Form layout="vertical" onFinish={handleUploadFile}>
          <Form.Item
            label="Avatar"
            name="avatar"
            rules={[
              {
                required: true,
                message: "avatar is required",
              },
            ]}
          >
            <Upload
              style={{ width: "100%" }}
              maxCount={1}
              accept="image/*"
              className="w-full"
              {...props}
            >
              <Button block size="large" icon={<UploadOutlined />}>
                Click to Upload
              </Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              size="large"
              loading={uploading}
              className="w-full"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </section>
  );
}

export default withAuthenticator(ProfilePage);
