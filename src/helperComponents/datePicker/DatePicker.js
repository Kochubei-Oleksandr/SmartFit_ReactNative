import React, {Component} from 'react';
import {View} from 'react-native';
import {CALENDAR_BLUE_IMG, TouchableImageUI} from '../../index';
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
        const date = this.props.date ? new Date(this.props.date) : new Date();
        return (
            <View>
                <TouchableImageUI
                    onclick={() => this.showDateTimePicker()}
                    source={CALENDAR_BLUE_IMG}
                />
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