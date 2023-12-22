import { Status } from "@prisma/client";

// const statusMap: Record<
//   Status,
//   { label: string; color: "red" | "violet" | "green" }
// > = {
//   OPEN: { label: "Open", color: "red" },
//   IN_PROGRESS: { label: "In Progress", color: "violet" },
//   CLOSED: { label: "Closed", color: "green" },
// };

const IssueStatusBadge = ({ status }: { status: Status }) => {
  if (status === "OPEN")
    return (
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        {status}
      </span>
    );
  if (status === "IN_PROGRESS")
    return (
      <span className="inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-xs font-medium text-violet-700 ring-1 ring-inset ring-violet-600/10">
        {status}
      </span>
    );
  if (status === "CLOSED")
    return (
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/10">
        {status}
      </span>
    );
};

export default IssueStatusBadge;
