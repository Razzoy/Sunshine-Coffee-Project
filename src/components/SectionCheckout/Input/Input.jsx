import style from './Input.module.scss'

export function Input({type, id, label}) {
    return (
        <div className={style.formGroup}>
            <label htmlFor={id}>{label}</label>
            <input type={type} id={id} required />
        </div>
    )
}
