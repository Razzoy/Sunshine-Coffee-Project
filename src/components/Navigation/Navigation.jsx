import { Link, NavLink } from "react-router-dom";
import style from './Navigation.module.scss'
import coffeeIcon from '../../assets/coffee.png'

export function Navigation() {
  return (
    <div className={style.navBarContainer}>
      <nav className={style.navbarStyle}>
        <ul>
          <li>Danish</li>
          <li>
            <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to={'/'}>H</NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.coffeeIcon}>
        <Link to={'/'}>
        <h2>Sunshine Coffee</h2>
        <img src={coffeeIcon} alt="coffee cup" />
        </Link>
      </div>
    </div>
  )
}
