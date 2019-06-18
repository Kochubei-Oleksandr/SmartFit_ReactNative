import LocalizedStrings from 'react-native-localization';

const Lang = new LocalizedStrings({
    "en-US":{
        password:"Password",
        password_confirmation: "Confirm password",
        login:"Login",
        submit:"Submit",
        register: "Register",
        name: "Name",
        confirmPolicy: 'I agree to the terms of service',
        resetPassword: 'Password Reset'

    },
    en:{
        password:"Password",
        password_confirmation: "Confirm password",
        login:"Login",
        submit:"Submit",
        register: "Register",
        name: "Name",
        confirmPolicy: 'I agree to the terms of service',
        resetPassword: 'Password Reset'

    },
    de: {
        password:"Passwort",
        password_confirmation: "Passwort bestätigen",
        login:"Anmeldung",
        submit:"Einreichen",
        register: "Anmelden",
        name: "Name",
        confirmPolicy: 'Ich stimme den Nutzungsbedingungen zu',
        resetPassword: 'Passwort zurücksetzen'

    },
    ru: {
        password:"Пароль",
        password_confirmation: "Подтвердите пароль",
        login:"Вход",
        submit:"Подтвердить",
        register:"Регистрация",
        name:"Имя",
        confirmPolicy: 'Я согласен с условиями использования сервиса',
        resetPassword: 'Сброс пароля'
    }
});

export { Lang }