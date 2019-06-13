import React, {Component} from 'react';
import { StyleSheet, Switch, View, Text } from 'react-native';

const styles = StyleSheet.create({

});

export class SwitchesUI extends Component {
    render() {
        const checkError = (field) => {
            if (this.props.formErrors) {
                return this.props.formErrors.hasOwnProperty(field) ? this.props.formErrors[field] : null;
            }
        };
        return (
            <View>
                <Text>{this.props.title}</Text>
                <Switch
                    onValueChange = {this.props.onclick}
                    value = {this.props.value}
                />
                {checkError(this.props.fieldName) ? <Text>{checkError(this.props.fieldName)}</Text> : null}
            </View>
        );
    }
}


