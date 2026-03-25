import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
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
    </div>
  );
};

export default Footer;
