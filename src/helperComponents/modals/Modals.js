import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Image, StyleSheet,} from 'react-native';
import {Lang} from "../../index";
import closeImg from "../../images/close-circula.png";
import {ModalsFoodDiaryConnect, ModalsActivityDiaryConnect} from "./";

export class Modals extends Component {
    render() {

        const styles = StyleSheet.create({
            btnModal: {
                display: "flex",
                marginLeft: 'auto',
                marginTop: 10,
                marginRight:10


            }
        });

            return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.showModal}
                >
                    <TouchableHighlight onPress={this.props.closeModal} style={styles.btnModal}>
                        <Image source={closeImg} />
                    </TouchableHighlight>

                    { this.props.modalsFoodDiary ? <ModalsFoodDiaryConnect selectedItem={this.props.selectedItem} /> : null }

                    { this.props.modalsActivityDiary ? <ModalsActivityDiaryConnect selectedItem={this.props.selectedItem} /> : null }

                </Modal>
            </View>
        );
    }
}