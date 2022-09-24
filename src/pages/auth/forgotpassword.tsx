import { Row, Col, Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col
        md={10}
        lg={10}
        className="flex bg-no-repeat bg-cover h-screen authBG"
      ></Col>

      <Col md={14} lg={14} className="flex justify-center">
        <div className="w-full md:w-3/4 md:p-10 p-4">
          <div className="mt-6">HMarket</div>
          <div className="mt-24">
            <div className={"mb-10"}>
              <h2 className="text-bold text-3xl">Forgot Password</h2>
              <span>
                we got you covered, just put in you email address so we can
                help.
              </span>
            </div>
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button block type="primary" htmlType="submit" size="large">
                  Send Email
                </Button>
              </Form.Item>
            </Form>

            <Col md={24} lg={24} className="mt-4">
              Just remembered my password?
              <Link to="/auth/login">
                <Button type="link">Sign In</Button>
              </Link>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ForgotPassword;
