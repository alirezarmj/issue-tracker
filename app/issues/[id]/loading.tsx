import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingDetailPage = () => {
  return (
    <div>
      {/* <h1 className=" text-2xl font-semibold">{issue.title}</h1> */}
      <Skeleton />
      <div className=" flex space-x-2 my-4">
        {/* <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p> */}
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </div>

      <div className="prose w-full bg-green-50 p-3 rounded-md mt-4">
        {/* <Markdown>{issue.description}</Markdown> */}
        <Skeleton count={3} />
      </div>
    </div>
  );
};

export default LoadingDetailPage;
