import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { Icon } from 'native-base';
import {CLIENT_API, STATE_KEY, W, ActivityIndicatorUI, actionApp, changeStore, D_BLUE} from "../../index";

class TableFoodDiary extends Component {
    state = {
        isLoggedIn: false
    };
    deleteDiaryFood = (data) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                date: data.date,
                id: data.id
            },
            'delete',
            CLIENT_API + '/user-food',
            STATE_KEY.userEatenFood
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
                alignItems: 'center',
                textAlign: 'center',
            },
            tableColor: {
                backgroundColor: '#fff',
            },
            tableColor2: {
                backgroundColor: 'rgba(66, 135, 245, 0.5)',
            },
            firstColMain: {
                padding: 5,
                width: '49%',
                borderColor: '#000'
            },
            secondColMain: {
                padding: 5,
                textAlign: 'center',
                width: '20%',
                borderColor: '#000'
            },
            thirdColMain: {
                padding: 5,
                textAlign: 'center',
                width: '20%',
                borderColor: '#000'
            },
            fourthColMain: {
                padding: 5,
                width: '10%',
                fontSize: 20,
                color: D_BLUE,
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
                        <View key={i} style={[styles.tableMain, i % 2 === 0 ? styles.tableColor: styles.tableColor2]}>
                            <TouchableOpacity style={styles.firstColMain} onPress = {() => this.props.openModal(i)}>
                                <Text>{data.name_food}</Text>
                            </TouchableOpacity>
                            <Text style={styles.secondColMain}>{data.time}</Text>
                            <Text style={styles.thirdColMain}>{data.kkal_summ}</Text>
                            <Icon
                                style={styles.fourthColMain}
                                name='delete'
                                type='AntDesign'
                                onPress = {() => this.deleteDiaryFood(data)}
                            />
                        </View>
                    );
                })}
            </View>
        );
    }
}

export const TableFoodDiaryConnect = connect(null, {actionApp, changeStore})(TableFoodDiary);