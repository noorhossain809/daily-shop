import { ActionTypes } from './../actionTypes';


export const addToCart = (payload : IProduct) => {
    return {
        type : ActionTypes.ADD_TO_CART,
        payload
    }
}

export const removeFromCart = (payload : IProduct) => {
    return {
        type : ActionTypes.REMOVE_FROM_CART,
        payload
    }
}

export const clearCart = () => {
    return {
        type : ActionTypes.CLEAR_CART
    }
}