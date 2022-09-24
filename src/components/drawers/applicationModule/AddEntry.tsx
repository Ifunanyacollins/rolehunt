import { Drawer, Form, Input, Button, Select, notification } from "antd";
import { DataStore } from "aws-amplify";
import { useState } from "react";
import { Application } from "../../../models/index.js";
const { Option } = Select;

function AddEntry({
  visible = false,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [saving, setSaving] = useState(false);
  const handleCreateApplication = async (values: Application) => {
    try {
      setSaving(true);
      await DataStore.save(
        new Application({
          ...values,
        })
      );
      setSaving(false);
      onClose();
      notification.open({
        message: "Application Status",
        description: "Application saved successfully!",
        placement: "bottomLeft",
        type: "success",
      });
    } catch (error) {
      console.log("Error saving post", error);
    }
  };
  return (
    <Drawer onClose={onClose} open={visible}>
      <Form layout="vertical" onFinish={handleCreateApplication}>
        <Form.Item
          label="Company"
          name="company"
          rules={[{ required: true, message: "company name is required" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "role is required" }]}
        >
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="Channel"
          name="channel"
          rules={[{ required: true, message: "channel is required" }]}
        >
          <Input placeholder="eg: linkedIn , Remote ok" size="large" />
        </Form.Item>

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
    </Drawer>
  );
}

export default AddEntry;
