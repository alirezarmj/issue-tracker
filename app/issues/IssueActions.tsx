import Link from "next/link";
import Button from "../components/Button";

const IssueActions = () => {
  return (
    <div className="my-4">
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default IssueActions;
