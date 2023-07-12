import { createContext, useReducer } from 'react';
import PropTypes from "prop-types"

const CartContext = createContext()

const cartInitialState = {
    cartItems: [],
}

const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
    REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
    CLEAR_CART: "CLEAR_CART"
}

function cartReducer(state, { type, payload }) {
    const { idDrink } = payload

    let drinkInCart = state.cartItems.find((item) => item.idDrink === idDrink)
    switch (type) {
        case actionTypes.ADD_TO_CART:

            if (drinkInCart) {

                let cartItemsUpdated = state.cartItems.map(item => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item
                })

                return {
                    ...state,
                    cartItems: cartItemsUpdated
                }
            } else {

                payload.quantity = 1
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            }
        case actionTypes.REMOVE_ONE_FROM_CART:

            if (drinkInCart.quantity > 1) {
                let cartItemsUpdated = state.cartItems.map(item => {
                    if (item.idDrink === idDrink) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                });

                return {
                    ...state,
                    cartItems: cartItemsUpdated
                }
            } else {
                let cartItemsUpdated = state.cartItems.filter(item => !item.idDrink === idDrink); 

                return {
                    ...state,
                    cartItems: cartItemsUpdated
                }
            }
        case actionTypes.REMOVE_ALL_FROM_CART:
            if (drinkInCart) {
                let cartItemsUpdated = state.cartItems.filter(
                    (item) => !item.idDrink === idDrink
                    );
                return {
                    ...state,
                    cartItems: cartItemsUpdated
                }
            }
            return state;
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
    }
}

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    function addToCart(drink) {
        dispatch({ type: actionTypes.ADD_TO_CART, payload: drink })
    }
    function removeOneFromCart(idDrink) {
        dispatch({ type: actionTypes.REMOVE_ONE_FROM_CART, payload: { idDrink } })
    }
    function removeAllFromCart() {
        dispatch({ type: actionTypes.REMOVE_ALL_FROM_CART, payload: { idDrink } })

    }
    function clearCart() {
        dispatch({type:actionTypes.CLEAR_CART })
    }

    const cartValues = {
        cart: state,
        addToCart,
        removeOneFromCart,
        removeAllFromCart,
        clearCart
    }
    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
}
export { CartContext, CartProvider }