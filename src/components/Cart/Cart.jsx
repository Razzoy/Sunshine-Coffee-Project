import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import style from './Cart.module.scss'
import { Link } from "react-router-dom";



export function Cart({ onClose }) {

  const { cartData, clearCart, subtractFromCart, addToCart } = useContext(CartContext);
  const subtotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.25;
  const totalPrice = subtotal + tax;
  const totalQuantity = cartData.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      <div className={style.productCheck}>
        {cartData.length === 0 ? (
          <>
            <div className={style.goToProducts}>
              <p>No products yet added..</p>
              <button onClick={onClose}><Link to={'/products'}>Go to products</Link></button>
            </div>
          </>
        ) :
          <>
            <div className={style.cartContainer}>
              {cartData.map((item) => {
                return (
                  <div key={item.id}>
                    <div className={style.productInfo}>
                      <h4>{item.name}</h4>
                      <div className={style.quantityCount}>
                        <button onClick={() => subtractFromCart(item)}>-</button>
                        <p>{item.quantity}</p>
                        <button onClick={() => addToCart(item)}>+</button>
                      </div>
                      <p>{item.price * item.quantity} DKK</p>
                    </div>
                    <span className={style.divider}></span>
                  </div>
                )
              })}

              <div className={style.clearButton}>
                <button onClick={() => clearCart()}>Empty Cart</button>
              </div>
              <div className={style.flexField}>
                <p>Tax (25%)</p>
                <p>{tax} DKK</p>
              </div>

              <div className={style.flexField}>
                <p>Total</p>
                <p>{totalPrice} DKK</p>
              </div>

              <div className={`${style.flexField} ${style.checkout}`}>
                <p>Items in cart: {totalQuantity}</p>
                <button onClick={onClose}><Link to={'/checkout'}>Go to checkout</Link></button>
              </div>

            </div>
          </>
        }</div>

    </>
  )
}
