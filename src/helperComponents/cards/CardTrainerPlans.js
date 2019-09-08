import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {D_GREY, D_BLUE, W, TrainerPlansImageUI} from '../../index';
import { AirbnbRating } from 'react-native-ratings';

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
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            },
            touchableText: {
                color: D_BLUE,
                textTransform: 'uppercase',
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
                        <AirbnbRating
                            size={20}
                            showRating={false}
                            selectedColor={D_BLUE}
                            defaultRating={this.props.data.rating}
                            isDisabled={true}
                        />
                        {this.props.data.cost == 0 && this.props.data.cost == null && this.props.costName ?
                            <Text>{this.props.costName}: 0$</Text>
                            :
                            <View>
                                {this.props.costName ? <Text>{this.props.costName}: {this.props.data.cost}$</Text> : null}
                            </View>
                        }
                        <TouchableOpacity onPress = {() => this.props.actionCard(this.props.data)}>
                            <Text style={styles.touchableText}>{this.props.actionName}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}