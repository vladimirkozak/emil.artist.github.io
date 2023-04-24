import { NavLink } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="wrapper">
      <header className="header">
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
                Catalog
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                to='/contacts'
                activeClassName='active'
                className="navigation__link"
              >
                Info
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;