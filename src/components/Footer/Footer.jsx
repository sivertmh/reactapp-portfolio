import style from "./Footer.module.css";
import logo from "../../logo_s.svg";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div>
        <div className={style["footer__logo"]}>
          <img
            src={logo}
            className={style.logo}
            alt="Logo for Sivert M. Hansen"
          />
        </div>
        <div className={style["footer__github--wrapper"]}>
          <a
            className={style["footer__github"]}
            href="https://github.com/sivertmh"
            target="_blank"
          >
            <img
              className={style["footer__github--icon"]}
              src={`${process.env.PUBLIC_URL}/assets/icons/GitHub_Invertocat_White.svg`}
              alt="Logo for Github"
            />
            @sivertmh
          </a>
        </div>
        <div className={style["footer__social"]}>
          Epost:{" "}
          <a href="mailto:sihaa049@osloskolen.no">sihaa049@osloskolen.no</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
