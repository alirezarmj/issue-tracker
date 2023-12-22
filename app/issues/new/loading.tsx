import { Skeleton } from "@/app/components";

const LoadingNewPage = () => {
  return (
    <div className=" w-2/3">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default LoadingNewPage;
