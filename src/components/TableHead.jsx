const TableHead = ({ headers }) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
