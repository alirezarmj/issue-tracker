"use client";
import { Status } from "@prisma/client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueStatusFilter = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const router = useRouter();

  return (
    <select
      className=" w-32 border border-cyan-500 focus:border-cyan-500 focus:outline-0 rounded-md h-10"
      onChange={(e) => {
        const status = e.target.value;
        setSelectedStatus(status);
        // const query = status ? `?status=${status}` : "";
        // console.log(status);
        // router.push("/issues/list" + query);
        const query = status !== "All" ? `?status=${status}` : "";
        router.push("/issues/list" + query);
      }} // Attach the onChange handler
      value={selectedStatus}
    >
      {/* <option value="">Unassign</option> */}
      {statuses?.map((status) => (
        <option key={status.value} value={status.value}>
          {status.label}
        </option>
      ))}
    </select>
  );
};

export default IssueStatusFilter;
