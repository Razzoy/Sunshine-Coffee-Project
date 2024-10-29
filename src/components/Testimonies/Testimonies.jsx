import style from './Testimonies.module.scss'

export function Testimonies({name}) {
    return (
        <article className={style.articleStyling}>
            <h3>{name}</h3>
            <p>“Sunshine Coffee really deliveres a great product. I love their coffee and the guided flow is great...”</p>
        </article>
    )
}
