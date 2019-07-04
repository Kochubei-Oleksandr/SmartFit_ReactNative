import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {D_GREY, W, Modals} from "../../index";
import {TableFoodDiary} from './'

export class Tables extends Component {
    state = {
        isShowModal: false,
        selectedItem: null,
    };
    openModal = (iter) => {
        this.setState({ selectedItem: iter, isShowModal: true });
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
                    selectedItem={this.state.selectedItem}
                />

            </View>
        );
    }
}