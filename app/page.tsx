import IssueChart from "./IssueChart";
import IssueSummary from "./IssueSummary";
import LatestIssues from "./LatestIssues";
import Pagination from "./components/Pagination";

export default async function Home() {
  const open = await prisma?.issue.count({ where: { status: "OPEN" } })!;
  const inProgress = await prisma?.issue.count({
    where: { status: "IN_PROGRESS" },
  })!;
  const closed = await prisma?.issue.count({ where: { status: "CLOSED" } })!;
  return (
    <div className=" grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className=" flex flex-col gap-4">
        <IssueSummary open={open} inProgress={inProgress} closed={closed} />
        <IssueChart open={open} inProgress={inProgress} closed={closed} />
      </div>
      <LatestIssues />
    </div>
  );
}
