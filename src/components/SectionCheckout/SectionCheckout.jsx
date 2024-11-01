import { useContext, useState } from 'react';
import { Input } from './Input/Input';
import style from './SectionCheckout.module.scss';
import { CartContext } from '../../context/CartContext';

export function SectionCheckout() {
    const { cartData } = useContext(CartContext);
    const total = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const [formData, setFormData] = useState({ fName: '', lName: '', address: '', city: '', phone: '', provice: '', country: '' });
    const [errors, setErrors] = useState({});

    const changeInput = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // Clear specific field error when user types
        setErrors({ ...errors, [id]: '' });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fName || formData.fName.length < 2) newErrors.fName = "First name must be at least 2 characters.";
        if (!formData.lName || formData.lName.length < 2) newErrors.lName = "Last name must be at least 2 characters.";
        if (!formData.phone || !/^\d+$/.test(formData.phone)) newErrors.phone = "Phone must be a number.";
        if (!formData.address) newErrors.address = "Address is required.";
        if (!formData.city) newErrors.city = "City is required.";
        if (!formData.provice) newErrors.provice = "Province is required.";
        if (!formData.country) newErrors.country = "Country is required.";

        setErrors(newErrors);

        // Return whether the form is valid
        return Object.keys(newErrors).length === 0;
    };

    const payNow = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Payment Successful!", formData);
        } else {
            console.log("Please correct the errors in the form.");
        }
    };

    return (
        <section className={style.checkoutSection}>
            <h2>Checkout</h2>
            <div className={style.checkoutContainer}>
                {/* Left Side */}
                <form className={style.checkoutForm} onSubmit={payNow}>

                    <Input type={'text'} id={'fName'} label={'First name'} value={formData.fName} onChange={changeInput} />
                    {errors.fName && <p className={style.error}>{errors.fName}</p>}

                    <Input type={'text'} id={'lName'} label={'Last name'} value={formData.lName} onChange={changeInput} />
                    {errors.lName && <p className={style.error}>{errors.lName}</p>}

                    <Input type={'text'} id={'address'} label={'Address'} value={formData.address} onChange={changeInput} />
                    {errors.address && <p className={style.error}>{errors.address}</p>}

                    <Input type={'text'} id={'city'} label={'City'} value={formData.city} onChange={changeInput} />
                    {errors.city && <p className={style.error}>{errors.city}</p>}

                    <Input type={'text'} id={'phone'} label={'Phone'} value={formData.phone} onChange={changeInput} />
                    {errors.phone && <p className={style.error}>{errors.phone}</p>}

                    <Input type={'text'} id={'provice'} label={'Province'} value={formData.provice} onChange={changeInput} />
                    {errors.provice && <p className={style.error}>{errors.provice}</p>}

                    <Input type={'text'} id={'country'} label={'Country'} value={formData.country} onChange={changeInput} />
                    {errors.country && <p className={style.error}>{errors.country}</p>}

                </form>
                {/* Right side */}
                <div className={style.rightContainer}>
                    <div className={style.cartDataContainer}>
                        {cartData.map((item) => (
                            <>
                                <div key={item.id} className={style.checkoutProducts}>
                                    <h4>{item.name}</h4>
                                    <p>x {item.quantity}</p>
                                    <p>{(item.price * item.quantity)} DKK</p>

                                </div>
                                <span className={style.divider}></span>
                            </>
                        ))}
                    </div>
                    <p>Total: {total} DKK</p>
                    <div className={style.checkoutShipping}>
                        <h4>Choose Shipping</h4>
                        <div>
                            <label htmlFor='fakeEx'>FakeEx
                                <input type="radio" name='shipping' value='FakeEx' />
                            </label>
                            <label htmlFor='fakeExExpress'>FakeEx Express
                                <input type="radio" name='shipping' value='FakeEx Express' />
                            </label>
                        </div>
                    </div>
                    <div className={style.payButton}>
                        <button type='button' onClick={payNow}>Pay Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
