import React, {Component} from 'react';
import {View} from 'react-native';
import {DiaryUserStatistics, Tables, Lang} from '../../index';

export class DiaryFood extends Component {
    render() {
        return (
            <View>
                <DiaryUserStatistics />

                <Tables
                    data={this.props.userEatenFood}
                    firstColName={Lang.foodName}
                    secondColName={Lang.time}
                    thirdColName={Lang.kcal}
                    fourthColName={'X'}
                />
            </View>
        );
    }
}
