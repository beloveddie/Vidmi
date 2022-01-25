const TableBody = ({ data, handleDelete }) => {
  return (
    <tbody>
      {data.map(({ _id, title, genre, stock, rate }) => (
        <tr key={_id}>
          <td>{title}</td>
          <td>{genre.name}</td>
          <td>{stock}</td>
          <td>{rate}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(_id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
