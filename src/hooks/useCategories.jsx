import {useContext} from "react";
import CategoriesContext from "../contexts/CategoriesProvider";

export function useCategories() {
    return useContext(CategoriesContext);
}