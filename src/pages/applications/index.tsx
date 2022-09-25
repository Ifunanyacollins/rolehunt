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
          <h2>All Applications</h2>
        </div>
        <div className="space-x-4 flex items-center">
          <Button
            onClick={() => setOpen((prev) => !prev)}
            type="primary"
            className="rounded-md"
          >
            + Create New Entry
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
