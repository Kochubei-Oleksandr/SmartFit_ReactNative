import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {W, ActivityIndicatorUI} from '../../index';

const HeaderButtonUI = ({btnName, onclick, isLoggedIn, borderBottom, borderLeft, borderRight, backgroundColor, textColor}) => {
    const styles = StyleSheet.create({
        submitButton: {
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

export { HeaderButtonUI }
