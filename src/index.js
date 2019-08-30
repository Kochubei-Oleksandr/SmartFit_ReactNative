import { Dimensions } from 'react-native';
import usernameImg from './images/username.png';
import passwordImg from './images/password.png';
import emailImg from './images/email.png';
import trainersImg from './images/trainers.png';
import diaryImg from './images/diary.png';
import trainersBlueImg from './images/trainers_blue.png';
import diaryBlueImg from './images/diary_blue.png';
import activityImg from './images/activity.png';
import activityBlueImg from './images/activity_blue.png';
import foodImg from './images/food.png';
import foodBlueImg from './images/food_blue.png';
import personalImg from './images/person.png';
import personalBlueImg from './images/person_blue.png';
import progressImg from './images/progress.png';
import progressBlueImg from './images/progress_blue.png';
import calendarBlueImg from './images/calendar.png';
import emptyAvatarImg from './images/empty_avatar.png';

//Add support file & support constant
export const W = Dimensions.get('window').width;
export const H = Dimensions.get('window').height;
export const CLIENT_API = 'https://client.smartfit.site/api';
export * from './localization/Localization';
export * from './actions';
export * from './state';
export * from './helperFunctions/Trait';

//Colors const
export const L_GREY = '#FAFAFA';
export const L_BLACK = '#545454';
export const D_GREY = '#E0E0E0';
export const L_BLUE = '#81D4FA';
export const D_BLUE = '#0277BD';

//Add Main components
export * from './components/auth/Login';
export * from './components/auth/Register';
export * from './components/auth/ResetPassword';
export * from './components/diary/Diary';
export * from './components/trainers/Trainers';
export * from './components/foodPlans/foodPlans';
export * from './components/activityPlans/activityPlans';
export * from './components/profile/Profile';
export * from './components/progress/Progress';

//Add Helper components
export * from './helperComponents/diaryUserStatistics/DiaryUserStatistics';
export * from './helperComponents/cards/Card';
export * from './helperComponents/header/Header';
export * from './helperComponents/datePicker/DatePicker';
export * from './helperComponents/timePicker/TimePicker';
export * from './helperComponents/tables';
export * from './helperComponents/modals';

//Add UI components
export * from './ui/textInput/TextInput';
export * from './ui/buttons/Buttons';
export * from './ui/switches/Switches';
export * from './ui/wallpaper/Wallpaper';
export * from './ui/activityIndicator/ActivityIndicator';
export * from './ui/image/Image';

//Add images
export const USER_IMG = usernameImg;
export const PW_IMG = passwordImg;
export const EMAIL_IMG = emailImg;
export const TRAINERS_IMG = trainersImg;
export const DIARY_IMG = diaryImg;
export const DIARY_BLUE_IMG = diaryBlueImg;
export const TRAINERS_BLUE_IMG = trainersBlueImg;
export const ACTIVITY_IMG = activityImg;
export const ACTIVITY_BLUE_IMG = activityBlueImg;
export const FOOD_IMG = foodImg;
export const FOOD_BLUE_IMG = foodBlueImg;
export const PERSONAL_IMG = personalImg;
export const PERSONAL_BLUE_IMG = personalBlueImg;
export const PROGRESS_IMG = progressImg;
export const PROGRESS_BLUE_IMG = progressBlueImg;
export const CALENDAR_BLUE_IMG = calendarBlueImg;
export const EMPTY_AVATAR_IMG = emptyAvatarImg;