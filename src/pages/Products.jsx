import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";
import { PageDivider } from "../components/PageDivider/PageDivider";

export function Products() {

    const [products, setProducts] = useState();

    const {cartData, addToCart} = useContext(CartContext)
    // console.log("CardData is", cartData);
    

    useEffect(() => {
        fetch('http://localhost:8081/products')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);
    
    return (
        <section>
            <PageDivider/>
            <h1>Products</h1>
            {products &&
            products.products.map((item) => {
                return (
                    <figure key={item.name}>
                        <h3>{item.name}</h3>
                        {/* <img src={item.images[0]} alt="" /> */}
                        <h4>€ {item.price}</h4>
                        <p>{item.description}</p>
                        <button onClick={() => addToCart(item)}>Add to cart</button>
                    </figure>
                )
            })}
        </section>
    )
}
