import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className='not-found-wrap'>
        <h3 className='not-found__status'>Error 404</h3>
        <p className='not-found__msg'>Page not found.</p>
      </div>
    </div>
  );
};

export default NotFound;