import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {W, ActivityIndicatorUI} from '../../index';

const ButtonsUI = ({btnName, onclick, isLoggedIn}) => {
    const styles = StyleSheet.create({
        submitButton: {
            backgroundColor: 'rgba(0, 0, 255, 0.5);',
            padding: 10,
            margin: 10,
            borderRadius: 20,
            width: W - 40,
            height: 40
        },
        submitButtonText:{
            textAlign: "center",
            textTransform:"uppercase",
            color: 'white'
        }
    });

    return (
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {onclick}
        >
            {isLoggedIn ? <ActivityIndicatorUI /> : <Text style = {styles.submitButtonText}> {btnName} </Text>}
        </TouchableOpacity>
    )
};

const HeaderButtonUI = ({btnName, onclick, isLoggedIn, borderBottom, borderLeft, borderRight, backgroundColor, textColor}) => {
    const styles = StyleSheet.create({
        submitButton: {
            // backgroundColor: 'rgba(0, 0, 255, 0.5);',
            backgroundColor: backgroundColor,
            width: W - (W/2),
            padding: 20,
            height: 68,
            borderColor: '#111949',
            borderBottomWidth: borderBottom,
            borderLeftWidth: borderLeft,
            borderRightWidth: borderRight,
        },
        submitButtonText:{
            textAlign: "center",
            textTransform:"uppercase",
            color: textColor,
        }
    });

    return (
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {onclick}
        >
            {isLoggedIn ? <ActivityIndicatorUI /> : <Text style = {styles.submitButtonText}> {btnName} </Text>}
        </TouchableOpacity>
    )
};

export { ButtonsUI, HeaderButtonUI }


