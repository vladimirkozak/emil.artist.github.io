import './NotFound.scss';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <div className='not-found-wrap'>
        <h3 className='not-found__status'>
          {t('notFound.error')} 404
        </h3>
        <p className='not-found__msg'>
          {t('notFound.msg')}
        </p>
      </div>
    </div>
  );
};

export default NotFound;