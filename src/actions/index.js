import { STATE_KEY, LANG_NOW } from '../index';
import axios from 'axios';
import { AsyncStorage } from "react-native";

export const actionApp = (params, method, url, type) => async dispatch => {

    params.lang = LANG_NOW;
    params.mob_token = await AsyncStorage.getItem('mob_token');
    let success = null;

    await axios({ method: method, url: url, params})
        .then(response => {
            success = true;
            dispatch({ type: type, payload: response.data });
            dispatch({ type: STATE_KEY.formErrors, payload: {} });
        })
        .catch(error => {
            success = false;
            if (error.response.status === 422) {
                dispatch({ type: STATE_KEY.formErrors, payload: error.response.data.errors });
            } else {
                alert(error.response.data.message);
                // dispatch({ type: STATE_KEY.errors, payload: error.response.data.message });
            }
        });
    return success;
};

export const changeStore = (type, payload) => async dispatch => {
    dispatch({ type: type, payload: payload});
};

