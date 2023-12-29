import { Status } from "@prisma/client";
import React from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueStatusFilter = () => {
  return (
    <select
      className=" w-32 border border-cyan-500 focus:border-cyan-500 focus:outline-0 rounded-md h-10"

      // onChange={handleAssignChange} // Attach the onChange handler
      // value={selectedUserId} // Control the select value using state
    >
      {/* <option value="">Unassign</option> */}
      {statuses?.map((status) => (
        <option key={status.value} value={status.value}>
          {status.label}
        </option>
      ))}
      {/* Add other options here */}
    </select>
  );
};

export default IssueStatusFilter;
