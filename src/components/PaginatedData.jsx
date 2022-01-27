import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Table from "./Table";
import Alert from "./Alert";

function PaginatedItems({ itemsPerPage, items, headings, setData }) {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      {items.length ? (
        <Table
          headings={headings}
          data={items}
          currentData={currentItems}
          setData={setData}
        />
      ) : (
        <Alert data="movies" />
      )}

      <ReactPaginate
        breakLabel="..."
        containerClassName="Page navigation"
        className="pagination justify-content-center  m-5"
        pageClassName="page-item"
        disabledClassName="disabled"
        activeClassName="active"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        previousClassName="page-item"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
