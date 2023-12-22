import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Markdown from "react-markdown";
import delay from "delay";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  delay(10000);
  //   if (typeof params.id !== "number") notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  // Ensure issue.description is a string

  return (
    <div>
      <h1 className=" text-2xl font-semibold">{issue.title}</h1>
      <div className=" flex space-x-2 my-4">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>

      <div className="prose w-full bg-green-50 p-3 rounded-md mt-4">
        <Markdown>{issue.description}</Markdown>
      </div>
    </div>
  );
};

export default IssueDetailPage;
