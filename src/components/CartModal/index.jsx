import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import style from "./CartModal.module.css"
import useModal from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";
import { ModalCard } from "./components/Card";



export default function CartModal() {
    const { isOpen, toogleModal } = useModal()
    const {
        cart,
        clearCart,
        sendOrder,
        orderTotal
     } = useCart()

    if (isOpen)
        return (
            <div className={style.modalBg}>
                <div className={style.modal}>
                    <FontAwesomeIcon icon={faXmarkCircle} onClick={toogleModal} className={style.icon}></FontAwesomeIcon>
                    <h2>Mi carrito</h2>
                    <section className={style.modalBody}>
                        <div className={style.modalDrinksListContainer}>
                            {cart.cartItems.length === 0 && (
                                <h3>No hay productos en el carrito</h3>
                            )}
                            {cart.cartItems.map((drink) => (
                                    <ModalCard key={drink.idDrink} drink={drink}></ModalCard>
                                ))}

                        </div>
                        <aside>
                            <p>Total:{orderTotal}</p>
                            <div className={StyleSheet.btnContainer}>
                                <button className={style.clearCart} onClick={clearCart}>Vaciar compra</button>
                                <button className={style.confirmOrder} onClick={sendOrder}>Confirmar compra</button>
                            </div>

                        </aside>
                    </section>
                </div>
            </div>
        )
}