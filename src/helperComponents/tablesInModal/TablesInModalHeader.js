import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {W, L_BLACK} from "../../index";
import {TableInModalMain} from './'

export class TablesInModalHeader extends Component {
    render() {
        const styles = StyleSheet.create({
            tableHeader: {
                marginTop: 5,
                width: W,
                flexDirection:'row',
                flexWrap:'wrap',
                textAlign: 'center',
                fontWeight: '700',
                backgroundColor: 'rgba(66, 135, 245, 0.5)',
            },
            firstColHeader: {
                padding: 5,
                textAlign: 'center',
                width: '60%',
                fontWeight: '700'
            },
            secondColHeader: {
                padding: 5,
                textAlign: 'center',
                width: '20%',
                fontWeight: '700'
            },
            thirdColHeader: {
                padding: 5,
                textAlign: 'center',
                width: '20%',
                fontWeight: '700'
            }
        });
        return (
            <View>
                <View style={styles.tableHeader}>
                    <Text style={styles.firstColHeader}>{this.props.firstColName}</Text>
                    <Text style={styles.secondColHeader}>{this.props.secondColName}</Text>
                    <Text style={styles.thirdColHeader}>{this.props.thirdColName}</Text>
                </View>

                <View>
                    <TableInModalMain
                        firstColProperty={this.props.firstColProperty}
                        data={this.props.data}
                        costPlan={this.props.costPlan}
                    />
                </View>
            </View>
        );
    }
}