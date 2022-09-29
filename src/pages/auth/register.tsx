import { Row, Col, Button, Checkbox, Form, Input, Alert } from "antd";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type values = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

const Register = () => {
  let navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: values) => {
    try {
      setLoading(true);
      setError(null);
      await Auth.signUp({
        username: values.email,
        password: values.password,
        attributes: {
          email: values.email,
          "custom:firstName": values.firstName,
          "custom:lastName": values.lastName,
        },
        autoSignIn: {
          enabled: true,
        },
      });

      setLoading(false);
      navigate(`/auth/confirm?email=${values.email}`);
    } catch (error) {
      setLoading(false);
      setError(getErrorMessage(error));
    }
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
          <div className="mt-6">
            <h2>Role Hunt</h2>
          </div>
          <div className="mt-16">
            <div className={"mb-10"}>
              <h2 className="text-bold text-3xl">Create Account</h2>
              <span>For your creative or business needs.</span>
            </div>
            {error && <Alert type="error" message={error} />}
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
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

              <Form.Item
                wrapperCol={{
                  span: 24,
                }}
              >
                <Button
                  loading={loading}
                  block
                  type="primary"
                  htmlType="submit"
                  size="large"
                >
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
