import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {L_GREY, NORMAL_DATE, DiaryUserStatistics, DatePicker, H, W, Tables, STATE_KEY,
    CLIENT_API, actionApp, changeStore, ActivityIndicatorUI, Lang} from '../../index';

class DiaryFood extends Component {
    state = {
        isDatePicker: false,
        date: null,
        isLoggedIn: false
    };
    componentDidMount() {
        let date = new Date();
        this.setState({ date: NORMAL_DATE(date) });
        this.getProducts(NORMAL_DATE(date));
    };
    setDate = date => {
        this.setState({ date: NORMAL_DATE(date) });
        this.getProducts(NORMAL_DATE(date));
    };
    getProducts = (date) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                date: date,
            },
            'get',
            CLIENT_API + '/user-food',
            STATE_KEY.userEatenFood
        )
            .then(() => { this.setState({isLoggedIn: false}) });
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                width: W,
                flex: 1,
                backgroundColor: L_GREY,
                minHeight: H,
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
                    <Text style={styles.textTopDate}>{Lang.selectedDate} {this.state.date}</Text>
                    <DatePicker date={this.state.date} changeDate={(date) => this.setDate(date)} />
                </View>

                <DiaryUserStatistics />

                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                <Tables
                    data={this.props.userEatenFood}
                    firstColName={Lang.foodName}
                    secondColName={Lang.time}
                    thirdColName={Lang.kcal}
                    fourthColName={'X'}
                />

            </View>
        );
    }
}

const mapStateToProps = state => ({
    userEatenFood: state.userEatenFood
});

const DiaryFoodConnect = connect(mapStateToProps, {actionApp, changeStore})(DiaryFood);

export {DiaryFoodConnect}
