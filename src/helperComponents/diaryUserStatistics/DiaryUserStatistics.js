import React, {Component} from 'react';
import {ProgressBarAndroid, StyleSheet, Text, View} from 'react-native';
import {D_GREY, W} from '../../index';

export class DiaryUserStatistics extends Component {

    state = {
        spendCal: 250,
        total: 2500
        }

    render() {
        const styles = StyleSheet.create({
            containerInfoTop: {
                width: W - 20,
                padding: 5,
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent: 'space-between',
                backgroundColor: D_GREY,

            },
            containerBox: {
                backgroundColor: '#fff',
                padding: 5,
                margin: 5
            },
            textCenter: {
               textAlign: 'center'
            },
        });
        return (
            <View style={styles.containerInfoTop}>
                <View style={styles.containerBox}>
                    <Text style={styles.textCenter}>Съеденно</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.spendCal/this.state.total}
                    />
                    <Text>{this.state.spendCal} ккал из  {this.state.total} ккал</Text>

                </View>

                <View style={styles.containerBox}>
                    <Text  style={styles.textCenter}>Съеденно</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.spendCal/this.state.total}
                    />
                    <Text>{this.state.spendCal} ккал из  {this.state.total} ккал</Text>

                </View>

                <View style={styles.containerBox}>
                    <Text  style={styles.textCenter}>Съеденно</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.spendCal/this.state.total}
                    />
                    <Text>{this.state.spendCal} ккал из  {this.state.total} ккал</Text>

                </View>

                <View style={styles.containerBox}>
                    <Text  style={styles.textCenter}>Съеденно</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.spendCal/this.state.total}
                    />
                    <Text>{this.state.spendCal} ккал из  {this.state.total} ккал</Text>

                </View>

                <View style={styles.containerBox}>
                    <Text  style={styles.textCenter}>Съеденно</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.spendCal/this.state.total}
                    />
                    <Text>{this.state.spendCal} ккал из  {this.state.total} ккал</Text>

                </View>

                <View style={styles.containerBox}>
                    <Text  style={styles.textCenter}>Съеденно</Text>
                    <ProgressBarAndroid
                        styleAttr="Horizontal"
                        indeterminate={false}
                        progress={this.state.spendCal/this.state.total}
                    />
                    <Text>{this.state.spendCal} ккал из  {this.state.total} ккал</Text>

                </View>
            </View>
        );
    }
}