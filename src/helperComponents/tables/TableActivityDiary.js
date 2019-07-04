import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {D_GREY, W} from "../../index";

export class TableActivityDiary extends Component {
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
        });
        return (
            <View>
                {this.props.data.map((data, i) => {
                    return (
                        <View key={i} style={styles.tableMain}>
                            <TouchableOpacity style={styles.firstColMain} onPress = {() => this.props.openModal(i)}>
                                <Text>{data.name_exercise}</Text>
                            </TouchableOpacity>
                            <Text style={styles.secondColMain}>{data.time}</Text>
                            <Text style={styles.thirdColMain}>{data.kkal_lost}</Text>
                            <Text style={styles.fourthColMain}>X</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}