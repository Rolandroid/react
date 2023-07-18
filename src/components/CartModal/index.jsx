import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import style from "./CartModal.module.css"
import useModal from "../../hooks/useModal";
import { useCart } from "../../hooks/useCart";



export default function CartModal() {
    const { isOpen, toogleModal } = useModal()
    const {
        cart,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart,
        sendOrder
     } = useCart()

    if (isOpen)
        return (
            <div className={style.modalBg}>
                <div className={style.modal}>
                    <FontAwesomeIcon icon={faXmarkCircle} onClick={toogleModal} className={style.icon}></FontAwesomeIcon>
                    <h2>Mi carrito</h2>
                    <section className={style.modalBody}>
                        <div className={style.modalDrinksListContainer}>
                            {
                                cart.cartItems.map((drink) => (
                                    <article key= {drink.idDrink} className={style.card}>
                                        <img 
                                        src={drink.strDrinkThumb}
                                         alt="" 
                                         />
                                        <span>{drink.strDrink}</span>
                                        <span>{drink.price}</span>
                                        <div className={style.counter}>
                                            <button onClick={() => removeOneFromCart(drink.idDrink)}>-</button>
                                            <span>{drink.quantity}</span>
                                            <button onClick={()=>addToCart(drink)}>+</button>
                                        </div>
                                        <FontAwesomeIcon
                                         icon={faTrashCan}
                                         className={style.iconTrash}
                                         onClick={()=> removeAllFromCart(drink.idDrink)}/>
                                    </article>
                                ))
                          }

                        </div>
                        <aside>
                            <p>Subtotal:xxxx</p>
                            <p>Total:xxxx</p>
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