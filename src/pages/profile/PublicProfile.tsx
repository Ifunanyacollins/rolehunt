import { Row, Col, Avatar, Button} from "antd";

import { AntDesignOutlined } from '@ant-design/icons';
import {  } from 'antd';


function PublicProfile() {
  return (
    <section>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col sm={24} md={12} lg={12} className="h-[30rem] p-10 flex flex-col justify-center">
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


        <Col sm={24} md={12} lg={12} className="h-[30rem] bg-gradient-to-r from-cyan-500 to-blue-500">
          <div>Preview project</div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className="p-10 md:p-20">
        <Col className="h-[15rem]" span={8}>
          <div>Basic profile column</div>
        </Col>
        <Col className="h-[15rem]" span={8}>
          <div>Basic profile column</div>
        </Col>
        <Col className="h-[15rem]" span={8}>
          <div>Basic profile column</div>
        </Col>
      </Row>
      
    </section>
  );
}

export default PublicProfile;
