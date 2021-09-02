import { SIGN_IN, SAVE_USER } from '../actions/action'

interface props {
    authConfirmation: Function,
    user: {
        name: string,
        email: string,
        age: number,
        mobile: string
    }
}
const initialState: props = {
    authConfirmation: () => { },
    user: {
        name: '',
        email: '',
        age: 0,
        mobile: ''
    }
}

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                authConfirmation: action.confirm
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isSignin: false
            }
        case SAVE_USER:
            return {
                ...state,
                user: { ...action.payload }
            }
        default:
            return state
    }
}