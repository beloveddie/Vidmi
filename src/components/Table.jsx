import { useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ headings, currentData, data, setData }) => {
  // set table sort order to ascending
  const [isAscending, setIsAscending] = useState(true);
  const [sortColumn, setSortColumn] = useState("");

  const handleSort = (sortBy) => {
    const sortData = [...data];
    let sortby = sortBy.toLowerCase();
    if (sortby === "genre") {
      sortData.sort((a, b) => {
        let sortByA = a[sortby].name.toUpperCase(),
          sortByB = b[sortby].name.toUpperCase();

        if (isAscending) {
          if (sortByA < sortByB) return -1;
          if (sortByA > sortByB) return 1;
          return 0;
        }

        if (sortByA < sortByB) return 1;
        if (sortByA > sortByB) return -1;
        return 0;
      });
    } else if (sortby === "title") {
      sortData.sort((a, b) => {
        let sortByA = a[sortby].toUpperCase(),
          sortByB = b[sortby].toUpperCase();

        if (isAscending) {
          if (sortByA < sortByB) return -1;
          if (sortByA > sortByB) return 1;
          return 0;
        }
        if (sortByA < sortByB) return 1;
        if (sortByA > sortByB) return -1;
        return 0;
      });
    }
    sortData.sort((a, b) => {
      if (isAscending) {
        return b[sortby] - a[sortby];
      }
      return a[sortby] - b[sortby];
    });
    setData(sortData);
    setIsAscending(!isAscending);
    setSortColumn(sortby);
  };

  const handleDelete = (id) => {
    const newData = data.filter((datum) => datum._id !== id);
    setData(newData);
  };

  const handleLike = (datum) => {
    const newData = [...data];
    const index = newData.indexOf(datum);
    datum[index] = { ...newData[index] };
    newData[index].liked = !datum[index].liked;
    setData(newData);
  };

  return (
    <>
      <table
        className="table table-striped  container mt-2"
        style={{ width: "80%" }}
      >
        <TableHead
          headings={headings}
          handleSort={handleSort}
          isAscending={isAscending}
          sortColumn={sortColumn}
        />
        <TableBody
          data={currentData}
          handleDelete={handleDelete}
          handleLike={handleLike}
        />
      </table>
    </>
  );
};

export default Table;
