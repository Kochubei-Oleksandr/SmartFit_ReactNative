import LocalizedStrings from 'react-native-localization'

const Lang = new LocalizedStrings({
    "en-US":{
        password:"Password",
        login:"Login",
        submit:"Submit",
    },
    en:{
        password:"Password",
        login:"Anmeldung",
        submit:"Einreichen",
    },
    de: {
        password:"Passwort",
        login:"Login",
        submit:"Submit",
    },
    ru: {
        password:"Пароль",
        login:"Вход",
        submit:"Подтвердить",
    }
})

export { Lang }