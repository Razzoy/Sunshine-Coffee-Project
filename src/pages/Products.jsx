import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext";
import { PageDivider } from "../components/PageDivider/PageDivider";
import { PageCard } from '../components/PageCard/PageCard';
import { Wrapper } from "../components/Wrapper/Wrapper";
import style from '../components/Wrapper/Wrapper.module.scss';

export function Products() {

    const [products, setProducts] = useState([]);

    const { cartData, addToCart } = useContext(CartContext)
    console.log("CardData is", cartData);


    useEffect(() => {
        fetch('http://localhost:8081/products')
            .then(res => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
            <PageDivider />
            <Wrapper>
                <h1>Our picks for you</h1>
                <section className={style.productsContainer}>
                    {products.map((item) => {
                        return (
                            <PageCard key={item.id} header={item.name} img={item.image} alt={item.name} customStyle={'style.productCard'} roast={item.roast}>
                                <h4>{item.price} DKK</h4>
                                <button onClick={() => addToCart(item)}>Add to cart</button>
                            </PageCard>
                        )
                    })}
                </section>
            </Wrapper>
        </>

    )
}
