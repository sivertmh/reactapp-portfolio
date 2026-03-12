import style from "./Projectcard.module.css";

function Projectcard({ title, img }) {
  return (
    <div className={style.projectcard_cont}>
      <img
        className={style.proj_thumbnail}
        src={img}
        alt={"Thumbnail for prosjekt: " + title}
      />
      <div className={style.proj_info}>
        <b>{title}</b>
        <img
          className={style.github_logo}
          src="/assets/icons/GitHub_Invertocat_White.svg"
          alt="Github logo"
        />
      </div>
    </div>
  );
}

export default Projectcard;
