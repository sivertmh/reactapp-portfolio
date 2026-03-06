import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img
        src={"/assets/logo/smh.svg"}
        className={style.logo}
        alt="Logo for Sivert M. Hansen"
      />
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
