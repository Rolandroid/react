import { createContext, useReducer } from 'react';
import PropTypes from "prop-types"

const CartContext = createContext()

const cartInitialState = {
    cartItems:[],
}

const actionTypes = {
    ADD_TO_CART:"ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    REMOVE_ONE_FROM_CART:"REMOVE_ONE_FROM_CART",
    CLEAR_CART:"CLEAR_CART"
}

function cartReducer (state, { type, payload }) {
    const {idDrink, quantity} = payload

    let drinkIsInCart = state.cartItems.find((item) => item.idDrink === idDrink)
    switch (type) {
        case actionTypes.ADD_TO_CART:
            if(drinkIsInCart){
                
                state.cartitems.forEach(item=>{
                    if(item.idDrink === idDrink){
                        item.quantity = item.quantity + 1;
                    }
                })

                return state 
            }else{
                payload.quantity = 1
                
                return{
                    ...state,
                    cartItems:[...state.cartItems, payload]
                }

            }
            /* checkear si el producto esta en el carrito
            
            si) agregar cantidad mas 1
            no) agregar el producto con cantidad 1 */
        drink.quantity = 1
            return{
                ...state, 
                cartItems: [...state.cartItems, drink]
            };  
    }
 }

function CartProvider ({children}){
    const [state, dispatch] = useReducer(cartReducer, cartInitialState )

    function addToCart (drink){
        dispatch({type:actionTypes.ADD_TO_CART, payload: drink})
    }
    function removeFromCart (){
    }
    function removeAllFromCart(){
    }
    function clearCart(){
    }

    const cartValues = {
        cart : state,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        clearCart
    }
    return (
        <CartContext.Provider value={cartValues}>
            {children}
        </CartContext.Provider>
    )
}

CartProvider.poropTypes = {
    children: PropTypes.node.isRequired
}
export {CartContext, CartProvider}