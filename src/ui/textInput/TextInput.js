import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text, Image} from 'react-native';
import {W} from '../../index';

export class TextInputUI extends Component {
    render() {
        const styles = StyleSheet.create({
            input: {
                backgroundColor: 'rgba(255, 255, 255, 0.4)',
                width: W - 40,
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
                    secureTextEntry={this.props.secureTextEntry}
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

export class BasicTextInputUI extends Component {
    render() {
        const styles = StyleSheet.create({
            input: {
                backgroundColor: '#554',
                // width: W - 40,
                height: 40,
                marginHorizontal: 10,
                marginVertical: 10,
                // paddingLeft: 45,
                // borderRadius: 20,
                color: '#000',
            },
            container: {
                // width: W - 40,
                // flex: 1,
                // flexDirection: 'row',
                // justifyContent: 'flex-start',
                // alignItems: 'stretch',
            },
            inlineText: {

            },
        });
        const checkError = (field) => {
            if (this.props.formErrors) {
                return this.props.formErrors.hasOwnProperty(field) ? this.props.formErrors[field] : null;
            }
        };
        return (
            <View style={styles.container}>
                <Text style={styles.inlineText}>{this.props.placeholder}</Text>
                <TextInput
                    style={styles.input}
                    defaultValue={this.props.defaultValue.toString()}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    keyboardType={this.props.keyboardType}
                    placeholderTextColor="#000"
                    underlineColorAndroid="transparent"
                    onChangeText = {this.props.changeInput}
                />
                {checkError(this.props.fieldName) ? <Text>{checkError(this.props.fieldName)}</Text> : null}
            </View>
        );
    }
}

