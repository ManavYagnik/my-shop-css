import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productReducer";
import { contactData } from "./contactReducer";

export default combineReducers({
    cartData,
    productData,
    // contactData
})

