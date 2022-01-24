const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(({ _id, title, genre, stock, rate }) => (
        <tr key={_id}>
          <td>{title}</td>
          <td>{genre.name}</td>
          <td>{stock}</td>
          <td>{rate}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
