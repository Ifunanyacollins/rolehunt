import { Button } from "antd";
import React from "react";
import UserActiveTable from "../../components/table/userModule/UsersTable";

function Users() {
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h2>All Users</h2>
          <span>More than 400+ new users</span>
        </div>
        <div className="space-x-4 flex items-center">
          <Button type="default" className="rounded-md bg-black text-white">
            Generate Report
          </Button>
          <Button type="primary" className="rounded-md">
            + Create New
          </Button>
        </div>
      </div>

      <div className="my-10">
        <UserActiveTable />
      </div>
    </section>
  );
}

export default Users;
