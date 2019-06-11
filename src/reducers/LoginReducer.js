import { LOGIN } from '../index'

const INITIAL_STATE = {
    //все персональные данные
    personalData: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                personalData: action.payload
            }
        default:
            return state
    }
}