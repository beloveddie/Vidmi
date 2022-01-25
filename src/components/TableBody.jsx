import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";

const TableBody = ({ data, handleDelete, handleLike }) => {
  return (
    <tbody>
      {data.map((datum) => {
        const { _id, title, genre, stock, rate, liked } = datum;

        return (
          <tr key={_id}>
            <td>{title}</td>
            <td>{genre.name}</td>
            <td>{stock}</td>
            <td>{rate}</td>
            <td onClick={() => handleLike(datum)}>
              {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(_id)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
