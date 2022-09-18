import { Row, Col, Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate(`/`);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col
        md={10}
        lg={10}
        className="flex bg-no-repeat bg-cover h-screen"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/6446708/pexels-photo-6446708.jpeg)",
        }}
      ></Col>

      <Col md={14} lg={14} className="flex justify-center">
        <div className="w-full md:w-3/4 md:p-10 p-4">
          <div className="mt-6">HMarket</div>
          <div className="mt-20">
            <div className={"mb-10"}>
              <h2 className="text-bold text-3xl">Log In</h2>
              <span>we are glad you’re here again.</span>
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
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Row>
                <Col md={14}>
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      span: 12,
                    }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>

                <Col md={10} className="text-right">
                  <Link to="/auth/forgotpassword">
                    <Button type="link">Forgot Password</Button>
                  </Link>
                </Col>
              </Row>

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button block type="primary" size="large">
                  Login
                </Button>
              </Form.Item>
            </Form>

            <Row gutter={[16, 16]}>
              <Col md={12}>
                <Button block type="ghost" size="large">
                  Log in with Google
                </Button>
              </Col>

              <Col md={12}>
                <Button block type="ghost" size="large">
                  Log in with Apple
                </Button>
              </Col>
            </Row>

            <Col md={24} lg={24} className="mt-4">
              Not a member?
              <Link to="/auth/register">
                <Button type="link">Sign Up</Button>
              </Link>
            </Col>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
