import Link from "next/link";

const IssueActions = () => {
  return (
    <div className="my-4">
      <button className="px-4  py-2 bg-cyan-700 rounded-md text-white">
        <Link href="/issues/new">New Issue</Link>
      </button>
    </div>
  );
};

export default IssueActions;
