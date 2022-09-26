import { Row, Col, Avatar, Button} from "antd";

import { AntDesignOutlined } from '@ant-design/icons';
import {  } from 'antd';


function PublicProfile() {
  return (
    <section>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col>
            <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
              icon={<AntDesignOutlined />}
            />

            <h3>Name</h3>
            <h2>We build digital products.</h2>
   
            <Button type="primary"> + Follow</Button>
            <Button type="primary"> Hire me </Button>
        </Col>


        <Col className="h-[30rem] bg-gradient-to-r from-cyan-500 to-blue-500">
          <div>Preview project</div>
        </Col>
      </Row>

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
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
