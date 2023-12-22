import delay from "delay";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import IssueActions from "./IssueActions";

const LoadingIssuesPage = () => {
  const issues = [1, 2, 3, 4, 5];

  return (
    <div>
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
              <tr key={issue} className="border-t border-gray-200">
                <td className="px-6 py-4  whitespace-no-wrap">
                  <Skeleton />
                  <div className="block  md:hidden">
                    <Skeleton />
                  </div>
                </td>

                <td className="px-6 py-4 hidden md:table-cell whitespace-no-wrap">
                  <Skeleton />
                </td>
                <td className="px-6 py-4 hidden md:table-cell whitespace-no-wrap">
                  <Skeleton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LoadingIssuesPage;
