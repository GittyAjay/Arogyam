import { ImageSourcePropType } from 'react-native'
import React from 'react';
import { useDispatch } from 'react-redux';
const axios = require('axios').default;
import { ADD_TO_CART, INCREMENT_CART_ITEMS, DECREMENT_CART_ITEMS, REMOVE_CART_ITEMS, UPDATE_PROGRESS_STATUS, SET_SELECTED_PRODUCT_TYPE, ADD_PRODUCTS } from '../actions/action';
export type product_TYPES = { categories_Image: string, categories_disount: String, categories_name: String }
export type prodcut_BRAND = { name: String, url: ImageSourcePropType, id: number }
export type prodElements = { product_name: String, type: product_TYPES, brand: prodcut_BRAND, product_url: string, id: number, product_price: number, count: number, rating: number, star: number, product_mrp: number, discount: number }
export type product = Array<prodElements>
export type doctor_TYPES = { type: String, url: ImageSourcePropType };
export type doctorElements = { name: string, type: doctor_TYPES, desc: String, star: number, url: ImageSourcePropType, id: number };
export type doctor = Array<doctorElements>
export type quickConsultantElements = { name: string, url: ImageSourcePropType, color: String, key: number };
import { add_categories, ADD_CATEGORIES, get_products } from '../actions/action'
export type quickConsultant = Array<quickConsultantElements>

export const shopByCatagories: Array<product_TYPES> = []

export const shopByBrand: Array<prodcut_BRAND> = [
    { name: "Dabar", url: require('../../assets/images/shopbycategory1.png'), id: 9 },
    { name: "Durex", url: require('../../assets/images/shopbycategory2.png'), id: 10 },
    { name: "Himalaya", url: require('../../assets/images/shopbycategory3.png'), id: 11 },
    { name: "Dettol", url: require('../../assets/images/shopbycategory4.png'), id: 12 },
    { name: "Unilever", url: require('../../assets/images/shopbycategory5.png'), id: 13 },
    { name: "Honey", url: require('../../assets/images/shopbycategory6.png'), id: 14 },
]

export const quickConsultants: Array<quickConsultantElements> = [
    { name: "Diabets", url: require('../../assets/images/shopbycategory1.png'), color: 'red', key: 15 },
    { name: "Pregnancy", url: require('../../assets/images/shopbycategory2.png'), color: 'green', key: 16 },
    { name: "Weight loss", url: require('../../assets/images/shopbycategory3.png'), color: 'orange', key: 17 },
]

