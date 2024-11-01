import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { PageDivider } from '../components/PageDivider/PageDivider';
import { SectionTestimonies } from "../components/SectionTestimonies/SectionTestimonies";

export function Product() {
    const location = useLocation();
    const { productId } = location.state || {}; // Få produktID fra state
    const [product, setProduct] = useState(null);

    useEffect(() => {
        if (productId) {
            fetch(`http://localhost:8081/products/${productId}`)
                .then(res => res.json())
                .then(data => setProduct(data));
        }
    }, [productId]);

    return (
        <div>
            <PageDivider />
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <h4>{product.price} DKK</h4>
            <PageDivider />
            <SectionTestimonies />
        </div>
    );
}
