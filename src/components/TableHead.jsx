import { RiArrowDropUpFill, RiArrowDropDownFill } from "react-icons/ri";

const TableHead = ({ headings, handleSort, isAscending, sortColumn }) => {
  return (
    <thead>
      <tr>
        {headings.map((heading) => (
          <th key={heading} scope="cols" onClick={() => handleSort(heading)}>
            {heading}
            {heading.toLowerCase() === sortColumn && isAscending ? (
              <RiArrowDropDownFill />
            ) : heading.toLowerCase() === sortColumn && !isAscending ? (
              <RiArrowDropUpFill />
            ) : null}
          </th>
        ))}
        <th>&nbsp;</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
  );
};

export default TableHead;
