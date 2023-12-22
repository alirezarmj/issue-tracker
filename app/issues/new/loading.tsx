import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewPage = () => {
  return (
    <div className=" w-2/3">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default LoadingNewPage;
