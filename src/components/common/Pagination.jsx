import { useState } from "react";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";

const Pagination = ({
  itemsPerPage,
  totalDataCount,
  currentPage,
  setCurrentPage,
}) => {
  const totalPages = Math.ceil(totalDataCount / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-end gap-5">
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="border border-gray-400 rounded p-1 text-xl text-gray-500 disabled:cursor-not-allowed"
        >
          <MdOutlineChevronLeft />
        </button>
        <span className="text-sm font-semibold">
          {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="border border-gray-400 rounded p-1 text-xl text-gray-500"
        >
          <MdOutlineChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
