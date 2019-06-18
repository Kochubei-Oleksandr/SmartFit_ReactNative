import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { RegisterConnect, Diary, Trainers, Lang, LoginConnect, ResetPasswordConnect} from '../index';
// import CustomHeader from '../hoc/CustomHeader'

const AppStack = createStackNavigator(
    { Diary: Diary},
    { Trainers: Trainers},
);
const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginConnect,
            navigationOptions: {
                // header: props => <CustomHeader {...props} />,
                headerTitle: Lang.login,
            }
        },
        Register: {
            screen: RegisterConnect,
            navigationOptions: {
                headerTitle: Lang.register,
            }
        },
        ResetPassword: {
            screen: ResetPasswordConnect,
            navigationOptions: {
                headerTitle: Lang.resetPassword,
            }
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#0277BD',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: LoginConnect,
        App: AppStack,
        Auth: AuthStack,
    }
))

