const INITIAL_STATE = {
    //Поступают с бэкенда
    //все персональные данные
    personalData: [],
    //Все ошибки форм с бэка
    formErrors: {},
    //Все логические ошибки с бэка
    errors: '',
    //Все успешные операции с бэка
    logicSuccess: '',
    //Все съеденные продукты пользователя в дневнике
    userEatenFood: [],
    //список базовой информации по рецепту
    basicRecipeInfo: [],
    //Все выполненные активности пользователя в дневнике
    userCompletedActivity: [],
};

const STATE_KEY = {};
for (let key in INITIAL_STATE) {
    STATE_KEY[key] = key
}

export { INITIAL_STATE, STATE_KEY }

