import { Row, Col, Button, Form, Input, Alert } from "antd";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

type valuesParams = {
  code: string;
  username: string;
};

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}

const ConfirmEmail = () => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const username = searchParams.get("email") as string;
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: valuesParams) => {
    try {
      setError(null);
      setLoading(true);
      await Auth.confirmSignUp(username || values.username, values.code);
      setLoading(false);
      navigate(`/profile`);
    } catch (error) {
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
        className="flex bg-no-repeat bg-cover h-screen authBG"
      ></Col>

      <Col md={14} lg={14} className="flex justify-center">
        <div className="w-full md:w-3/4 md:p-10 p-4">
          <div className="mt-6">Track</div>
          <div className="mt-20">
            <div className={"mb-10"}>
              <h2 className="text-bold text-3xl">Confirm your email address</h2>
              <span>Check your email, we sent you a code</span>
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
              {!username && (
                <Form.Item
                  label="Email Address"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Please input your username",
                    },
                  ]}
                >
                  <Input size="large" type="email" />
                </Form.Item>
              )}

              <Form.Item
                label="Code"
                name="code"
                rules={[
                  {
                    required: true,
                    message: "Please input your email code",
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
                <Button
                  loading={loading}
                  htmlType="submit"
                  block
                  type="primary"
                  size="large"
                >
                  Confirm Email
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default ConfirmEmail;
