import React, {Component} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
    HeaderUI, DiaryActivity, DiaryFood, Lang, DatePicker, ActivityIndicatorUI,
    NORMAL_DATE, CLIENT_API, STATE_KEY, W, actionApp, changeStore, H, L_GREY
} from '../../index';

class Diary extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
        isDatePicker: false,
        date: null,
        isLoggedIn: false
    };
    clickLeftBtn() {
        this.setState({isLeftBtn: true});
        this.setState({isRightBtn: false});
    }
    clickRightBtn() {
        this.setState({isLeftBtn: false});
        this.setState({isRightBtn: true});
    }
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
            }
        });
        return (
            <ScrollView>
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

                    {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                    { this.state.isLeftBtn ? <DiaryFood userEatenFood={this.props.userEatenFood} /> : <DiaryActivity /> }
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    userEatenFood: state.userEatenFood
});

const DiaryConnect = connect(mapStateToProps, {actionApp, changeStore})(Diary);

export {DiaryConnect}
