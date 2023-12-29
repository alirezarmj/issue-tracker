import Link from "next/link";
import Button from "../../components/Button";
import IssueStatusFilter from "./IssueStatusFilter";

const IssueActions = () => {
  return (
    <div className="my-4 flex justify-between items-center">
      <IssueStatusFilter />
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
