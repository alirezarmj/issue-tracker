import Button from "@/app/components/Button";
import Link from "next/link";
import React from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

const EditIssueButton = ({ issuseId }: { issuseId: number }) => {
  return (
    <Button>
      <HiOutlinePencilSquare />
      <Link href={`/issues/${issuseId}/edit`}>Edit Issue</Link>
    </Button>
  );
};

export default EditIssueButton;
