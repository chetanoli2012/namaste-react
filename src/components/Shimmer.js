const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array.from(Array(15).keys()).map(function (ele, idx) {
        return <div key={idx} className="shimmer-card"></div>;
      })}
    </div>
  );
};

export default Shimmer;
