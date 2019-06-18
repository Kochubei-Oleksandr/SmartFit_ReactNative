import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text, Image} from 'react-native';
import Dimensions from 'Dimensions';


const DEVICE_WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        width: DEVICE_WIDTH - 40,
        height: 40,
        marginHorizontal: 10,
        marginVertical: 10,
        paddingLeft: 45,
        borderRadius: 20,
        color: '#ffffff',
    },

    inlineImg: {
        position: 'absolute',
        zIndex: 99,
        width: 22,
        height: 22,
        left: 25,
        top: 17,
    },
});

export class TextInputUI extends Component {
    render() {
        const checkError = (field) => {
            if (this.props.formErrors) {
                return this.props.formErrors.hasOwnProperty(field) ? this.props.formErrors[field] : null;
            }
        };
        return (

        <View >
            <Image source={this.props.source} style={styles.inlineImg} />
            <TextInput
                style={styles.input}
                placeholder={this.props.placeholder}
               
                autoCorrect={this.props.autoCorrect}
                autoCapitalize={this.props.autoCapitalize}
                returnKeyType={this.props.returnKeyType}
                placeholderTextColor="white"
                underlineColorAndroid="transparent"
                onChangeText = {this.props.changeInput}
            />
            {checkError(this.props.fieldName) ? <Text>{checkError(this.props.fieldName)}</Text> : null}
        </View>
        );
    }
}


