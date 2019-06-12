import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
});

const ButtonsUI = ({btnName, onclick}) => {
    return (
        <TouchableOpacity
            style = {styles.submitButton}
            onPress = {onclick}>
            <Text style = {styles.submitButtonText}> {btnName} </Text>
        </TouchableOpacity>
    )
};

export { ButtonsUI }


