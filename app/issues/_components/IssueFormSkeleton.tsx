import React from "react";
// import Skeleton from "react-loading-skeleton";
import { Skeleton } from "@/app/components";

const IssueFormSkeleton = () => {
  return (
    <div className=" w-2/3">
      <Skeleton height="2rem" />
      <Skeleton height="20rem" />
    </div>
  );
};

export default IssueFormSkeleton;
