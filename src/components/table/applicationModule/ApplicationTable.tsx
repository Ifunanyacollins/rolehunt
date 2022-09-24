import { Avatar, Button, Table, Dropdown, Menu } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Application } from "../../../models/index.js";
import dayjs from "dayjs";
var localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);

interface DataType {
  id: string;
  company: string;
  status: string;
  role: string;
  date_applied?: string;
  channel: string;
}

const UserActiveTable: React.FC = () => {
  const menu = (
    <Menu
      items={[
        {
          key: "1",
          label: "Update Status",
        },

        {
          key: "2",
          label: "Set Notification",
        },
      ]}
    />
  );
  const columns: ColumnsType<DataType> = [
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
        <Dropdown overlay={menu}>
          <Button type="link">Actions</Button>
        </Dropdown>
      ),
    },
  ];
  const [data, setData] = useState<DataType[]>([]);
  useEffect(() => {
    const subscription = DataStore.observeQuery(Application).subscribe(
      ({ items }) => {
        console.log(items);
        setData(items as DataType[]);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return <Table rowKey="id" columns={columns} dataSource={data} />;
};

export default UserActiveTable;
