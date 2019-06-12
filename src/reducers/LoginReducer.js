import { ERRORS, LOGIN, INITIAL_STATE } from '../index';

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                personalData: action.payload
            };
        case ERRORS:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state
    }
}