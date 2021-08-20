import { ImageSourcePropType } from 'react-native'
import { ADD_TO_CART } from '../actions/action';
export type product_TYPES = { type: String, url: ImageSourcePropType, id: number }
export type prodcut_BRAND = { name: String, url: ImageSourcePropType, id: number }
export type prodElements = { name: String, type: product_TYPES, brand: prodcut_BRAND, url: ImageSourcePropType, id: number }
export type product = Array<prodElements>
export type doctor_TYPES = { type: String, url: ImageSourcePropType };
export type doctorElements = { name: string, type: doctor_TYPES, desc: String, star: number, url: ImageSourcePropType, id: number };
export type doctor = Array<doctorElements>
export type quickConsultantElements = { name: string, url: ImageSourcePropType, color: String, key: number };
export type quickConsultant = Array<quickConsultantElements>

export const shopByCatagories: Array<product_TYPES> = [
    { type: "Covid product", url: require('../../assets/images/shopbycategory1.png'), id: 1 },
    { type: "Ayurdev", url: require('../../assets/images/shopbycategory2.png'), id: 2 },
    { type: "Eye wear", url: require('../../assets/images/shopbycategory3.png'), id: 3 },
    { type: "Mom & beby", url: require('../../assets/images/shopbycategory4.png'), id: 4 },
    { type: "Tretment", url: require('../../assets/images/shopbycategory5.png'), id: 4 },
    { type: "Sexual wellness", url: require('../../assets/images/shopbycategory6.png'), id: 5 },
    { type: "Device", url: require('../../assets/images/shopbycategory7.png'), id: 6 },
    { type: "Fitness", url: require('../../assets/images/shopbycategory8.png'), id: 7 },
    { type: "Beauty", url: require('../../assets/images/shopbycategory9.png'), id: 8 },
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

export const doctors: doctor = [
    { name: "Dr. Avinash", type: { type: "Covid product", url: require('../../assets/images/shopbycategory1.png') }, desc: "Heart specilist", star: 1, url: require('../../assets/images/shopbycategory1.png'), id: 18 },
    { name: "Dr. Sweta", type: { type: "Covid product", url: require('../../assets/images/shopbycategory1.png') }, desc: "Depression specilist", star: 1, url: require('../../assets/images/shopbycategory2.png'), id: 19 },
    { name: "Dr Anupam", type: { type: "Covid product", url: require('../../assets/images/shopbycategory1.png') }, desc: "Nurology specilist", star: 1, url: require('../../assets/images/shopbycategory3.png'), id: 20 },
]

export type initialStateType = {
    products: product,
    cart: product,
    doctors: doctor,
    quickConsultant: quickConsultant,
}
type action_type = {
    type: String,
    payload: object
}
const initialState: initialStateType = {
    products: [
        { name: "Women nutrition", type: { type: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, url: require("../../assets/images/categories1.png"), id: 0 },
        { name: "Mother nutrition", type: { type: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, url: require("../../assets/images/categories1.png"), id: 1 },
        { name: "Feminine hygiene", type: { type: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, url: require("../../assets/images/categories1.png"), id: 2 },
        { name: "Feminine hygiene", type: { type: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, brand: { name: "Covid", url: require("../../assets/images/categories1.png"), id: 1 }, url: require("../../assets/images/categories1.png"), id: 3 },
    ],
    cart: [],
    doctors: [
        { name: "Dr. Avinash", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Heart specilist", star: 1, url: require('../../assets/images/shopbycategory1.png'), id: 18 },
        { name: "Dr. Sweta", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Depression specilist", star: 1, url: require('../../assets/images/shopbycategory2.png'), id: 19 },
        { name: "Dr Anupam", type: { type: "dentist", url: require('../../assets/images/shopbycategory2.png') }, desc: "Nurology specilist", star: 1, url: require('../../assets/images/shopbycategory3.png'), id: 20 },
    ],
    quickConsultant: []
}

export default function doctorsReducer(state = initialState, action: action_type) {

    const __FOUND = state.cart.findIndex(function (values, index) {
        if (values.id == action.payload.id)
            return true;
        return false;
    })
    switch (action.type) {
        case ADD_TO_CART:
            if (__FOUND == -1)
                return {
                    ...state,
                    cart: [...state.cart, action.payload]
                }
        default:
            return state
    }
}