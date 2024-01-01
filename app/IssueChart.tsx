"use client";
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar } from "recharts";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueChart = ({ open, inProgress, closed }: Props) => {
  const data: { label: string; value: number }[] = [
    { label: "Open Issues", value: open },
    { label: "In Progress", value: inProgress },
    { label: "Closed", value: closed },
  ];
  return (
    <div className=" border border-gray-200 p-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="label" />
          <YAxis />
          <Bar dataKey="value" barSize={60} fill="#6e56cf" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IssueChart;
