"use client";
import { useRouter, useSearchParams } from "next/navigation";
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
  const router = useRouter();
  const searchParams = useSearchParams();

  function changePage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  }

  if (pageCount <= 1) return null;

  return (
    <div className=" flex items-center space-x-2">
      <p>
        page {currentPage} of {pageCount}
      </p>
      <Button
        onClick={() => changePage(1)}
        color="gray"
        disabled={currentPage === 1}
      >
        <BsChevronDoubleLeft />
      </Button>
      <Button
        onClick={() => changePage(currentPage - 1)}
        color="gray"
        disabled={currentPage === 1}
      >
        <BsChevronLeft />
      </Button>
      <Button
        onClick={() => changePage(currentPage + 1)}
        color="gray"
        disabled={currentPage === pageCount}
      >
        <BsChevronRight />
      </Button>
      <Button
        onClick={() => changePage(pageCount)}
        color="gray"
        disabled={currentPage === pageCount}
      >
        <BsChevronDoubleRight />
      </Button>
    </div>
  );
};

export default Pagination;
