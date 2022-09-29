import { Row, Col, Button, Checkbox, Form, Input, Alert } from "antd";
import { Auth, DataStore } from "aws-amplify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type valuesParams = {
  password: string;
  username: string;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

const Login = () => {
  let navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: valuesParams) => {
    try {
      setError(null);
      setLoading(true);
      await DataStore.clear();
      await Auth.signIn(values.username, values.password);
      setLoading(false);
      navigate(`/`);
    } catch (error) {
      console.log(getErrorMessage(error));
      if (getErrorMessage(error).includes("User is not confirmed")) {
        navigate(`/auth/confirm`);
      }
      setError(null);
      setLoading(false);
      setError(getErrorMessage(error));
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col
        md={10}
        lg={10}
        className="flex bg-no-repeat bg-cover h-screen authBG overflow-hidden"
      ></Col>

      <Col md={14} lg={14} className="flex justify-center">
        <div className="w-full md:w-3/4 md:p-10 p-4">
          <div className="mt-6">Role Hunt</div>
          <div className="mt-20">
            <div className={"mb-10"}>
              <h2 className="text-bold text-3xl">Log In</h2>
              <span>we are glad you’re here again.</span>
            </div>

            {error && <Alert type="error" message={error} />}
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email Address"
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input size="large" type="email" />
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
                <Button
                  loading={loading}
                  htmlType="submit"
                  block
                  type="primary"
                  size="large"
                >
                  Login
                </Button>
              </Form.Item>
            </Form>

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
