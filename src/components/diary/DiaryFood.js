import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {L_GREY, NORMAL_DATE, DiaryUserStatistics, DatePicker, H, W} from '../../index';

export class DiaryFood extends Component {
    state = {
        isDatePicker: false,
        date: null,
    };
    componentDidMount() {
        let date = new Date();
        this.setState({ date: NORMAL_DATE(date) });
    };
    setDate = date => {
        this.setState({ date: NORMAL_DATE(date) });
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                width: W,
                flex: 1,
                backgroundColor: L_GREY,
                height: H,
                alignItems: 'center',

            },
            containerDateTop: {
                width: W,
                height: 60,
                paddingTop: 15,
                flexDirection: 'row',
                justifyContent: 'center',
            },
            textTopDate: {
                marginRight: 10,
                paddingTop: 2,
                fontSize: 20,
            },

        });
        return (
            <View style={styles.container}>
                <View style={styles.containerDateTop}>
                    <Text style={styles.textTopDate}>Выбранная дата: {this.state.date}</Text>
                    <DatePicker changeDate={(date) => this.setDate(date)} />
                </View>
                <DiaryUserStatistics />
            </View>
        );
    }
}
