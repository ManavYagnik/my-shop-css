import { PRODUCT_LIST, SEARCH_PRODUCT } from "./constant"

export const productList = () =>
{     
       return {
        type: PRODUCT_LIST,

    }
}

// export const setProductList = (data) =>{
//     console.log("set action");
//     return {
//         type: SET_PRODUCT_LIST,
//         data
//     }
// }


export const productSearch = (query) => {
    return {
        type: SEARCH_PRODUCT,
        query,
    }
}