import style from './PageCard.module.scss'

export function PageCard({ header, text, img, alt, children, customStyle, roast }) {

  let imageSrc;
  try {
    // Prøv at oprette en ny URL; hvis img er en gyldig URL, vil dette ikke kaste en fejl.
    imageSrc = new URL(img).href; 
  } catch {
    // Hvis det fejler, antager vi, at det er en lokal sti
    imageSrc = `src/assets/${img}`;
  }

  //Opret roast level for kaffen
  const roastCircles = (roastLevel) => {
    const circles = []; //opret tomt array
    for (let i = 1; i <= 5; i++) { //Loop funktion for de 5 cirkler
      circles.push( //tilføj cirkel til array
        <div key={i} className={`${style.circle} ${i <= roastLevel ? style.filled : style.empty}`} /> //selve cirklen med styling afhængig af roast level
      );
    }
    return circles;
  };

  return (
    <div className={`${customStyle ? style.productsCard : style.cardStyling}`}>
      {header && <h2>{header}</h2>}
      {text && <p>{text}</p>}
      {img && <img src={imageSrc} alt={alt} />}
      {roast && <div className={style.roastContainer}>
        <p>Roast: </p>
        {roastCircles(roast)}
      </div>}
      {children}
    </div>
  )
}
