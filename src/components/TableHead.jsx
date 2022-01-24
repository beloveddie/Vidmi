const TableHead = ({ headings }) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => (
          <th>{heading}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
