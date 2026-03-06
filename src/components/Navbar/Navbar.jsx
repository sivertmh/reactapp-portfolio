import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../logo_smh.svg";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img src={logo} className={style.logo} alt="Logo for Sivert M. Hansen" />
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${style.navlink} ${isActive ? style.active_link : ""}`
        }
      >
        Hjem
      </NavLink>
      <NavLink
        to="/prosjekter"
        className={({ isActive }) =>
          `${style.navlink} ${isActive ? style.active_link : ""}`
        }
      >
        Prosjekter
      </NavLink>
      <NavLink
        to="/kontakt"
        className={({ isActive }) =>
          `${style.navlink} ${isActive ? style.active_link : ""}`
        }
      >
        Kontakt
      </NavLink>
    </div>
  );
};

export default Navbar;
