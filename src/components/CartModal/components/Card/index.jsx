import PropTypes from "prop-types"
import style from "./CardModal.module.css";
import { useCart } from "../../../../hooks/useCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";


export function ModalCard({ drink }) {
    const { removeAllFromCart, removeOneFromCart, addToCart } = useCart()
    return (
        <article className={style.card}>
            <img
                src={drink.strDrinkThumb}
                alt=""
            />
            <span>{drink.strDrink}</span>
            <span>{drink.price}</span>
            <div className={style.counter}>
                <button onClick={() => removeOneFromCart(drink.idDrink)}>-</button>
                <span>{drink.quantity}</span>
                <button onClick={() => addToCart(drink)}>+</button>
            </div>
            <FontAwesomeIcon
                icon={faTrashCan}
                className={style.iconTrash}
                onClick={() => removeAllFromCart(drink.idDrink)} />
        </article>
    )

}