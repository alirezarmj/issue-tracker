// "use client";
import prisma from "@/prisma/client";
import { IssueStatusBadge } from "./components";
import Link from "next/link";
import Image from "next/image";
const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });
  return (
    <div className=" border border-gray-200 p-4 rounded-md">
      {" "}
      <p className=" text-lg font-bold">Latest Issues</p>
      <table className="min-w-full  ">
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id} className=" w-full ">
              <td className="px-6 py-4 border-b border-gray-200 flex justify-between  space-y-2  whitespace-no-wrap">
                <div className="flex flex-col">
                  <div>
                    <Link href={`/issues/${issue.id}`}> {issue.title}</Link>
                  </div>
                  <div>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                </div>
                <div>
                  {issue.assignedToUser && (
                    <Image
                      src={issue.assignedToUser?.image!}
                      alt={issue.assignedToUser?.name!}
                      width={32} // Adjust width and height as needed
                      height={32}
                      className="w-8 h-8 rounded-full cursor-pointer"
                      referrerPolicy="no-referrer"
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LatestIssues;
