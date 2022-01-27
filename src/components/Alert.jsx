const Alert = ({ data }) => {
  return (
    <div className="alert alert-primary" role="alert">
      No {data} available!
    </div>
  );
};

export default Alert;
