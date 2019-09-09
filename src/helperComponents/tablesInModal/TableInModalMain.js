import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {D_BLUE, Lang, W, ButtonsUI} from "../../index";

export class TableInModalMain extends Component {
    render() {
        const styles = StyleSheet.create({
            tableMain: {
                width: W,
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
                width: '60%',
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
            textCost: {
                textAlign: 'center',
                marginBottom: 10,
                marginTop: 10,
            },
            btnBuy: {
                textAlign: 'center',
                marginBottom: 10,
                textTransform:"uppercase",
                color: D_BLUE,
            },
        });
        return (
            <View>
                <View>
                    {this.props.data.map((data, i) => {
                        return (
                            <View key={i} style={[styles.tableMain, i % 2 === 0 ? styles.tableColor: styles.tableColor2]}>
                                <Text style={styles.firstColMain}>{data[this.props.firstColProperty]}</Text>
                                <Text style={styles.secondColMain}>{data.day}</Text>
                                <Text style={styles.thirdColMain}>{data.time}</Text>
                            </View>
                        );
                    })}
                </View>
                <View>
                    <Text style={styles.textCost}>{Lang.costPlan}: {this.props.costPlan}$ / 30 {Lang.days}</Text>
                    <ButtonsUI
                        minusWidth={20}
                        btnName={Lang.buy}
                        onclick={() => this.props.buyPlan}
                        isLoggedIn={this.props.isLoggedIn}
                    />
                </View>
            </View>
        );
    }
}