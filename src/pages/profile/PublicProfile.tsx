import { Row, Col, Avatar, Button, Tag } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Profile } from "../../models/index.js";
import { useParams } from "react-router-dom";
import Image from "../../components/s3Image";
function PublicProfile() {
  const [profile, setProfile] = useState<any>({});
  const { id } = useParams();
  useEffect(() => {
    console.log("goat", id);
    DataStore.query(Profile, (c) => c.id("eq", id as string))
      .then((item) => {
        console.log(item);
        setProfile(item[0]);
      })
      .catch((error) => console.log(error, "'ddddd"));
  }, [id]);
  console.log(profile);
  return (
    <section>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          sm={24}
          md={12}
          lg={12}
          className="h-[30rem] p-10 flex flex-col justify-center"
        >
          <div className="m-10 md:m-20 justify-center w-3/5">
            <div className=" h-24 w-24 rounded-full border border-solid border-gray-300 overflow-hidden">
              <Image imgKey={profile?.avatar} name="Avatar" />
            </div>

            <h1 className="text-2xl mt-4 font-medium">Randollin Igwe</h1>
            <h3 className="text-5xl font-bold">{profile?.tagline}</h3>

            <div className="mt-8">
              <Button type="primary" className="mr-4 rounded-md" size="large">
                {" "}
                + Follow
              </Button>
              <Button size="large" className="rounded-md">
                {" "}
                Hire me{" "}
              </Button>
            </div>
          </div>
        </Col>

        <Col
          sm={24}
          md={12}
          lg={12}
          className="h-[30rem] bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          <div>Preview project</div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="p-10 md:p-20">
        <Col className="h-[15rem]" span={8}>
          <div className="border-solid border-slate-100 border-4 rounded-lg p-6 h-[20rem] bg-gradient-to-r from-cyan-500 to-blue-500">
            <Tag className="rounded-3xl text-white border-none bg-[rgba(0,0,0,.5)] p-2 pl-4 pr-4 font-bold text-md">
              CASE STUDY
            </Tag>
            Basic profile column
          </div>
        </Col>

        <Col className="h-[15rem]" span={8}>
          <div className="border-solid border-slate-100 border-4 rounded-lg p-6 h-[20rem] bg-gradient-to-r from-cyan-500 to-blue-500">
            <Tag className="rounded-3xl text-white border-none bg-[rgba(0,0,0,.5)] p-2 pl-4 pr-4 font-bold text-md">
              CASE STUDY
            </Tag>
            Basic profile column
          </div>
        </Col>

        <Col className="h-[15rem]" span={8}>
          <div className="border-solid border-slate-100 border-4 rounded-lg p-6 h-[20rem] bg-gradient-to-r from-cyan-500 to-blue-500">
            <Tag className="rounded-3xl text-white border-none bg-[rgba(0,0,0,.5)] p-2 pl-4 pr-4 font-bold text-md">
              CASE STUDY
            </Tag>
            Basic profile column
          </div>
        </Col>
      </Row>
    </section>
  );
}

export default PublicProfile;
