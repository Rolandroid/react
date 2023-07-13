import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark, faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import style from "./CartModal.module.css"
import useModal from "../../hooks/useModal"

export default function CartModal() {
    const {isOpen, toogleModal} = useModal
    return (
        <div className={style.modalBg}>
            <div className={style.modal}>
                <FontAwesomeIcon icon={faXmarkCircle} className={style.icon}></FontAwesomeIcon>
                <h2>Mi carrito</h2>
                <section className={style.modalBody}>
                    <div className={style.modalDrinksListContainer}>
                        <article className={style.card}>
                            <img src="https://www.thecocktaildb.com/images/media/drink/tqxyxx1472719737.jpg" alt="" />
                            <span>Nombre</span>
                            <span>Precio</span>
                            <div className={style.counter}>
                                <button>+</button>
                                    <span>2</span>
                                <button>-</button>
                            </div>
                            <FontAwesomeIcon icon={faTrashCan} className={style.iconTrash}></FontAwesomeIcon>
                        </article>
                    </div>
                    <aside>
                        <p>Subtotal:xxxx</p>
                        <p>Total:xxxx</p>
                        <div className={StyleSheet.btnContainer}>
                            <button className={style.clearCart}>Vaciar compra</button>
                            <button className={style.confirmOrder}>Confirmar compra</button>
                        </div>

                    </aside>
                </section>
            </div>
        </div>
    )
}