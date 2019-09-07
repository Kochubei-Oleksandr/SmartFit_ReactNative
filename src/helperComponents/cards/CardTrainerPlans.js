import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {D_GREY, D_BLUE, W, TrainerPlansImageUI} from '../../index';

export class CardTrainerPlans extends Component {
    render() {
        const styles = StyleSheet.create({
            containerTop: {
                flexDirection: 'row',
                width: W - 28,
                backgroundColor: D_GREY,
                marginBottom: 7,
                marginTop: 7,
            },
            // itemLeft: {
            //     // padding: 5,
            // },
            // itemRight: {
            //     padding: 5,
            // },
            title: {
                textAlign: 'center',
                marginRight: 20,
                marginLeft: 10,
            },
            trainerName: {
                fontWeight: 'bold',
                textAlign: 'center',
            },
            headline: {
                textAlign: 'justify',
                marginRight: 20,
                marginLeft: 10,
            },
            containerAction: {

            },
            touchableAction: {
                color: D_BLUE,
            },
        });
        return (
            <View style={styles.containerTop}>
                <View>
                    {this.props.data.photo ?
                        <TrainerPlansImageUI source={this.props.data.photo} />
                        :
                        null
                    }
                    <Text style={styles.title}>{this.props.data.name}</Text>
                    <Text style={styles.trainerName}>
                        <Text>{this.props.data.trainer_name}</Text>
                        {this.props.data.trainer_nickname ? <Text> ({this.props.data.trainer_nickname})</Text> : null}
                    </Text>
                    <Text style={styles.headline}>{this.props.data.headline}</Text>
                    <View style={styles.containerAction}>

                    </View>
                </View>
            </View>
        );
    }
}