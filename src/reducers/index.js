import { INITIAL_STATE } from '../index';

export default (state = INITIAL_STATE, action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
}