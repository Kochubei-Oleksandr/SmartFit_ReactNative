import React, {Component} from 'react';
import {StyleSheet, Switch, View, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        margin: 15
    },
    text: {
        color: "#fff"
    }
});

export class SwitchesUI extends Component {
    render() {
        const checkError = (field) => {
            if (this.props.formErrors) {
                return this.props.formErrors.hasOwnProperty(field) ? this.props.formErrors[field] : null;
            }
        };
        return (
            <View style={styles.container}>

                <Switch
                    onValueChange={this.props.onclick}
                    value={this.props.value}
                    thumbTintColor="#0000ff"
                    tintColor="rgba(255, 255, 255, 0.5)"
                    onTintColor="#fff"
                />
                <Text style={styles.text}>{this.props.title}</Text>
                {checkError(this.props.fieldName) ? <Text>{checkError(this.props.fieldName)}</Text> : null}
            </View>
        );
    }
}


