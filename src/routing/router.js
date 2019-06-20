import React from 'react';
import { createSwitchNavigator, createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { RegisterConnect, Diary, Trainers, FoodPlans, ActivityPlans, ImageUI, D_BLUE,
    Profile, Progress, Lang, LoginConnect, ResetPasswordConnect} from '../index';
import { TRAINERS_IMG, TRAINERS_BLUE_IMG, DIARY_IMG, DIARY_BLUE_IMG, FOOD_IMG, FOOD_BLUE_IMG,
    ACTIVITY_IMG, ACTIVITY_BLUE_IMG, PERSONAL_IMG, PERSONAL_BLUE_IMG, PROGRESS_IMG, PROGRESS_BLUE_IMG } from '../index';


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
                backgroundColor: D_BLUE,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

const DashboardTabNavigator = createBottomTabNavigator(
    {
        Diary: {
            screen: Diary,
            navigationOptions: {
                tabBarLabel: Lang.diary,
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <ImageUI source={DIARY_BLUE_IMG} /> : <ImageUI source={DIARY_IMG} />
                }
            }
        },
        Trainers: {
            screen: Trainers,
            navigationOptions: {
                tabBarLabel: Lang.trainers,
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <ImageUI source={TRAINERS_BLUE_IMG} /> : <ImageUI source={TRAINERS_IMG} />
                }
            }
        },
        FoodPlans: {
            screen: FoodPlans,
            navigationOptions: {
                tabBarLabel: Lang.food,
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <ImageUI source={FOOD_BLUE_IMG} /> : <ImageUI source={FOOD_IMG} />
                }
            }
        },
        ActivityPlans: {
            screen: ActivityPlans,
            navigationOptions: {
                tabBarLabel: Lang.activity,
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <ImageUI source={ACTIVITY_BLUE_IMG} /> : <ImageUI source={ACTIVITY_IMG} />
                }
            }
        },
        Progress: {
            screen: Progress,
            navigationOptions: {
                tabBarLabel: Lang.progress,
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <ImageUI source={PROGRESS_BLUE_IMG} /> : <ImageUI source={PROGRESS_IMG} />
                }
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: Lang.personal,
                tabBarIcon: ({ focused, horizontal, tintColor }) => {
                    return focused ? <ImageUI source={PERSONAL_BLUE_IMG} /> : <ImageUI source={PERSONAL_IMG} />
                }
            }
        },
    },
    {
        tabBarOptions: {
            activeTintColor: D_BLUE,
            inactiveTintColor: 'gray',
        },
    }
);

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
    },
    {
        defaultNavigationOptions: {
            header: null,
        },
    }
))

