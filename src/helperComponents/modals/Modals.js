import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import {Lang} from "../../index";
import {ModalsFoodDiaryConnect, ModalsActivityDiaryConnect} from "./";

export class Modals extends Component {
    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.showModal}
                >
                    <TouchableHighlight onPress={this.props.closeModal}>
                        <Text style={{textAlign: 'right'}}>{Lang.close}</Text>
                    </TouchableHighlight>

                    { this.props.modalsFoodDiary ? <ModalsFoodDiaryConnect selectedItem={this.props.selectedItem} /> : null }

                    { this.props.modalsActivityDiary ? <ModalsActivityDiaryConnect selectedItem={this.props.selectedItem} /> : null }

                    {/*<ModalsFoodDiaryConnect selectedItem={this.props.selectedItem} />*/}

                </Modal>
            </View>
        );
    }
}