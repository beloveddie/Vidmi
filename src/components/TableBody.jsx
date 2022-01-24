const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map(({ _id, title, genre, numberInStock, dailyRentalRate }) => (
        <tr key={_id}>
          <td>{title}</td>
          <td>{genre.name}</td>
          <td>{numberInStock}</td>
          <td>{dailyRentalRate}</td>
          <td>
            <button className="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
