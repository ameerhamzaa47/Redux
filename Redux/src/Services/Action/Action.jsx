import {ADD_TO_CART,REMOVE_TO_CART} from '../Reducers/constants'
export default function AddToCart(data){
    console.log('Action',data)
    return{
        type:ADD_TO_CART,
        data:data
    }
}

export const RemoveToCart=()=>{
    console.log('Action Action Actionnnn')
    return{
        type:REMOVE_TO_CART,
    }
}