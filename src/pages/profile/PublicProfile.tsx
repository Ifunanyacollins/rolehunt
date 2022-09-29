import { Row, Col, Avatar, Button } from "antd";
import { AntDesignOutlined } from '@ant-design/icons';
import CaseStudy from "../../components/casestudy";
import Footer from "../../components/layout/Footer";

function PublicProfile() {
  return (
    <>
    <section>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col xs={24} sm={24} md={12} lg={12} className="h-[30rem] p-10 flex flex-col justify-center">
            <div className="m-10 md:m-20 justify-center w-3/5">
              <Avatar
                size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                icon={<AntDesignOutlined />}
              />

              <h1 className="text-2xl mt-4 font-medium">Randollin Igwe</h1>
              <h3 className="text-5xl font-bold">We build digital products.</h3>
    
              <div className="mt-8">
                  <Button type="primary" className="mr-4 rounded-md" size="large"> + Follow</Button>
                  <Button size="large" className="rounded-md"> Hire me </Button>
              </div>
            </div>
        </Col>


        <Col xs={24} sm={24} md={12} lg={12} className="h-[30rem] p-10 bg-gradient-to-r from-cyan-500 to-blue-500">
          <div>Advertisement</div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="p-10 md:p-20">
        <CaseStudy />
        <CaseStudy />
        <CaseStudy />
      </Row>
      
    </section>
    <Footer />
    </>
  );
}

export default PublicProfile;
