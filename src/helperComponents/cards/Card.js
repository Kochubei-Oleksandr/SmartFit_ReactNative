import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {D_GREY, W, TrainerAvatarImageUI} from '../../index';

export class Card extends Component {
    render() {
        const styles = StyleSheet.create({
            containerTop: {
                flexDirection: 'row',
                justifyContent: 'space-around',
                width: W - 20,
                backgroundColor: D_GREY,
                marginBottom: 10
            },
            itemLeft: {
                padding: 5,
                width: W * 0.4,
                backgroundColor: 'red',

            },
            itemRight: {
                padding: 5,
                width: W * 0.6,
                backgroundColor: 'blue',

            },
        });
        return (
            <View style={styles.containerTop}>
                <View style={styles.itemLeft}>
                    <TrainerAvatarImageUI source={this.props.data.avatar} />
                </View>
                <View style={styles.itemRight}>
                    <Text>{this.props.data.name} {this.props.data.lastname} {this.props.data.nickname}</Text>
                    <TouchableOpacity onPress = {() => this.props.actionCard(this.props.data.id)}>
                        <Text>{this.props.actionName}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}