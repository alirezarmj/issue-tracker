"use client";
import { Status } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const statuses: { label: string; value?: Status }[] = [
  { label: "All" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueStatusFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const statusFromQuery = searchParams.get("status") || "";
  const [selectedStatus, setSelectedStatus] = useState(statusFromQuery);
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;
    setSelectedStatus(status);
    const params = new URLSearchParams();

    if (status && status !== "All") {
      params.append("status", status);
    }

    if (searchParams.get("orderBy")) {
      params.append("orderBy", searchParams.get("orderBy")!);
    }

    const query = params.toString() ? `?${params.toString()}` : "";
    router.push("/issues/list" + query);
  };
  return (
    <select
      className=" w-32 border border-cyan-500 focus:border-cyan-500 focus:outline-0 rounded-md h-10"
      onChange={handleStatusChange}
      defaultValue={searchParams.get("status") || ""}
      value={selectedStatus}
    >
      {/* <option value="">Unassign</option> */}
      {statuses?.map((status) => (
        <option key={status.value || ""} value={status.value || ""}>
          {status.label}
        </option>
      ))}
    </select>
  );
};

export default IssueStatusFilter;
