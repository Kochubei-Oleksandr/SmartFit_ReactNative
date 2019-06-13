const INITIAL_STATE = {
    //все персональные данные
    personalData: [],
    //Все ошибки форм с бэка
    formErrors: {},
    //Все логические ошибки с бэка
    errors: '',
};

const STATE_KEY = {};
for (let key in INITIAL_STATE) {
    STATE_KEY[key] = key
}

export { INITIAL_STATE, STATE_KEY }

