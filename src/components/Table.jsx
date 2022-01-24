import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ headings, data, setData }) => {
  const handleSort = (sortBy) => {
    const sortData = [...data];
    let sortby = sortBy.toLowerCase();
    if (sortby === "genre") {
      sortData.sort((a, b) => {
        let sortByA = a[sortby].name.toUpperCase(),
          sortByB = b[sortby].name.toUpperCase();

        if (sortByA < sortByB) return -1;
        if (sortByA > sortByB) return 1;
        return 0;
      });
    } else if (sortby === "title") {
      sortData.sort((a, b) => {
        let sortByA = a[sortby].toUpperCase(),
          sortByB = b[sortby].toUpperCase();

        if (sortByA < sortByB) return -1;
        if (sortByA > sortByB) return 1;
        return 0;
      });
    }
    sortData.sort((a, b) => {
      return a[sortby] - b[sortby];
    });
    setData(sortData);
  };

  return (
    <table className="table table-striped container">
      <TableHead headings={headings} handleSort={handleSort} />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
