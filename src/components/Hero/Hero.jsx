import style from "./Hero.module.css";

const Hero = () => {
  return (
    <div>
      <div className={style["hero"]}>
        <div className={style["hero__header"]}>
          <h1>
            <b>Litt om</b> <i>meg</i>
          </h1>
        </div>
        <div className={style["hero__paragraph"]}>
          <p>
            Jeg er en IT-interessert 17-åring som går informatikklinja på Kuben videregående
            skole. Videre får du blitt litt kjent med meg og mine
            prosjekter.
          </p>
        </div>
      </div>
      <div className={style["hero"]}>
        <div className={style["hero__header"]}>
          <h1>
            <b>Mer om</b> <i>meg</i>
          </h1>
        </div>
        <div className={style["hero__paragraph"]}>
          <p>
            Ved siden av finner du filmen om meg, hvor jeg snakker litt om hva
            jeg driver med på skolen og hvem jeg er. Den er produsert av meg,
            men credits til medelev Alexander Skjerve Isaksen for filming av
            noen shots.
          </p>
        </div>
      </div>
      <div className={style["hero"]}>
        <div
          className={`${style["hero__header"]} ${style["header__border--fade"]}`}
        >
          <h1>
            <b>Interessene</b> <i>mine</i>
          </h1>
        </div>
        <div className={style["hero__paragraph"]}>
          <p>
            Jeg nevnte tidligere at jeg går informatikklinja på Kuben, og jeg
            kunne ikke vært mer fornøyd med det skoletilbudet. Hverdagen er fylt
            med interresant læring, samtidig som det gir meg tilgangen på et
            bredt spektrum, spesielt innen IT, av studier etterpå.
            <br />
            <br />
            Selv om jeg elsker tekniske ting og informasjonsteknologi, elsker
            jeg også det analoge og fysiske. Kortspill, Brettspill,
            Platespillere og DVDer er bare begynnelsen av lista.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
