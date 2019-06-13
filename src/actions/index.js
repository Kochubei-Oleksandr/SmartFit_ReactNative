import { STATE_KEY } from '../index';
import axios from 'axios';
import { AsyncStorage } from "react-native";

export const actionApp = (params, method, url, type) => async dispatch => {
    AsyncStorage.getItem("mob_token").then((value) => {
        if (method === 'get') {
            params.params.mob_token = value;
            params.params.lang = 'русский';
        }
        if (method === 'post') {
            params.mob_token = value;
            params.lang = 'русский';
        }
    }).done();

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

    return await success;
};

