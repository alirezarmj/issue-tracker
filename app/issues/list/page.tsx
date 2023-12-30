import prisma from "@/prisma/client";
import Link from "next/link";
import { IssueStatusBadge } from "@/app/components";
import IssueActions from "./IssueActions";
import { Issue, Status } from "@prisma/client";
import { GoArrowUp } from "react-icons/go";
import Pagination from "@/app/components/Pagination";

const columns: { label: string; value: keyof Issue; className?: string }[] = [
  {
    label: "Issue",
    value: "title",
    className:
      "px-6 py-3  bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider",
  },
  {
    label: "Status",
    value: "status",
    className:
      "px-6 py-3 hidden md:table-cell   bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider",
  },
  {
    label: "Created",
    value: "createdAt",
    className:
      "px-6 py-3 hidden md:table-cell   bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider",
  },
];

const IssuesPage = async ({
  searchParams,
}: {
  searchParams: { status: Status; orderBy: keyof Issue; page: string };
  page: string;
}) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const orderBy = columns
    .map((column) => column.value)
    .includes(searchParams.orderBy)
    ? {
        [searchParams.orderBy]: "asc",
      }
    : undefined;
  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const issues = await prisma.issue.findMany({
    where: { status },
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({ where: { status } });
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
              {columns.map((column) => (
                <th key={column.value} className={column.className}>
                  <Link
                    //  href={`/issues/list?orderBy=${column.value}`}
                    href={{ query: { ...searchParams, orderBy: column.value } }}
                  >
                    {" "}
                    {column.label}
                  </Link>
                  {column.value === searchParams.orderBy && (
                    <GoArrowUp className="inline" />
                  )}
                </th>
              ))}
              {/* <th className="px-6 py-3  bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider">
                Issue
              </th>
              <th className="px-6 py-3 hidden md:table-cell   bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 hidden md:table-cell   bg-purple-50 text-left  text-base leading-4   font-semibold text-gray-500 uppercase tracking-wider">
                Created
              </th> */}
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
        <Pagination
          pageSize={pageSize}
          currentPage={page}
          itemCount={issueCount}
        />
      </div>
    </div>
  );
};
export const dynamic = "force-dynamic";
export default IssuesPage;
