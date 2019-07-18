import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {D_BLUE, NORMAL_DATE} from '../../index';
import DateTimePicker from "react-native-modal-datetime-picker";

export class DatePicker extends Component {
    state = {
        isDatePicker: false,
    };
    showDateTimePicker = () => {
        this.setState({ isDatePicker: true });
    };
    hideDateTimePicker = () => {
        this.setState({ isDatePicker: false });
    };
    handleDatePicked = (date) => {
        this.props.changeDate(date);
        this.hideDateTimePicker();
    };

    render() {
        const styles = StyleSheet.create({
            textTopDate: {
                marginRight: 10,
                paddingTop: 2,
                fontSize: 20,
                color: D_BLUE,
            }
        });
        const date = this.props.date ? new Date(this.props.date) : new Date();
        return (
            <View>
                <TouchableOpacity onPress = {() => this.showDateTimePicker()}>
                    <Text style={styles.textTopDate}>{NORMAL_DATE(date)}</Text>
                </TouchableOpacity>

                <DateTimePicker
                    date={date}
                    isVisible={this.state.isDatePicker}
                    onConfirm={(date) => this.handleDatePicked(date)}
                    onCancel={this.hideDateTimePicker}
                />
            </View>
        );
    }
}