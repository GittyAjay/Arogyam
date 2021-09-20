export const ADD_TO_CART = 'ADD_TO_CART'
export const SIGN_IN = 'SIGN_IN'
export const SAVE_USER = 'SAVE_USER'
export const ADD_CATEGORIES = 'ADD_CATEGORIES'
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const INCREMENT_CART_ITEMS = 'INCREMENT_CART_ITEMS'
export const DECREMENT_CART_ITEMS = 'DECREMENT_CART_ITEMS'
export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS'
export const UPDATE_PROGRESS_STATUS = 'UPDATE_PROGRESS_STATUS'
export const SET_SELECTED_PRODUCT_TYPE = 'SET_SELECTED_PRODUCT_TYPE'
export const ADD_PRODUCTS = 'ADD_PRODUCTS'
export type DISPATCHER_TYPE = {
    name: String,
    payload: object
}
interface userType {
    name: string,
    email: string,
    age: number,
    mobile: string
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
export const sign_in = (confirm: Function) => {
    return {
        type: SIGN_IN, confirm
    }
}
export const save_user = (payload: userType) => {
    return {
        type: SAVE_USER, payload
    }
}
export const add_categories = (payload: any) => {
    return {
        type: ADD_CATEGORIES,
        payload
    }
}
export const set_products_type = (payload: { name: string }) => {
    return {
        type: GET_PRODUCTS,
        name: payload.name
    }
}
export const get_products = (payload: any) => {
    console.log('get_products', payload);
    return {
        type: ADD_PRODUCTS,
        name: payload
    }
}
