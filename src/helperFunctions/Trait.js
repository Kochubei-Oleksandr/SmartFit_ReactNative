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