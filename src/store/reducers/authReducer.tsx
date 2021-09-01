import { SIGN_IN } from '../actions/action'
interface props {
    isSignin: boolean,
    authConfirmation: Function
}
const initialState: props = {
    isSignin: false,
    authConfirmation: () => { }
}

export function authReducer(state = initialState, action: any) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isSignin: true,
                authConfirmation: action.confirm
            }
        case 'SIGN_OUT':
            return {
                ...state,
                isSignin: false
            }
        default:
            return state
    }
}