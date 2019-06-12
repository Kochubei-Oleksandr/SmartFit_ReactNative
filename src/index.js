//Add constant for action => reducer
export const LOGIN = 'LOGIN';
export const ERRORS = 'ERRORS';

//Add support file & constant
export const CLIENT_API = 'https://smartfit.site/api';
export * from './localization/Localization';
export * from './actions';
export * from './state';

//Add components
export * from './components/auth/Login';
export * from './components/auth/Register';
export * from './components/diary/Diary';
export * from './components/trainers/Trainers';

//Add components UI
export * from './ui/textInput/TextInput';
export * from './ui/buttons/Buttons';