import { Link, NavLink } from "react-router-dom";
import style from './Navigation.module.scss';
import coffeeIcon from '../../assets/coffee.png';
import user from '../../assets/user.png';
import cart from '../../assets/cart.png';
import { useState } from "react";
import { CartModal } from "../CartModal/CartModal";

export function Navigation() {

  const [isModalOpen, setisModalOpen] = useState(false);

  const openCart = () => {
    setisModalOpen(true);
  };
  const closeCart = () => {
    setisModalOpen(false);
  }


  return (
    <div className={style.navBarContainer}>
      <nav className={style.navbarStyle}>
        <ul>
          <li>Dansk</li>
        </ul>
        <ul>

          <li>
            <img className={style.navIcon} onClick={openCart} src={cart} alt="cart" />
          </li>
          <li>
            <NavLink style={({ isActive }) => isActive ? { textDecoration: 'underline' } : { textDecoration: 'none' }} to={'/login'}>
              <img className={style.navIcon} src={user} alt="user" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={style.coffeeIcon}>
        <Link to={'/'}>
          <h2>Sunshine Coffee</h2>
          <img src={coffeeIcon} alt="coffee cup" />
        </Link>
      </div>

      <CartModal isOpen={isModalOpen} onClose={closeCart} />
    </div>
  )
}
