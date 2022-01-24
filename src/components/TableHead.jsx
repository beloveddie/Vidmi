const TableHead = ({ headings, handleSort }) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => (
          <th key={heading} onClick={() => handleSort(heading)}>
            {heading}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
