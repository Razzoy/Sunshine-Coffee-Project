import { useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PageDivider } from '../components/PageDivider/PageDivider';
import { SectionTestimonies } from "../components/SectionTestimonies/SectionTestimonies";
import style from '../components/Wrapper/Wrapper.module.scss';
import { Wrapper } from "../components/Wrapper/Wrapper";
import { PageCard } from "../components/PageCard/PageCard";
import { CartContext } from "../context/CartContext";


export function Product() {
    const location = useLocation();
    const { productId } = location.state || {}; // Få produktID fra state
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext(CartContext);


    useEffect(() => {
        if (productId) {
            fetch(`http://localhost:8081/products/${productId}`)
                .then(res => res.json())
                .then(data => setProduct(data));
        }
    }, [productId]);

    return (
        <Wrapper>
            {product &&
                <section className={style.singleProductContainer}>
                    <PageDivider />
                    <PageCard key={product.id} header={product.name} img={product.image} alt={product.name} customStyle={'style.productCard'} roast={product.roast}>
                        <p>{product.description}</p>
                        <h4>Price: {product.price} DKK</h4>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                    </PageCard>
                    <PageDivider />
                    <SectionTestimonies />
                </section>
            }
        </Wrapper>
    );
}
