import { Dimensions } from 'react-native';
import usernameImg from './images/username.png';
import passwordImg from './images/password.png';
import emailImg from './images/email.png';

//Add support file & constant
export const W = Dimensions.get('window').width;
export const H = Dimensions.get('window').height;
export const CLIENT_API = 'https://smartfit.site/api';
export * from './localization/Localization';
export * from './actions';
export * from './state';

//Add components
export * from './components/auth/Login';
export * from './components/auth/Register';
export * from './components/auth/ResetPassword';
export * from './components/diary/Diary';
export * from './components/trainers/Trainers';

//Add components UI
export * from './ui/textInput/TextInput';
export * from './ui/buttons/Buttons';
export * from './ui/switches/Switches';
export * from './ui/wallpaper/Wallpaper';
export * from './ui/activityIndicator/ActivityIndicator';

//Add images
export const USER_IMG = usernameImg;
export const PW_IMG = passwordImg;
export const EMAIL_IMG = emailImg;