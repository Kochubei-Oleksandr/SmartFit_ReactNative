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

export { ButtonsUI }


