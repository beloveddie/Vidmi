import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ headings, data }) => {
  return (
    <table className="table table-striped container">
      <TableHead headings={headings} />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
