import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";
import { useTranslation } from "react-i18next";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { Squash as Hamburger } from "hamburger-react";
import NavMobile from "./NavMobile/NavMobile";
import Counter from "@components/UI/Counter/Counter";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();
  const [lang, setLang] = useState("pl");
  const [isOpen, setIsOpen] = useState(false);
  const productsFromCart = useSelector((state) => state.cart.products);

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
              <NavLink to="/catalog" className="navigation__link">
                {t("navbar.shop")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink to="/calendar" className="navigation__link">
                {t("navbar.calendar")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink to="/about" className="navigation__link">
                {t("navbar.about")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink to="/faq" className="navigation__link">
                {t("navbar.FAQ")}
              </NavLink>
            </li>

            <li className="navigation__item">
              <NavLink to="/contacts" className="navigation__link">
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
              <NavLink to="/cart" className="navigation__link">
                <button className="navigation__btn-lang">
                  <div className="navigation__wrap">
                    <Counter count={productsFromCart.length} />
                    <ShoppingBagIcon fontSize="small" />
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
