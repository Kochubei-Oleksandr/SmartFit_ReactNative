import React from 'react'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import { Register, Diary, Trainers, Lang, LoginConnect} from '../index'
// import Login from '../components/auth/Login'
import CustomHeader from '../hoc/CustomHeader'


const AppStack = createStackNavigator(
    { Diary: Diary},
    { Trainers: Trainers},
)
const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginConnect,
            navigationOptions: {
                // header: props => <CustomHeader {...props} />,
                headerTitle: Lang.login,
            }
        },
        Register: { screen: Register },
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
)

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: LoginConnect,
        App: AppStack,
        Auth: AuthStack,
    }
))

