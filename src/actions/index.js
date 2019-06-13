import { STATE_KEY } from '../index';
import axios from 'axios';
import { AsyncStorage } from "react-native";

export const actionApp = (params, method, url, type) => dispatch => {
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

    axios({ method: method, url: url, params})
        .then(response => {
            dispatch({ type: type, payload: response.data });
        })
        .catch(error => {
            if (error.response.status === 422) {
                dispatch({ type: STATE_KEY.errors, payload: error.response.data.errors });
            } else {
                alert(error.response.data.message);
                // dispatch({ type: STATE_KEY.errors, payload: error.response.data.message });
            }
        })
};

