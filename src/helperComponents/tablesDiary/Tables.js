import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {W, Modals, L_BLACK} from "../../index";
import { Icon } from 'native-base';
import {TableFoodDiaryConnect, TableActivityDiaryConnect} from './'

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
                textAlign: 'center',
                fontWeight: '700',
                backgroundColor: 'rgba(66, 135, 245, 0.5)',
            },
            firstColHeader: {
                padding: 5,
                textAlign: 'center',
                width: '49%',
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
            },
            fourthColHeader: {
                padding: 5,
                textAlign: 'center',
                width: '10%',
                fontSize: 20,
                color: L_BLACK
            },
        });
        return (
            <View>
                <View style={styles.tableHeader}>
                    <Text style={styles.firstColHeader}>{this.props.firstColName}</Text>
                    <Text style={styles.secondColHeader}>{this.props.secondColName}</Text>
                    <Text style={styles.thirdColHeader}>{this.props.thirdColName}</Text>
                    <Icon style={styles.fourthColHeader} name='delete' type='AntDesign' />
                </View>

                { this.props.tableFoodDiary ?
                    <View>
                        <TableFoodDiaryConnect
                            data={this.props.data}
                            openModal={(data) => this.openModal(data)}
                        />
                        <Modals
                            modalsFoodDiary={true}
                            showModal={this.state.isShowModal}
                            closeModal={this.closeModal}
                            selectedItem={this.state.selectedItem}
                        />
                    </View>
                    :
                    null
                }

                { this.props.tableActivityDiary ?
                    <View>
                        <TableActivityDiaryConnect
                            data={this.props.data}
                            openModal={(data) => this.openModal(data)}
                        />
                        <Modals
                            modalsActivityDiary={true}
                            showModal={this.state.isShowModal}
                            closeModal={this.closeModal}
                            selectedItem={this.state.selectedItem}
                        />
                    </View>
                    :
                    null
                }

            </View>
        );
    }
}