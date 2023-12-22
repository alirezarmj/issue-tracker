import prisma from "@/prisma/client";
import Link from "next/link";
import { IssueStatusBadge } from "@/app/components";
import IssueActions from "./IssueActions";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();

  return (
    // <div>
    //   <button className=" px-4  py-2  bg-cyan-700 rounded-md text-white">
    //     <Link href="/issues/new">new issue</Link>
    //   </button>
    // </div>
    <div className="container mx-auto">
      <IssueActions />
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full border ">
          <thead>
            <tr>
              <th className="px-6 py-3  bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider">
                Issue
              </th>
              <th className="px-6 py-3 hidden md:table-cell   bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 hidden md:table-cell   bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider">
                Created
              </th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.id} className="border-t border-gray-200">
                <td className="px-6 py-4  whitespace-no-wrap">
                  <Link
                    className=" text-violet-600 hover:underline"
                    href={`/issues/${issue.id}`}
                  >
                    {" "}
                    {issue.title}
                  </Link>
                  <div className="block  md:hidden">
                    <IssueStatusBadge status={issue.status} />
                  </div>
                </td>

                <td className="px-6 py-4 hidden md:table-cell whitespace-no-wrap">
                  <IssueStatusBadge status={issue.status} />
                </td>
                <td className="px-6 py-4 hidden md:table-cell whitespace-no-wrap">
                  {issue.createdAt.toDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssuesPage;
