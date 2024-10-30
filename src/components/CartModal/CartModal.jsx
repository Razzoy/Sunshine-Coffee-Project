import style from './CartModal.module.scss';
import close from '../../assets/close.png';

export function CartModal({isOpen, onClose}) {
  return (
    <div className={`${style.overlay} ${isOpen ? style.show : ''}`}>
        <div className={style.modalContainer}>
            <span className={style.closeCross}>
                <img onClick={onClose} src={close} alt="close" />
            </span>
            <h2>Shopping Cart</h2>
        </div>
    </div>
  )
}