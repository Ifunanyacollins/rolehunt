import { Modal, notification } from "antd";
import { Form, Button, Select } from "antd";
import { DataStore } from "aws-amplify";
import { useState } from "react";
import { Application } from "../../../models/index.js";
import { getErrorMessage } from "../../../__utils__/getErrorMessage";
const { Option } = Select;

function UpdateAppStatus({
  visible = false,
  onClose,
  id,
}: {
  visible: boolean;
  onClose: () => void;
  id: Application | null;
}) {
  const [saving, setSaving] = useState(false);
  const [form] = Form.useForm();

  const DataUpdate = async (data: any) => {
    try {
      setSaving(true);
      await DataStore.save(
        Application.copyOf(id as Application, (updated) => {
          updated.status = data.status;
        })
      );
      setSaving(false);
      onClose();
    } catch (error) {
      setSaving(false);
      notification.open({ message: getErrorMessage(error) });
    }
  };
  return (
    <Modal open={visible} footer={null} onCancel={onClose}>
      <section className="my-5">
        <Form form={form} layout="vertical" onFinish={DataUpdate}>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "status is required" }]}
          >
            <Select size="large">
              <Option value="IN_REVIEW">In Review</Option>
              <Option value="REJECTED">Rejected</Option>
              <Option value="INTERVIEW">Interview</Option>
              <Option value="WITHDREW">Withdrew</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              loading={saving}
              className="w-full"
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </section>
    </Modal>
  );
}

export default UpdateAppStatus;
