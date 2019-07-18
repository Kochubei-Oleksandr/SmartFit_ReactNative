import { Lang } from '../index';

/**
 * Преображает дату в формат (2019-03-28)
 * @param date
 * @returns {string}
 * @constructor
 */
export const NORMAL_DATE = (date) => {
    return (date.getFullYear() + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" + ("0" + date.getDate()).slice(-2));
};

/**
 * Преображает время в формат (00:00:00)
 * @param time
 * @returns {string}
 * @constructor
 */
export const NORMAL_TIME = (time) => {
    let timeWithTimezone = new Date(time);
    return (timeWithTimezone.toTimeString().substr(0, 8));
};

/**
 * Перевести (time) из "01:15:00" в строку типа '1, 15, 0' для подстановки времени в new Date
 * @param time
 * @returns {string}
 * @constructor
 */
export const SET_TIME = (time) => {
    if (time) {
        let resultTime = time.replace( /:/g, "," );
        let withoutDoubleZero = resultTime.replace( /00/g, "0" );
        let withoutFirstZero = withoutDoubleZero.replace(/^0+/, '');
        let arrTime = withoutFirstZero.split(/,/);
        let timestamp = new Date().setHours(arrTime[0], arrTime[1], arrTime[2]);

        return new Date(timestamp);
    } else {
        return null;
    }
};

/**
 * изменяем форму названия языка
 * @type {null}
 */
//TODO:Переделать бэкенд и фронт веба на перечачу en,ru,de...
let lang = null;
if (Lang._language === 'ru') {
    lang = 'русский';
} else if (Lang._language === 'de') {
    lang = 'deutsch';
} else {
    lang = 'english';
}
export const LANG_NOW = lang;

/**
 * Добавляю или удаляю последний элемент массива, чтобы количество подходов равнялось
 * количеству форм для внесения количества повторений и веса отягощения
 * @param repetitions
 * @param val
 * @returns {*}
 * @constructor
 */
export const CHANGE_REPETITIONS = (id, repetitions, val) => {
    if (repetitions !== 0) {
        if (repetitions.length > val && val >= 1) {
            while (repetitions.length > val) {
                repetitions.pop();
            }
        }
        if (repetitions.length < val) {
            while (repetitions.length < val) {
                let iter = Object.assign({}, repetitions[repetitions.length - 1]);

                iter.id = null;
                iter.approach_number = repetitions.length + 1;
                iter.id_one_approach = id;
                iter.number_of_repetitions = 0;
                iter.weight = 0;

                repetitions.push(iter);
            }
        }
    }
    return repetitions
};