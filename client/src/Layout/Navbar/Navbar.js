import { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.scss';
import { useTranslation } from 'react-i18next';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Navbar = () => {
  const { t, i18n: {changeLanguage} } = useTranslation();
  const [lang, setLang] = useState('pl');

  const onTapLangHandler = () => {
    setLang(lang === 'pl' ? 'en' : 'pl');
    changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="wrapper">
        <div >
          <NavLink
            to='/'
            className="logo"
          >
            Logo
          </NavLink>
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                to='/catalog'
                activeClassName='active'
                className="navigation__link"
              >
                {t('navbar.catalog')}
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to='/contacts'
                activeClassName='active'
                className="navigation__link"
              >
                {t('navbar.contacts')}
              </NavLink>
            </li>
            <li className="navigation__item">
              <button
                className='navigation__btn-lang'
                onClick={onTapLangHandler}
              >
                {lang}
              </button>
            </li>
            <li className="navigation__item">
              <button className='navigation__btn-lang'>
                <div className='navigation__wrap'>
                  <span>3</span>
                  <ShoppingBasketIcon fontSize='small' />
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;