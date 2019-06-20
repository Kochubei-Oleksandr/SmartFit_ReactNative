import React, {Component} from 'react';
import {View} from 'react-native';

export class Tables extends Component {
    render() {
        return (
            <View style = {{ flex : 1, flexDirection : "row" , alignSelf : "stretch", backgroundColor: '#675' }} >
                <View style = {{ flex : 1, alignSelf : 'stretch' }} />
                <View style = {{ flex : 1, alignSelf : 'stretch' }} />
                <View style = {{ flex : 1, alignSelf : 'stretch' }} />
            </ View>
        );
    }
}