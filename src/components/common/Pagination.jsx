import { useState } from "react";

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
    <div>
      <div className="flex items-center justify-end gap-5">
        <button
          type="button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-black rounded text-white px-5 py-2"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="bg-black rounded text-white px-5 py-2"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
