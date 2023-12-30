import Button from "./Button";
import {
  BsChevronDoubleLeft,
  BsChevronLeft,
  BsChevronRight,
  BsChevronDoubleRight,
} from "react-icons/bs";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ currentPage, itemCount, pageSize }: Props) => {
  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount <= 1) return null;
  return (
    <div className=" flex items-center space-x-2">
      <p>
        page {currentPage} of {pageCount}
      </p>
      <Button color="gray" disabled={currentPage === 1}>
        <BsChevronDoubleLeft />
      </Button>
      <Button color="gray" disabled={currentPage === 1}>
        <BsChevronLeft />
      </Button>
      <Button color="gray" disabled={currentPage === pageCount}>
        <BsChevronRight />
      </Button>
      <Button color="gray" disabled={currentPage === pageCount}>
        <BsChevronDoubleRight />
      </Button>
    </div>
  );
};

export default Pagination;
