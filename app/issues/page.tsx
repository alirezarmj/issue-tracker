import Link from "next/link";

const IssuesPage = () => {
  return (
    <div>
      <button className=" px-4 py-2  bg-cyan-700 rounded-md text-white">
        <Link href="/issues/new">new issue</Link>
      </button>
    </div>
  );
};

export default IssuesPage;
