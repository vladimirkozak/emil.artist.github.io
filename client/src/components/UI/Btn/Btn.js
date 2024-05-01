import "./Btn.scss";

const Btn = ({ title, onClick, color, background }) => {
  return (
    <button className="btn" onClick={onClick} style={{ color, background }}>
      {title}
    </button>
  );
};

export default Btn;
