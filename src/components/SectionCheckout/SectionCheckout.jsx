import { useContext } from 'react'
import { Input } from './Input/Input'
import style from './SectionCheckout.module.scss'
import { CartContext } from '../../context/CartContext'

export function SectionCheckout() {
    const { cartData } = useContext(CartContext);

    return (
        <section className={style.checkoutSection}>
            <h2>Checkout</h2>
            <div className={style.checkoutContainer}>
                {/* Left Side */}
                <form className={style.checkoutForm}>
                    <Input type={'text'} id={'fName'} label={'First name'} />
                    <Input type={'text'} id={'lName'} label={'Last name'} />
                    <Input type={'text'} id={'adress'} label={'Adress'} />
                    <Input type={'text'} id={'city'} label={'City'} />
                    <Input type={'text'} id={'phone'} label={'Phone'} />
                    <Input type={'text'} id={'provice'} label={'Provice'} />
                    <Input type={'text'} id={'country'} label={'Country'} />
                </form>
                {/* Right side */}
                <div>
                    {cartData.map((item) => (
                        <div key={item.id} className={style.checkoutProducts}>
                            <h4>{item.name}</h4>
                            <p>x {item.quantity}</p>
                            <p>{item.price * item.quantity} DKK</p>
                        </div>
                    ))}
                    <div className={style.checkoutShipping}>
                        <h4>Choose Shipping</h4>
                        <label htmlFor='fakeEx'>FakeEx
                            <input type="radio" name='shipping' value='FakeEx' />
                        </label>
                        <label htmlFor='fakeEx'>FakeEx Express
                            <input type="radio" name='shipping' value='FakeEx Express' />
                        </label>
                    </div>
                    <div className={style.payButton}>
                        <button>Pay Now</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
