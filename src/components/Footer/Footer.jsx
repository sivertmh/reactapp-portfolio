import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <a className={style.footer__github} href="https://github.com/sivertmh">
        @sivertmh
        <img
          className=""
          src={`${process.env.PUBLIC_URL}/assets/icons/GitHub_Invertocat_White.svg`}
          alt="Logo for Github"
        />
      </a>
    </div>
  );
};

export default Footer;
