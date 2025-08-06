import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPage } from "../redux/actions/movieAction";

const PaginationComponent = () => {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const pages = useSelector((state) => state.pageCount);

  useEffect(() => {
    setPageCount(pages);
  }, [pages]);

  const handlePageClick = (data) => {
    dispatch(getPage(data.selected + 1));
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName="flex justify-center items-center gap-1 sm:gap-2 p-2 sm:p-4 flex-wrap "
      pageClassName="inline-flex"
      pageLinkClassName="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
      previousClassName="inline-flex"
      nextClassName="inline-flex"
      previousLinkClassName="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
      nextLinkClassName="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200"
      breakClassName="inline-flex"
      breakLinkClassName="px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
      activeClassName="bg-blue-500 text-white border-blue-500"
    />
  );
};

export default PaginationComponent;