import React from 'react';
import Dimensions from 'Dimensions';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    submitButton: {
        backgroundColor: 'rgba(0, 0, 255, 0.5);',
        padding: 10,
        margin: 10,
        borderRadius: 20,
        width: DEVICE_WIDTH - 40,
        height: 40
    },
    submitButtonText:{
        textAlign: "center",
        textTransform:"uppercase",
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


