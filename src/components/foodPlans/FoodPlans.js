import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {H, L_GREY, Lang, W, HeaderUI} from "../../index";
import BoughtFoodPlans from './BoughtFoodPlans';
import DefaultFoodPlans from './DefaultFoodPlans';
import TrainerFoodPlans from './TrainerFoodPlans';

export class FoodPlans extends Component {
    state = {
        isLeftBtn: true,
        isCenterBtn: false,
        isRightBtn: false,
        isLoggedIn: false
    };
    clickLeftBtn() {
        this.setState({isLeftBtn: true, isCenterBtn: false, isRightBtn: false});
    }
    clickCenterBtn() {
        this.setState({isLeftBtn: false, isCenterBtn: true, isRightBtn: false});
    }
    clickRightBtn() {
        this.setState({isLeftBtn: false, isCenterBtn: false, isRightBtn: true});
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
                    btnLeftName={Lang.boughtFoodPlan}
                    btnCenterName={Lang.defaultFoodPlan}
                    btnRightName={Lang.trainerFoodPlan}
                    onclickLeft={() => this.clickLeftBtn()}
                    onclickCenter={() => this.clickCenterBtn()}
                    onclickRight={() => this.clickRightBtn()}
                    isLeftBtn={this.state.isLeftBtn}
                    isCenterBtn={this.state.isCenterBtn}
                    isRightBtn={this.state.isRightBtn}
                />

                <View style={styles.container}>
                    { this.state.isLeftBtn ? <BoughtFoodPlans /> : null}
                    { this.state.isCenterBtn ? <DefaultFoodPlans /> : null}
                    { this.state.isRightBtn ? <TrainerFoodPlans /> : null}
                </View>
            </ScrollView>
        );
    }
}
