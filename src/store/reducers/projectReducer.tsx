import { ImageSourcePropType } from 'react-native'
import { ADD_TO_CART, INCREMENT_CART_ITEMS, DECREMENT_CART_ITEMS, REMOVE_CART_ITEMS, UPDATE_PROGRESS_STATUS } from '../actions/action';
export type product_TYPES = { name: String, url: ImageSourcePropType, id: number }
export type prodcut_BRAND = { name: String, url: ImageSourcePropType, id: number }
export type prodElements = { name: String, type: product_TYPES, brand: prodcut_BRAND, url: ImageSourcePropType, id: number, price: number, count: number, rating: number, star: number, mrp: number, discount: number }
export type product = Array<prodElements>
export type doctor_TYPES = { type: String, url: ImageSourcePropType };
export type doctorElements = { name: string, type: doctor_TYPES, desc: String, star: number, url: ImageSourcePropType, id: number };
export type doctor = Array<doctorElements>
export type quickConsultantElements = { name: string, url: ImageSourcePropType, color: String, key: number };
export type quickConsultant = Array<quickConsultantElements>

export const shopByCatagories: Array<product_TYPES> = [
    { name: "Covid product", url: require('../../assets/images/shopbycategory1.png'), id: 1 },
    { name: "Ayurdev", url: require('../../assets/images/shopbycategory2.png'), id: 2 },
    { name: "Eye wear", url: require('../../assets/images/shopbycategory3.png'), id: 3 },
    { name: "Mom & beby", url: require('../../assets/images/shopbycategory4.png'), id: 4 },
    { name: "Tretment", url: require('../../assets/images/shopbycategory5.png'), id: 4 },
    { name: "Sexual wellness", url: require('../../assets/images/shopbycategory6.png'), id: 5 },
    { name: "Device", url: require('../../assets/images/shopbycategory7.png'), id: 6 },
    { name: "Fitness", url: require('../../assets/images/shopbycategory8.png'), id: 7 },
    { name: "Beauty", url: require('../../assets/images/shopbycategory9.png'), id: 8 },
]

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
    progress_status: boolean
}
type action_type = {
    type: String,
    payload: object
}

const initialState: initialStateType = {
    products: [
        { name: "Women nutrition", type: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Dabar", url: require("../../assets/images/categories1.png"), id: 1 }, price: 100, url: require("../../assets/images/categories1.png"), id: 0, count: 1, discount: 15, mrp: 500, rating: 5, star: 5 },
        { name: "Mother nutrition", type: { name: "Cough", url: require("../../assets/images/categories1.png"), id: 2 }, brand: { name: "Mankind", url: require("../../assets/images/categories1.png"), id: 1 }, price: 100, url: require("../../assets/images/categories1.png"), id: 1, count: 1, discount: 15, mrp: 500, rating: 5, star: 5 },
        { name: "Feminine hygiene", type: { name: "Liver", url: require("../../assets/images/categories1.png"), id: 3 }, brand: { name: "Covaxine", url: require("../../assets/images/categories1.png"), id: 1 }, price: 100, url: require("../../assets/images/categories1.png"), id: 2, count: 1, discount: 15, mrp: 500, rating: 5, star: 5 },
        { name: "Feminine hygiene", type: { name: "Heart", url: require("../../assets/images/categories1.png"), id: 4 }, brand: { name: "Hinduja", url: require("../../assets/images/categories1.png"), id: 1 }, price: 100, url: require("../../assets/images/categories1.png"), id: 3, count: 1, discount: 15, mrp: 500, rating: 5, star: 5 },
    ],
    cart: [],
    doctors: [
        { name: "Dr. Avinash", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Heart specilist", star: 1, url: require('../../assets/images/shopbycategory1.png'), id: 18 },
        { name: "Dr. Sweta", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Depression specilist", star: 1, url: require('../../assets/images/shopbycategory2.png'), id: 19 },
        { name: "Dr Anupam", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Nurology specilist", star: 1, url: require('../../assets/images/shopbycategory3.png'), id: 20 },
    ],
    quickConsultant: [],
    progress_status: false
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
            break;
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