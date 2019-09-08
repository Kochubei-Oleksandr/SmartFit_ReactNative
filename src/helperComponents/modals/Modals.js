import React, {Component} from 'react';
import {Modal, View, StyleSheet} from 'react-native';
import { Icon } from 'native-base';
import {ModalsFoodDiaryConnect, ModalsActivityDiaryConnect, ModalsNotBuyPlans} from "./";

export class Modals extends Component {
    render() {
        const styles = StyleSheet.create({
            btnModal: {
                display: "flex",
                marginLeft: 'auto',
                marginTop: 10,
                marginRight:10,
                color: 'red',
            }
        });
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.showModal}
                >
                    <Icon onPress={this.props.closeModal} style={styles.btnModal} name='closecircleo' type='AntDesign' />

                    { this.props.modalsFoodDiary ? <ModalsFoodDiaryConnect selectedItem={this.props.selectedItem} /> : null }

                    { this.props.modalsActivityDiary ? <ModalsActivityDiaryConnect selectedItem={this.props.selectedItem} /> : null }

                    { this.props.modalsNotBuyPlans ? <ModalsNotBuyPlans data={this.props.data} /> : null }

                </Modal>
            </View>
        );
    }
}