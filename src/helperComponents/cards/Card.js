import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {D_GREY, D_BLUE, W, TrainerAvatarImageUI, ImageUI, EMPTY_AVATAR_IMG} from '../../index';

export class Card extends Component {
    render() {
        const styles = StyleSheet.create({
            containerTop: {
                flexDirection: 'row',
                width: W - 20,
                backgroundColor: D_GREY,
                marginBottom: 5,
                marginTop: 5,
            },
            itemLeft: {
                // padding: 5,
            },
            itemRight: {
                padding: 5,
            },
            bold: {
               fontWeight: 'bold',
            },
            touchableAction: {
                color: D_BLUE,
            },
        });
        return (
            <View style={styles.containerTop}>
                <View style={styles.itemLeft}>
                    {this.props.data.avatar ?
                        <TrainerAvatarImageUI source={this.props.data.avatar} />
                        :
                        <ImageUI source={EMPTY_AVATAR_IMG} h={100} w={100}/>
                    }
                </View>
                <View style={styles.itemRight}>
                    <Text>
                        <Text style={styles.bold}>{this.props.data.name} {this.props.data.lastname}</Text>
                        {this.props.data.nickname ? <Text> ({this.props.data.nickname})</Text> : null}

                    </Text>
                    <TouchableOpacity onPress = {() => this.props.actionCard(this.props.data.id)}>
                        <Text style={styles.touchableAction}>{this.props.actionName}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}