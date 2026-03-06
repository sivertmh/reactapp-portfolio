import style from "./Projectcard.module.css"

function Projectcard({title, img}) {
    return (
        <div className={style.projectcard_cont}>
            <img src={img} alt="Thumbnail for prosjekt: Kalkulator" />
            <b>{title}</b>
        </div>
    );
}

export default Projectcard