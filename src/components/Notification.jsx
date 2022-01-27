const Notification = ({ data, dataName }) => {
  return (
    <button type="button" className="btn btn-primary position-relative m-1">
      {dataName}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {data.length}
        <span className="visually-hidden">Number of {dataName}</span>
      </span>
    </button>
  );
};

export default Notification;
