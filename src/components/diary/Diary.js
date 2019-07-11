import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import { Container } from 'native-base';
import {HeaderUI, Tables, Lang, DatePicker, ActivityIndicatorUI, DiaryUserStatistics,
    NORMAL_DATE, CLIENT_API, STATE_KEY, W, actionApp, changeStore, H, L_GREY} from '../../index';

class Diary extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
        isDatePicker: false,
        date: null,
        isLoggedIn: false
    };
    clickLeftBtn() {
        this.setState({isLeftBtn: true, isRightBtn: false});
    }
    clickRightBtn() {
        this.setState({isLeftBtn: false, isRightBtn: true});
    }
    componentDidMount() {
        let date = new Date();
        this.setState({ date: NORMAL_DATE(date) });
        this.getProducts(NORMAL_DATE(date));
        this.getActivities(NORMAL_DATE(date));
    };
    setDate = date => {
        this.setState({ date: NORMAL_DATE(date) });
        this.getProducts(NORMAL_DATE(date));
        this.getActivities(NORMAL_DATE(date));
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
    getActivities = (date) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                date: date,
            },
            'get',
            CLIENT_API + '/user-activity',
            STATE_KEY.userCompletedActivity
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
            }
        });
        return (
            <ScrollView>
                <Container>

                    <HeaderUI
                        btnLeftName={Lang.diary_food}
                        btnRightName={Lang.diary_activity}
                        onclickLeft={() => this.clickLeftBtn()}
                        onclickRight={() => this.clickRightBtn()}
                        isLeftBtn={this.state.isLeftBtn}
                    />

                    <View style={styles.container}>
                        <View style={styles.containerDateTop}>
                            <Text style={styles.textTopDate}>{Lang.selectedDate} {this.state.date}</Text>
                            <DatePicker date={this.state.date} changeDate={(date) => this.setDate(date)} />
                        </View>

                        <DiaryUserStatistics />

                        {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                        { this.state.isLeftBtn ?
                            <Tables
                                tableFoodDiary={true}
                                data={this.props.userEatenFood}
                                firstColName={Lang.foodName}
                                secondColName={Lang.time}
                                thirdColName={Lang.kcal}
                                fourthColName={'X'}
                            />
                            :
                            <Tables
                                tableActivityDiary={true}
                                data={this.props.userCompletedActivity}
                                firstColName={Lang.activityName}
                                secondColName={Lang.time}
                                thirdColName={Lang.kcal}
                                fourthColName={'X'}
                            />
                        }
                    </View>

                </Container>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    userEatenFood: state.userEatenFood,
    userCompletedActivity: state.userCompletedActivity
});

export const DiaryConnect = connect(mapStateToProps, {actionApp, changeStore})(Diary);
