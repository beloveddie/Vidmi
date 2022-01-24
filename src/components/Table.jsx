import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = ({ headers, data }) => {
  return (
    <table className="table table-striped container">
      <TableHead headers={headers} />
      <TableBody data={data} />
    </table>
  );
};

export default Table;
