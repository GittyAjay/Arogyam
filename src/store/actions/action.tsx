export const ADD_TO_CART = 'ADD_TO_CART'
export type DISPATCHER_TYPE = {
    name: String,
    payload: object
}
export const addToCart = (payload: object) => {
    return {
        type: ADD_TO_CART, payload
    }
}