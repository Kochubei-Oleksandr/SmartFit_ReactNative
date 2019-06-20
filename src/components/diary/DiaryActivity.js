import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { L_GREY } from '../../index';

export class DiaryActivity extends Component {
    render() {
        const styles = StyleSheet.create({
            container: {
                width: '100%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: L_GREY,
            },
            welcome: {
                fontSize: 20,
                textAlign: 'center',
                margin: 10,
            },
        });
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>DIARY Activity</Text>
            </View>
        );
    }
}
