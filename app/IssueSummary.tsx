import { Status } from "@prisma/client";
import Link from "next/link";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, closed, inProgress }: Props) => {
  const issues: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In_Progress Issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed Issues", value: closed, status: "CLOSED" },
  ];
  return (
    <div className=" flex space-x-3">
      {issues.map((item) => (
        <div
          className=" flex flex-col border border-gray-300 rounded-md space-y-2 p-4 "
          key={item.label}
        >
          <Link
            className=" text-sm"
            href={`/issues/list?status=${item.status}`}
          >
            {item.label}
          </Link>
          <p className=" font-bold text-lg">{item.value}</p>
        </div>
      ))}
    </div>
  );
};

export default IssueSummary;
