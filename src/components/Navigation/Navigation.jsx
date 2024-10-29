import { NavLink } from "react-router-dom";
import style from './Navigation.module.scss'

export function Navigation() {
  return (
    <>
      <nav className={style.navbarStyle}>
        <ul>
          <li>
            <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to={'/'}>HOME</NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.coffeeIcon}>
      </div>
    </>
  )
}
