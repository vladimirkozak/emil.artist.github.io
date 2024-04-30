import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Squash as Hamburger } from "hamburger-react";
import NavMobile from "./NavMobile/NavMobile";

const Navbar = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const [lang, setLang] = useState("pl");
  const [isOpen, setIsOpen] = useState(false);

  const onTapLangHandler = () => {
    setLang(lang === "pl" ? "en" : "pl");
    changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="humburger">
        <div>
          <NavLink to="/" className="logo" onClick={() => setIsOpen(false)}>
            Logo
          </NavLink>
        </div>
        <Hamburger
          toggled={isOpen}
          size={22}
          toggle={setIsOpen}
          color={"#fff"}
        />
      </div>
      {isOpen && <NavMobile setIsOpen={setIsOpen} />}
      <div className="wrapper">
        <div>
          <NavLink to="/" className="logo">
            Logo
          </NavLink>
        </div>
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                to="/catalog"
                activeClassName="active"
                className="navigation__link"
              >
                {t("navbar.shop")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink
                to="/calendar"
                activeClassName="active"
                className="navigation__link"
              >
                {t("navbar.calendar")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink
                to="/about"
                activeClassName="active"
                className="navigation__link"
              >
                {t("navbar.about")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink
                to="/faq"
                activeClassName="active"
                className="navigation__link"
              >
                {t("navbar.FAQ")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink
                to="/contacts"
                activeClassName="active"
                className="navigation__link"
              >
                {t("navbar.contacts")}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="navigation__right">
          <ul className="navigation">
            <li className="navigation__item">
              <button
                className="navigation__btn-lang"
                onClick={onTapLangHandler}
              >
                {lang}
              </button>
            </li>
            <li className="navigation__item">
              <NavLink
                to="/cart"
                activeClassName="active"
                className="navigation__link"
              >
                <button className="navigation__btn-lang">
                  <div className="navigation__wrap">
                    <span>3</span>
                    <ShoppingBasketIcon fontSize="small" />
                  </div>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
