import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {CLIENT_API, D_GREY, STATE_KEY, W, ActivityIndicatorUI, actionApp, changeStore} from "../../index";

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
                width: '50%',
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
                            <TouchableOpacity style={styles.fourthColMain} onPress = {() => this.deleteDiaryFood(data)}>
                                <Text style={styles.textAlign}>X</Text>
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}

export const TableFoodDiaryConnect = connect(null, {actionApp, changeStore})(TableFoodDiary);