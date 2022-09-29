import { Avatar, Button, Table, Dropdown, Menu } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import type { MenuProps } from "antd";
import { Application } from "../../../models/index.js";
import dayjs from "dayjs";
import UpdateAppStatus from "../../drawers/applicationModule/UpdateAppStatus";
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

export interface DataType {
  id: string;
  company: string;
  status: string;
  role: string;
  date_applied?: string;
  channel: string;
}

const statusColor: any = {
  IN_REVIEW: "bg-blue-300",
  REJECTED: "bg-red-300",
  INTERVIEW: "bg-green-300",
  WITHDREW: "bg-purple-300",
};

const UserActiveTable: React.FC = () => {
  const [data, setData] = useState<Application[]>([]);
  const [open, setOpen] = useState(false);
  const [editID, setEditID] = useState<Application | null>(null);
  const handleMenuSelection: MenuProps["onClick"] = async ({ key }) => {
    if (key === "status") {
      setOpen(true);
    }

    if (key === "delete") {
      DataStore.delete(editID as Application);
    }
  };

  const menu = (
    <Menu
      onClick={handleMenuSelection}
      items={[
        {
          key: "status",
          label: "Update Status",
        },

        {
          key: "delete",
          label: "Delete Application",
        },
      ]}
    />
  );
  const columns: ColumnsType<Application> = [
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (text, record) => (
        <div className="flex items-center space-x-2">
          <Avatar />
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },

    {
      title: "Channel",
      dataIndex: "channel",
      key: "channel",
    },

    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, _) => (
        <span className={`${statusColor[text]} p-1 rounded`}>{text}</span>
      ),
    },

    {
      title: "Date Applied",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (text, record) => dayjs(text).format("LLL"),
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Dropdown onOpenChange={() => setEditID(record)} overlay={menu}>
          <Button type="link">Actions</Button>
        </Dropdown>
      ),
    },
  ];

  useEffect(() => {
    const subscription = DataStore.observeQuery(Application).subscribe(
      ({ items }) => {
        setData(items);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      <Table rowKey="id" columns={columns} dataSource={data} />
      <UpdateAppStatus
        onClose={() => setOpen(false)}
        visible={open}
        id={editID}
      />
    </>
  );
};

export default UserActiveTable;
