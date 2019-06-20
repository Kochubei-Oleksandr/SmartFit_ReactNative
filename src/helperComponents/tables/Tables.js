import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {D_GREY, W} from "../../index";

export class Tables extends Component {
    render() {
        const styles = StyleSheet.create({
            tableHeader: {
                marginTop: 20,
                width: W - 20,
                flexDirection:'row',
                flexWrap:'wrap',
                backgroundColor: D_GREY,
                textAlign: 'center',
            },
            tableMain: {
                width: W - 20,
                flexDirection:'row',
                flexWrap:'wrap',
                backgroundColor: D_GREY,
                textAlign: 'center',
            },
            firstColHeader: {
                borderWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '50%'
            },
            secondColHeader: {
                borderBottomWidth: 2,
                borderTopWidth: 2,
                borderRightWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '20%'
            },
            thirdColHeader: {
                borderBottomWidth: 2,
                borderTopWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '20%'
            },
            fourthColHeader: {
                borderWidth: 2,
                padding: 5,
                textAlign: 'center',
                width: '10%'
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
                <View style={styles.tableHeader}>
                    <Text style={styles.firstColHeader}>Название продукта</Text>
                    <Text style={styles.secondColHeader}>Время</Text>
                    <Text style={styles.thirdColHeader}>Ккал</Text>
                    <Text style={styles.fourthColHeader}>X</Text>
                </View>
                {this.props.data.map((data, i) => {
                    return (
                        <View key={i} style={styles.tableMain}>
                            <Text style={styles.firstColMain}>{data.name_food}</Text>
                            <Text style={styles.secondColMain}>{data.time}</Text>
                            <Text style={styles.thirdColMain}>{data.kkal_summ}</Text>
                            <Text style={styles.fourthColMain}>X</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}