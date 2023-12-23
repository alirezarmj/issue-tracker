import prisma from "@/prisma/client";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import Markdown from "react-markdown";

import Button from "@/app/components/Button";
import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import Link from "next/link";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import IssueDetails from "./IssueDetails";

interface Props {
  params: { id: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  //   if (typeof params.id !== "number") notFound();
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  // Ensure issue.description is a string

  return (
    <div className=" grid md:gap-0 gap-y-5 grid-cols-1 md:grid-cols-2 ">
      <div>
        <IssueDetails issue={issue} />
      </div>
      <div>
        <EditIssueButton issuseId={issue.id} />
      </div>
    </div>
  );
};

export default IssueDetailPage;
