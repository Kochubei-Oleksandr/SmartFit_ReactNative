import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    }
});

export class TextInputUI extends Component {
    render() {
        const checkError = (field) => {
            if (this.props.error) {
                return this.props.error.hasOwnProperty(field) ? this.props.error[field] : null;
            }
        };
        return (
            <View>
                <TextInput style = {styles.input}
                   placeholder = {this.props.placeholder}
                   placeholderTextColor = "#9a73ef"
                   autoCapitalize = "none"
                   onChangeText = {this.props.changeInput}
                />
                {checkError(this.props.fieldName) ? <Text>{checkError(this.props.fieldName)}</Text> : null}
            </View>
        );
    }
}


