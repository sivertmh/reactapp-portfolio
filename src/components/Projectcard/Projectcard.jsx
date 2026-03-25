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
      </div>
    </div>
  );
}

export default Projectcard;
