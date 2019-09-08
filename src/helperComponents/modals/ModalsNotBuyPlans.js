import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {CLIENT_API, STATE_KEY, ActivityIndicatorUI, actionApp, changeStore,
    BasicTextInputUI, Lang, CHANGE_REPETITIONS} from "../../index";

export class ModalsNotBuyPlans extends Component {
    componentDidMount() {
        console.log(this.props.data);
    }
    render() {
        return (
            <ScrollView>

            </ScrollView>
        );
    }
}