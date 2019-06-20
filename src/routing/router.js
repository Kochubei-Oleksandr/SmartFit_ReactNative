import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { RegisterConnect, Diary, Trainers, FoodPlans, ActivityPlans,
    Profile, Progress, Lang, LoginConnect, ResetPasswordConnect} from '../index';

const AuthStack = createStackNavigator(
    {
        Login: {
            screen: LoginConnect,
            navigationOptions: {
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

const DashboardTabNavigator = createBottomTabNavigator({
    Diary,
    Trainers,
    FoodPlans,
    ActivityPlans,
    Progress,
    Profile
});

const AppStack = createStackNavigator(
    {
        DashboardTabNavigator: { screen: DashboardTabNavigator },
        Diary: { screen: Diary },
        Trainers: { screen: Trainers },
        Plans: { screen: FoodPlans },
    },
    {
        defaultNavigationOptions: {
            header: null,
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

