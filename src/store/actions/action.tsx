export const ADD_TO_CART = 'ADD_TO_CART'
export const INCREMENT_CART_ITEMS = 'INCREMENT_CART_ITEMS'
export const DECREMENT_CART_ITEMS = 'DECREMENT_CART_ITEMS'
export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS'
export const UPDATE_PROGRESS_STATUS = 'UPDATE_PROGRESS_STATUS'
export type DISPATCHER_TYPE = {
    name: String,
    payload: object
}
const update_progress_status = (status: boolean) => {
    return {
        type: UPDATE_PROGRESS_STATUS, payload: status
    }
}
export const addToCart = (payload: object) => {
    update_progress_status(true);
    return {
        type: ADD_TO_CART, payload
    }
}
export const increment_cart_item = (id: number) => {
    return {
        type: INCREMENT_CART_ITEMS, payload: id
    }
}
export const decrement_cart_item = (id: number) => {
    return {
        type: DECREMENT_CART_ITEMS, payload: id
    }
}
export const remove_cart_item = (id: number) => {
    return {
        type: REMOVE_CART_ITEMS, payload: id
    }
}
