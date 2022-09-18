import {
  Row,
  Col,
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  RadioChangeEvent,
} from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  const [value, setValue] = useState(0);

  const onFinish = (values: any) => {
    console.log("Success:", values);
    navigate(`/`);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
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
          <div className="mt-16">
            <div className={"mb-10"}>
              <h2 className="text-bold text-3xl">Create Account</h2>
              <span>For your creative or business needs.</span>
            </div>

            <Row gutter={[16, 16]} className="mb-4">
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
              <Row gutter={[16, 16]}>
                <Col md={12} lg={12}>
                  <Form.Item
                    label="First Name"
                    name="firstName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your First Name!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>

                <Col md={12} lg={12}>
                  <Form.Item
                    label="Last Name"
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Last Name!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>
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
                label="Email Address"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Radio.Group className="flex" onChange={onChange} value={value}>
                  <Radio
                    className={`p-3 w-1/2 rounded-md border-[1px] border-solid hover:border-purple-700 ${
                      value === 1 ? "border-purple-700" : "border-neutral-300"
                    }`}
                    value={1}
                  >
                    Independent Creative
                  </Radio>
                  <Radio
                    className={`p-3 w-1/2 rounded-md border-[1px] border-solid hover:border-purple-700  ${
                      value === 2 ? "border-purple-700" : "border-neutral-300"
                    }`}
                    value={2}
                  >
                    Business
                  </Radio>
                </Radio.Group>
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

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button block type="primary" htmlType="submit" size="large">
                  Submit
                </Button>
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  span: 24,
                }}
              >
                <Checkbox>
                  I agree to the{" "}
                  <a href="https://www.facebook.com">Terms of Service</a> and
                  <a href="http://www.facebook.com">Privacy Policy</a>
                </Checkbox>
              </Form.Item>
            </Form>

            <Col md={24} lg={24} className="mt-4">
              Already have an account?
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

export default Register;
