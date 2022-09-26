import { Avatar, Typography } from "antd";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "../../components/profile/ProfileReudcer";
import { ProfileAction } from "../../components/profile/types";
import {
  PlusCircleOutlined,
  LinkOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { DataStore } from "aws-amplify";
import AddProject from "../../components/drawers/profileModule/AddProject";
import { Project } from "../../models/index.js";
import Image from "../../components/s3Image";
const { Paragraph, Title } = Typography;

export interface DataType {
  url: string;
  name: string;
  poster: string;
}

function Profile() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [open, setOpen] = useState(false);
  const [editData, setEditData] = useState<DataType | null>(null);

  const handleChange = (args: ProfileAction) => {
    dispatch({ type: args.type, payload: args.payload });
  };

  useEffect(() => {
    const subscription = DataStore.observeQuery(Project).subscribe(
      ({ items }) => {
        handleChange({ type: "SET_PORTFOLIO", payload: items });
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <section>
      <div className="flex items-center flex-col space-y-3">
        <Avatar size="large" className="h-20 w-20" />
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
                  <a href={project.url} target="_blank" rel="noreferrer" className="text-white">
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
    </section>
  );
}

export default Profile;
