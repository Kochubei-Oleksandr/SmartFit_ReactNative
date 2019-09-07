import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {W} from '../../index';
import { Item, Input, Label } from 'native-base';

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