import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ data }) => {
  return (
    <table className="table table-striped container">
      <TableHead />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
