import './Btn.scss';

const Btn = ({ title, onClick }) => {
  return (
    <button className='btn' onClick={onClick}>
      {title}
    </button>
  );
};

export default Btn;