export const doctor_categories: Array<doctor_TYPES> = [
    { type: "Physician", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Pediatric", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Dentist", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Ent", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Ophthalmic", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Psycology", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Pulmonolog", url: require('../../assets/images/doctorCategories1.png') },
    { type: "KGEH", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Cardiolog", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Gred", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Nephrolog", url: require('../../assets/images/doctorCategories1.png') },
    { type: "Orthopedics", url: require('../../assets/images/doctorCategories1.png') },
]

export const doctors: doctor = [
    { name: "Dr. Avinash", type: { type: "Covid product", url: require('../../assets/images/shopbycategory1.png') }, desc: "Heart specilist", star: 1, url: require('../../assets/images/shopbycategory1.png'), id: 18 },
    { name: "Dr. Sweta", type: { type: "Covid product", url: require('../../assets/images/shopbycategory1.png') }, desc: "Depression specilist", star: 1, url: require('../../assets/images/shopbycategory2.png'), id: 19 },
    { name: "Dr Anupam", type: { type: "Covid product", url: require('../../assets/images/shopbycategory1.png') }, desc: "Nurology specilist", star: 1, url: require('../../assets/images/shopbycategory3.png'), id: 20 },
]
export type apointments_type = {
    name: String,
    type: String,
    desc: String,
    experience: number,
    date: String,
    time: String
}
export const appoitments: Array<apointments_type> = [
    { name: "Ajay", type: "Physician", desc: "mst doctor", date: "10/11/2020", time: "12:20:11", experience: 10 },
    { name: "Sanjay", type: "Physician", desc: "mst doctor", date: "10/11/2020", time: "12:20:11", experience: 10 },
    { name: "Dhananjay", type: "Physician", desc: "mst doctor", date: "10/11/2020", time: "12:20:11", experience: 10 },
    { name: "Suraj", type: "Physician", desc: "mst doctor", date: "10/11/2020", time: "12:20:11", experience: 10 },
    { name: "Dhiraj", type: "Physician", desc: "mst doctor", date: "10/11/2020", time: "12:20:11", experience: 10 },
    { name: "Rahul", type: "Physician", desc: "mst doctor", date: "10/11/2020", time: "12:20:11", experience: 10 },
    { name: "Shyamal", type: "Physician", desc: "mst doctor", date: "10/11/2020", time: "12:20:11", experience: 10 },
]

export type initialStateType = {
    products: product,
    cart: product,
    doctors: doctor,
    quickConsultant: quickConsultant,
    progress_status: boolean,
    categories: [],
    selected_product_type: String
}
type action_type = {
    type: String,
    payload: object
}

const initialState: initialStateType = {
    products: [],
    cart: [],
    doctors: [
        { name: "Dr. Avinash", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Heart specilist", star: 1, url: require('../../assets/images/shopbycategory1.png'), id: 18 },
        { name: "Dr. Sweta", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Depression specilist", star: 1, url: require('../../assets/images/shopbycategory2.png'), id: 19 },
        { name: "Dr Anupam", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Nurology specilist", star: 1, url: require('../../assets/images/shopbycategory3.png'), id: 20 },
    ],
    quickConsultant: [],
    progress_status: false,
    categories: [],
    selected_product_type: "Ayurvedic Care"
}

export default function doctorsReducer(state = initialState, action: any) {

    const __FOUND = state.cart.findIndex(function (values, index) {
        if (values.id == action.payload.id)
            return true;
        return false;
    })
    switch (action.type) {
        case ADD_TO_CART:
            if (__FOUND == -1) {
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
            }
            else
                return {
                    ...state
                }
        case ADD_CATEGORIES:
            return {
                ...state,
                categories: [...state.categories, action.payload]
            }
        case ADD_PRODUCTS:
            console.log("action.payload", action.payload);

            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case SET_SELECTED_PRODUCT_TYPE:
            return {
                ...state,
                selected_product_type: action.name
            }
        case INCREMENT_CART_ITEMS:
            return {
                ...state,
                cart: state.cart.map(item => item.id == action.payload ? { ...item, count: item.count + 1 } : item)
            }
        case DECREMENT_CART_ITEMS:
            return {
                ...state,
                cart: state.cart.map(item => item.id == action.payload ? { ...item, count: item.count > 1 ? item.count - 1 : item.count } : item)
            }
        case REMOVE_CART_ITEMS:
            return {
                ...state,
                cart: state.cart.filter(item => item.id != action.payload)
            }
        case UPDATE_PROGRESS_STATUS:
            return {
                ...state,
                progress_status: action.payload
            }

        default:
            return state
    }
}

export const get_top_categories = async (dispatch: Function, getState) => {
    // const categories = getState().categories;
    await axios.get('https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Top_categories.json?alt=media&token=c91165e8-6d30-44b2-946f-5b2d2f0fd939')
        .then(function (response) {
            // handle success
            const { data } = response;
            // console.log(data);
            // console.log(dispatch);
            data.map((value) => {
                dispatch(add_categories(value));
            })

        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

function returnApi(name: string) {
    switch (name) {
        case "Ayurvedic Care":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Ayurvedic%20Care.json?alt=media&token=88092e7f-8072-4187-bdf1-bfdee9114cdc"
        case "Baby & Mom Care":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Baby%20%26%20Mom%20Care.json?alt=media&token=37b8ea0e-582b-4dff-82a0-456973b3883b"
        case "Devices":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Devices.json?alt=media&token=4d0b9a54-f3d8-4cfc-8b0f-94c0a15e89fc"
        case "Diabetic Care":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Diabetic%20Care.json?alt=media&token=699e15f4-cece-4a57-a434-9d4c8ce8b501"
        case "Health Food and Drinks":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Health%20Food%20and%20Drinks.json?alt=media&token=b91b6ce6-4c85-43b0-b864-641094b71733"
        case "Home Care":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Home%20Care.json?alt=media&token=542239c5-4ca4-46a2-b919-b59ab23c1dd3"
        case "Lifestyle Ailments":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Lifestyle%20Ailments.json?alt=media&token=54a669cb-fbfe-43df-8d94-7385d8e92df7"
        case "Nutrition & Fitness Supplements":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Nutrition%20%26%20Fitness%20Supplements.json?alt=media&token=b407622c-9293-4733-9843-da617e28b824"
        case "Personal Care":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Personal%20Care.json?alt=media&token=49b77746-e011-4af8-b52e-9512c3231ff0"
        case "Sexual Wellness":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Sexual%20Wellness.json?alt=media&token=51d481c3-82ea-4d9c-964a-7a6aa9eaf5a6"
        case "Women Care":
            return "https://firebasestorage.googleapis.com/v0/b/arogyam-77704.appspot.com/o/Women%20Care.json?alt=media&token=7b803b22-02b7-40fa-8833-8b28d703a0dd"
    }
}
export const get_products_list = async (dispatch: Function, getState) => {
    const api = returnApi('Women Care')
    console.log("get_products_list");
    await axios.get(api)
        .then(function (response) {
            // handle success
            const { data } = response;
            console.log("data", value[0]);
            data.map((value) => {
                console.log("map data", value);
                dispatch(get_products(value));
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}