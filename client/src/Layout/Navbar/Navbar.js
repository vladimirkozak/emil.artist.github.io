import { NavLink } from "react-router-dom";
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="header">
      <div>
        Logo
      </div>
      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink
              to='/'
              activeClassName='active'
              className="navigation__link"
            >
              Home
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              to='/catalog'
              activeClassName='active'
              className="navigation__link"
            >
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;