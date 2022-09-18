import { Button, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React from "react";
import { useNavigate } from "react-router-dom";

interface DataType {
  key: string;
  name: string;
  rating: number;
  company: string;
  comission: number;
  earnings: number;
}

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    rating: 3,
    company: "Eagle",
    comission: 5000,
    earnings: 30000,
  },
];

const UserReviewTable: React.FC = () => {
  const navigate = useNavigate();
  const columns: ColumnsType<DataType> = [
    {
      title: "NAMES",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "EARNINGS",
      dataIndex: "earnings",
      key: "earnings",
    },
    {
      title: "COMISSION",
      dataIndex: "comission",
      key: "comission",
    },
    {
      title: "COMPANY",
      key: "company",
      dataIndex: "company",
    },

    {
      title: "RATING",
      dataIndex: "rating",
      key: "rating",
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button onClick={() => navigate(`/users/${record.key}`)} type="ghost">
          View
        </Button>
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};

export default UserReviewTable;
