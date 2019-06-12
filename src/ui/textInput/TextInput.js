import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
});

const TextInputUI = ({placeholder, changeInput}) => {
    return (
        <TextInput style = {styles.input}
           placeholder = {placeholder}
           placeholderTextColor = "#9a73ef"
           autoCapitalize = "none"
           onChangeText = {changeInput}
        />
    )
};

export { TextInputUI }


