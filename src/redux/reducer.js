import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from './constant'
// import { ADD_CONTACT } from './constant';


// export const contactData =(data=[], action) =>{
//     switch(action.type){
//         case ADD_CONTACT:
//             console.log("Add contact here", action)
//         return[action.data, ...data];
//     }
// }






export const cartData =(data=[], action) =>{
   
//    if(action.type===ADD_TO_CART){
//     console.warn("reducer called",action)
//     return action.data
//    }
//    else{
//     return "no action matched"

//    }

switch(action.type)
{
    case ADD_TO_CART:
        console.warn("ADD_TO_CART CONDITION",action)
    return [action.data, ...data];

    case REMOVE_FROM_CART:
        //console.warn("REMOVE_FROM_CART CONDITION",action);
        //  data.length=data.length? data.length-1:[]
        
        const remainingItem=data.filter((item)=>item.id!==action.data);
       
         console.warn("remainingItem",remainingItem);
        return [...remainingItem]
      
        

    case EMPTY_CART:
        console.warn("EMPTY_CART condition ", action);
        data =[]
        return [...data];

    default:
        return data;
}

   
}