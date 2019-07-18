import React, {Component} from 'react';
import {TextInput, StyleSheet, View, Text, Image} from 'react-native';
import {W} from '../../index';
import { Container, Header, Content, Form, Item, Input, Label, Icon } from 'native-base';

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
            container: {
                width: W / this.props.widthPart - 30,
            },
            inlineText: {

            },
        });
        const checkError = (field) => {
            if (this.props.formErrors) {
                return this.props.formErrors.hasOwnProperty(field) ? this.props.formErrors[field] : null;
            }
        };
        const defaultValue = () => {
            if (this.props.defaultValue === null || this.props.defaultValue === undefined) {
                return '';
            } else {
                return this.props.defaultValue.toString();
            }
        };
        return (
            <View>
                <Item
                    stackedLabel
                    error={checkError(this.props.fieldName) ? true : false}
                    bordered={true}
                    style={styles.container}
                >
                    <Label>{this.props.placeholder}</Label>
                    <Input
                        value={defaultValue()}
                        ref={this.props.fieldName}
                        onChangeText = {this.props.changeInput}
                        returnKeyType={this.props.returnKeyType}
                        keyboardType={this.props.keyboardType}
                    />
                </Item>
                {checkError(this.props.fieldName) ? <Text style={styles.container}>{checkError(this.props.fieldName)}</Text> : null}
            </View>
        );
    }
}

