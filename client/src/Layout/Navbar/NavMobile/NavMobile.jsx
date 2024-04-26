import { NavLink } from 'react-router-dom';
import './NavMobile.scss';
import { useTranslation } from 'react-i18next';

const NavMobile = () => {
  const { t, i18n: {changeLanguage} } = useTranslation();

  return (
    <nav className="navMobile">
        <ul className="navMobile__list">
          <li className="navMobile__item">
            <NavLink
              to='/catalog'
              activeClassName='active'
              className="navMobile__link"
            >
              {t('navbar.shop')}
            </NavLink>
          </li>

          <li className="navMobile__item">
            <NavLink
              to='/calendar'
              activeClassName='active'
              className="navMobile__link"
            >
              {t('navbar.calendar')}
            </NavLink>
          </li>

          <li className="navMobile__item">
            <NavLink
              to='/catalog'
              activeClassName='active'
              className="navMobile__link"
            >
              {t('navbar.about')}
            </NavLink>
          </li>

          <li className="navMobile__item">
            <NavLink
              to='/catalog'
              activeClassName='active'
              className="navMobile__link"
            >
              {t('navbar.FAQ')}
            </NavLink>
          </li>

          <li className="navMobile__item">
            <NavLink
              to='/contacts'
              activeClassName='active'
              className="navMobile__link"
            >
              {t('navbar.contacts')}
            </NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default NavMobile;