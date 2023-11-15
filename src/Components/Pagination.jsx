import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  let pageNumbers = []

  for(let i = 1; i<= totalPages ; i++){
    pageNumbers.push(i) ;
  }

  return (
    <div className="flex justify-center mt-4">
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`mx-2 px-4 py-2 rounded ${
            page === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
