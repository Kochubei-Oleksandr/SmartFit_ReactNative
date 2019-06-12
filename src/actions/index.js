import { ERRORS } from '../index';
import axios from 'axios';
import { AsyncStorage } from "react-native";

export const actionApp = (params, method, url, type) => dispatch => {
    function onSuccess(data) {
        dispatch({ type: type, payload: data });
        return data
    }
    function onError(error) {
        dispatch({ type: ERRORS, payload: error });
        return error
    }

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
            return onSuccess(response.data)
        })
        .catch(error => {
            return onError(error)
        })
};

