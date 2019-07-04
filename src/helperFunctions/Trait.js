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