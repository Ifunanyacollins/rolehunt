import { Drawer, Form, Input, Button, notification, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { DataStore, Storage } from "aws-amplify";
import { useEffect, useState } from "react";
import { Project } from "../../../models/index.js";
import type { RcFile } from "antd/es/upload/interface";
import { DataType } from "../../../pages/profile/index.js";

type fileType = {
  name: string;
  file: { name: string };
};

type formValue = {
  name: string;
  url: string;
  poster: fileType;
};
function AddProject({
  visible = false,
  editData,
  onClose,
  setEditData,
}: {
  visible: boolean;
  onClose: () => void;
  editData: DataType | null;
  setEditData: React.Dispatch<React.SetStateAction<DataType | null>>;
}) {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const handleUploadFile = async (file: fileType) => {
    const currentFile = file.file;
    try {
      const { key } = await Storage.put(currentFile.name, currentFile);
      return key;
    } catch (error) {
      setLoading(false);
    }
  };

  const DataSave = async (data: any) => {
    return DataStore.save(new Project(data));
  };

  const DataUpdate = async (data: any) => {
    return DataStore.save(
      Project.copyOf(editData as Project, (updated) => {
        Object.assign(updated, data);
      })
    );
  };
  const handleCreateApplication = async (values: formValue) => {
    setLoading(true);
    const fileUrl = values.poster
      ? await handleUploadFile(values.poster)
      : editData?.poster;
    const appData = { ...values, poster: fileUrl };
    try {
      editData ? await DataUpdate(appData) : await DataSave(appData);
      setLoading(false);
      setEditData(null);
      form.resetFields();
      onClose();
      notification.open({
        message: "Application Status",
        description: "Application saved successfully!",
        placement: "bottomLeft",
        type: "success",
      });
    } catch (error) {
      setLoading(false);
    }
  };

  const props = {
    beforeUpload: (file: RcFile) => {
      return false;
    },
  };

  useEffect(() => {
    form.setFieldsValue({
      name: editData?.name,
      url: editData?.url,
      caseStudie: editData?.caseStudie,
    });
    // eslint-disable-next-line
  }, [editData]);
  return (
    <Drawer onClose={onClose} open={visible}>
      <Form form={form} layout="vertical" onFinish={handleCreateApplication}>
        <Form.Item
          label="Project Name"
          name="name"
          rules={[{ required: true, message: "name is required" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Project Url"
          name="url"
          rules={[{ required: false, message: "url is required" }]}
        >
          <Input size="large" type="url" />
        </Form.Item>

        <Form.Item
          label="Case Studie"
          name="caseStudie"
          rules={[{ required: true, message: "Case Studie is required" }]}
        >
          <Input.TextArea size="large" />
        </Form.Item>

        <Form.Item
          label="Project Poster"
          name="poster"
          rules={[
            {
              required: editData ? false : true,
              message: "poster is required",
            },
          ]}
        >
          <Upload maxCount={1} accept="image/*" className="w-full" {...props}>
            <Button size="large" icon={<UploadOutlined />}>
              Click to Upload
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            loading={loading}
            className="w-full"
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
}

export default AddProject;
