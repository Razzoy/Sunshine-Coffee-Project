import { useContext } from "react";
import { CartContext } from "../../context/CartContext";



export function Cart() {

  const { cartData, clearCart, removeFromCart, subtractFromCart, addToCart } = useContext(CartContext);

  return (
    <>
      <h4>Cart</h4>
      <div>
        {cartData.map((item) => {
          return (
            <div key={item.title}>
              <h4>{item.title}</h4>
              <div>
                <button onClick={() => subtractFromCart(item)}>-</button>
                <p>{item.qauntity}</p>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
              <div>
                <p>Price: € {item.price * item.quantity}</p>
                <button onClick={() => removeFromCart(item)}>Remove from cart</button>
              </div>
            </div>
          )
        })}
        <button onClick={() => clearCart()}>Empty Cart</button>
      </div>
    </>
  )
}
