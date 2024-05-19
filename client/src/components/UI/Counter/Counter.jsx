import "./Counter.scss";

const Counter = ({ count }) => {
  if (!count) {
    return;
  }
  return <div className="counter">{count}</div>;
};

export default Counter;
