import {useContext} from "react";
import {DrinksContext} from "../contexts/DrinksProvider";

export function useDrinks() {
    return useContext(DrinksContext);
}

export default useDrinks