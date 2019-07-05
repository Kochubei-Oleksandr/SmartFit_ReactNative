import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {H, L_GREY, Lang, W, HeaderUI} from "../../index";
import MyTrainersConnect from './MyTrainers';
import AllTrainersConnect from './AllTrainers';

export class Trainers extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
        isLoggedIn: false
    };
    clickLeftBtn() {
        this.setState({isLeftBtn: true, isRightBtn: false});
    }
    clickRightBtn() {
        this.setState({isLeftBtn: false, isRightBtn: true});
    }
    render() {
        const styles = StyleSheet.create({
            container: {
                width: W,
                flex: 1,
                backgroundColor: L_GREY,
                minHeight: H,
                alignItems: 'center',
            }
        });
        return (
            <ScrollView>
                <HeaderUI
                    btnLeftName={Lang.myTrainers}
                    btnRightName={Lang.allTrainers}
                    onclickLeft={() => this.clickLeftBtn()}
                    onclickRight={() => this.clickRightBtn()}
                    isLeftBtn={this.state.isLeftBtn}
                />

                <View style={styles.container}>
                    { this.state.isLeftBtn ? <MyTrainersConnect /> : <AllTrainersConnect /> }
                </View>
            </ScrollView>
        );
    }
}
