import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  //   if (typeof params.id !== "number") notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <div>
      <h1 className=" text-2xl font-semibold">{issue.title}</h1>
      <div className=" flex space-x-2 my-4">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <p className=" w-full bg-green-50 p-3 rounded-md">{issue.description}</p>
    </div>
  );
};

export default IssueDetailPage;
