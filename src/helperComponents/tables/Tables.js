import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {D_GREY, W} from "../../index";
import {Modals} from "../modals/Modals";

export class Tables extends Component {
    state = {
        isShowModal: false,
        selectedItem: null,
    };
    openModal = (data) => {
        this.setState({ selectedItem: data });
        this.setState({ isShowModal: true });
    };
    closeModal = () => {
        this.setState({ isShowModal: false });
    };

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
        });
        return (
            <View>
                <View style={styles.tableHeader}>
                    <Text style={styles.firstColHeader}>{this.props.firstColName}</Text>
                    <Text style={styles.secondColHeader}>{this.props.secondColName}</Text>
                    <Text style={styles.thirdColHeader}>{this.props.thirdColName}</Text>
                    <Text style={styles.fourthColHeader}>{this.props.fourthColName}</Text>
                </View>

                <TableFoodDiary
                    data={this.props.data}
                    openModal={(data) => this.openModal(data)}
                />

                <Modals
                    showModal={this.state.isShowModal}
                    closeModal={this.closeModal}
                    data={this.state.selectedItem}
                />

            </View>
        );
    }
}

class TableFoodDiary extends Component {
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
                            <TouchableOpacity style={styles.firstColMain} onPress = {() => this.props.openModal(data)}>
                                <Text>{data.name_food}</Text>
                            </TouchableOpacity>
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