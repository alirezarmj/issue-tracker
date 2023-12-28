import Button from "@/app/components/Button";
import Link from "next/link";
import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditIssueButton = ({ issueId }: { issueId: number }) => {
  return (
    <Button width="full">
      <HiOutlinePencilSquare />
      <Link href={`/issues/edit/${issueId}`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
