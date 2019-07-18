import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {D_BLUE, NORMAL_TIME, SET_TIME, W} from '../../index';
import DateTimePicker from "react-native-modal-datetime-picker";

export class TimePicker extends Component {
    state = {
        isTimePicker: false,
    };
    showDateTimePicker = () => {
        this.setState({ isTimePicker: true });
    };
    hideTimePicker = () => {
        this.setState({ isTimePicker: false });
    };
    handleTimePicked = (time) => {
        this.props.changeTime(NORMAL_TIME(time));
        this.hideTimePicker();
    };

    render() {
        const styles = StyleSheet.create({
            textTopTime: {
                marginRight: 10,
                paddingTop: 2,
                fontSize: 20,
                color: D_BLUE,
            },
            container: {
                width: W / this.props.widthPart - 30,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
        return (
            <View style={styles.container}>
                <Text>Specified time</Text>
                <TouchableOpacity onPress = {() => this.showDateTimePicker()}>
                    <Text style={styles.textTopTime}>{this.props.time}</Text>
                </TouchableOpacity>

                <DateTimePicker
                    date={SET_TIME(this.props.time)}
                    isVisible={this.state.isTimePicker}
                    onConfirm={(time) => this.handleTimePicked(time)}
                    onCancel={this.hideTimePicker}
                    enableSeconds={true}
                    mode={'time'}
                />
            </View>
        );
    }
}