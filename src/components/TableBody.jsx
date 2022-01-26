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
            <td onClick={() => handleLike(datum)} className="like">
              {liked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </td>
            <td>
              <button
                className="btn btn-sm btn-danger"
                id="delete"
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
