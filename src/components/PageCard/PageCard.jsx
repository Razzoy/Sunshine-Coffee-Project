import style from './PageCard.module.scss'

export function PageCard({header, text, img, alt, children}) {
  return (
    <div className={style.cardStyling}>
        {header && <h2>{header}</h2>}
        {text && <p>{text}</p>}
        {img && <img src={`src/assets/${img}`} alt={alt} />}
        {children}
    </div>
  )
}
