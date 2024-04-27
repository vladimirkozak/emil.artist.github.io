import { NavLink } from "react-router-dom";
import "./NavMobile.scss";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import MotionLi from "../../../components/UI/MotionLi/MotionLi";

const NavMobile = () => {
  const {
    t,
    i18n: { changeLanguage },
  } = useTranslation();

  return (
    <nav className="navMobile">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed left-0 shadow-4xl right-0 top-[3.5rem] p-5 pt-0 bg-neutral-950 border-b border-b-white/20"
        >
          <ul className="navMobile__list">
            <MotionLi indx={0}>
              <li className="navMobile__item">
                <NavLink
                  to="/catalog"
                  activeClassName="active"
                  className="navMobile__link"
                >
                  {t("navbar.shop")}
                </NavLink>
              </li>
            </MotionLi>

            <MotionLi indx={1}>
              <li className="navMobile__item">
                <NavLink
                  to="/calendar"
                  activeClassName="active"
                  className="navMobile__link"
                >
                  {t("navbar.calendar")}
                </NavLink>
              </li>
            </MotionLi>

            <MotionLi indx={2}>
              <li className="navMobile__item">
                <NavLink
                  to="/catalog"
                  activeClassName="active"
                  className="navMobile__link"
                >
                  {t("navbar.about")}
                </NavLink>
              </li>
            </MotionLi>

            <MotionLi indx={3}>
              <li className="navMobile__item">
                <NavLink
                  to="/catalog"
                  activeClassName="active"
                  className="navMobile__link"
                >
                  {t("navbar.FAQ")}
                </NavLink>
              </li>
            </MotionLi>

            <MotionLi indx={4}>
              <li className="navMobile__item">
                <NavLink
                  to="/contacts"
                  activeClassName="active"
                  className="navMobile__link"
                >
                  {t("navbar.contacts")}
                </NavLink>
              </li>
            </MotionLi>
          </ul>
        </motion.div>
      </AnimatePresence>
    </nav>
  );
};

export default NavMobile;
