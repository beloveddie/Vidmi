import TableBody from "./TableBody";
import TableHead from "./TableHead";
import { useState } from "react";

const Table = ({ headings, data, setData }) => {
  // set table sort order to ascending
  const [isAscending, setIsAscending] = useState(true);

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
  };

  const handleDelete = (id) => {
    const newData = data.filter((datum) => datum._id !== id);
    setData(newData);
  };

  return (
    <table className="table table-striped container">
      <TableHead headings={headings} handleSort={handleSort} />
      <TableBody data={data} handleDelete={handleDelete} />
    </table>
  );
};

export default Table;
