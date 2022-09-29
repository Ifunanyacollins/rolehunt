import { Row, Col, Button } from "antd";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Profile } from "../../models/index.js";
import { useParams } from "react-router-dom";
import Image from "../../components/s3Image";
import CaseStudy from "../../components/casestudy";
import Footer from "../../components/layout/Footer";

function PublicProfile() {
  const [profile, setProfile] = useState<any>({});
  const { id } = useParams();
  useEffect(() => {
    DataStore.start();
    const subscription = DataStore.observeQuery(Profile, (c) =>
      c.id("eq", id as string)
    ).subscribe(({ items }) => {
      setProfile(items[0]);
    });

    return () => subscription.unsubscribe();
  }, [id]);

  return (
    <>
      <section className="mb-10">
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

              <h1 className="text-2xl mt-4 font-medium">{profile?.name}</h1>
              <h3 className="text-5xl font-bold">{profile?.tagline}</h3>

              <div className="mt-8">
                <Button type="primary" className="mr-4 rounded-md" size="large">
                  + Follow
                </Button>
                <Button
                  href={`mailto:${profile?.email}`}
                  target="_blank"
                  size="large"
                  className="rounded-md"
                >
                  Hire me
                </Button>
              </div>
            </div>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} className="h-[30rem] p-10">
            <div>
              {!!profile?.projects?.length && (
                <Image imgKey={profile?.projects[0].poster} name="index" />
              )}
            </div>
          </Col>
        </Row>

        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
          className="p-10 md:p-20"
        >
          {profile?.projects?.map((project: any) => (
            <CaseStudy
              key={project.id}
              imgKey={project.poster}
              name={project.name}
              caseStudie={project.caseStudie}
            />
          ))}
        </Row>
      </section>
      <Footer />
    </>
  );
}

export default PublicProfile;
