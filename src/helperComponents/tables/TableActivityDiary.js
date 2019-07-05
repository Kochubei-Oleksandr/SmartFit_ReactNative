import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {actionApp, changeStore, D_GREY, W, ActivityIndicatorUI, CLIENT_API, STATE_KEY} from "../../index";

class TableActivityDiary extends Component {
    state = {
        isLoggedIn: false
    };
    deleteDiaryActivity = (data) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                date: data.date,
                id: data.id
            },
            'delete',
            CLIENT_API + '/user-activity',
            STATE_KEY.userCompletedActivity
        )
            .then(success => {
                if (success === true) {
                    this.setState({isLoggedIn: false});
                }
            })
    };
    render() {
        const styles = StyleSheet.create({
            tableMain: {
                width: W - 20,
                flexDirection:'row',
                flexWrap:'wrap',
                backgroundColor: D_GREY,
                textAlign: 'center',
            },
            firstColMain: {
                borderBottomWidth: 2,
                borderLeftWidth: 2,
                borderRightWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '50%'
            },
            secondColMain: {
                borderBottomWidth: 2,
                borderRightWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '20%'
            },
            thirdColMain: {
                borderBottomWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '20%'
            },
            fourthColMain: {
                borderBottomWidth: 2,
                borderLeftWidth: 2,
                borderRightWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '10%'
            },
            textAlign: {
                textAlign: 'center',
            }
        });
        return (
            <View>
                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                {this.props.data.map((data, i) => {
                    return (
                        <View key={i} style={styles.tableMain}>
                            <TouchableOpacity style={styles.firstColMain} onPress = {() => this.props.openModal(i)}>
                                <Text>{data.name_exercise}</Text>
                            </TouchableOpacity>
                            <Text style={styles.secondColMain}>{data.time}</Text>
                            <Text style={styles.thirdColMain}>{data.kkal_lost}</Text>
                            <TouchableOpacity style={styles.fourthColMain} onPress = {() => this.deleteDiaryActivity(data)}>
                                <Text style={styles.textAlign}>X</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}

export const TableActivityDiaryConnect = connect(null, {actionApp, changeStore})(TableActivityDiary);