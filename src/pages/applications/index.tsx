import { Button } from "antd";
import { useState } from "react";
import AddEntry from "../../components/drawers/applicationModule/AddEntry";
import ApplicationsTable from "../../components/table/applicationModule/ApplicationTable";

function Applications() {
  const [open, setOpen] = useState(false);
  return (
    <section>
      <div className="flex justify-between">
        <div>
          <h2>All Users</h2>
          <span>More than 400+ new users</span>
        </div>
        <div className="space-x-4 flex items-center">
          <Button
            onClick={() => setOpen((prev) => !prev)}
            type="primary"
            className="rounded-md"
          >
            + Create New Entry
          </Button>
          <Button type="default" className="rounded-md">
            Generate Report
          </Button>
        </div>
      </div>

      <div className="my-10">
        <ApplicationsTable />
      </div>
      <AddEntry visible={open} onClose={() => setOpen(false)} />
    </section>
  );
}

export default Applications;
