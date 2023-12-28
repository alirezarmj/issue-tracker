import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import Markdown from "react-markdown";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <h1 className=" text-2xl font-semibold">{issue.title}</h1>
      <div className=" flex space-x-2 my-4">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>

      <div className="prose max-w-full bg-green-50 p-3 rounded-md mt-4">
        <Markdown>{issue.description}</Markdown>
      </div>
    </>
  );
};

export default IssueDetails;
