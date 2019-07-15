import React, {Component} from 'react';
import {ProgressBarAndroid, StyleSheet, Text, View} from 'react-native';
import { Icon } from 'native-base';
import { D_GREY, W, D_BLUE, Lang } from '../../index';

export class DiaryUserStatistics extends Component {
    state = {
        spendCal: 250,
        total: 2500,
        moreInfo: false,
    };

    render() {
        const styles = StyleSheet.create({
            containerInfoTop: {
                width: W - 20,
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent: 'space-around',
                backgroundColor: D_GREY,

            },
            containerBox: {
                width: W / 2 - 40,
                backgroundColor: '#fff',
                padding: 5,
                marginTop: 10,
            },
            containerBoxLast: {
                marginBottom: 10,
            },
            iconCenter: {
                justifyContent: 'center',
            },
        });
        return (
            <View>
                <View style={styles.containerInfoTop}>
                    <View style={styles.containerBox}>
                        <Text style={styles.textCenter}>{Lang.eaten}</Text>
                        <ProgressBarAndroid
                            color={D_BLUE}
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={this.state.spendCal/this.state.total}
                        />
                        <Text>{this.state.spendCal} {Lang.outOff} {this.state.total} {Lang.kcal}</Text>
                    </View>

                    <View style={styles.containerBox}>
                        <Text  style={styles.textCenter}>{Lang.spent}</Text>
                        <ProgressBarAndroid
                            color={D_BLUE}
                            styleAttr="Horizontal"
                            indeterminate={false}
                            progress={this.state.spendCal/this.state.total}
                        />
                        <Text>{this.state.spendCal} {Lang.outOff} {this.state.total} {Lang.kcal}</Text>
                    </View>
                </View>

                {this.state.moreInfo ?
                    <View style={styles.containerInfoTop}>
                        <View style={styles.containerBox}>
                            <Text  style={styles.textCenter}>{Lang.protein}</Text>
                            <ProgressBarAndroid
                                color={D_BLUE}
                                styleAttr="Horizontal"
                                indeterminate={false}
                                progress={this.state.spendCal/this.state.total}
                            />
                            <Text>{this.state.spendCal} {Lang.outOff} {this.state.total} {Lang.gram}</Text>
                        </View>

                        <View style={styles.containerBox}>
                            <Text  style={styles.textCenter}>{Lang.fat}</Text>
                            <ProgressBarAndroid
                                color={D_BLUE}
                                styleAttr="Horizontal"
                                indeterminate={false}
                                progress={this.state.spendCal/this.state.total}
                            />
                            <Text>{this.state.spendCal} {Lang.outOff} {this.state.total} {Lang.gram}</Text>
                        </View>

                        <View style={[styles.containerBox, styles.containerBoxLast]}>
                            <Text  style={styles.textCenter}>{Lang.carbohydrates}</Text>
                            <ProgressBarAndroid
                                color={D_BLUE}
                                styleAttr="Horizontal"
                                indeterminate={false}
                                progress={this.state.spendCal/this.state.total}
                            />
                            <Text>{this.state.spendCal} {Lang.outOff} {this.state.total} {Lang.gram}</Text>
                        </View>

                        <View style={[styles.containerBox, styles.containerBoxLast]}>
                            <Text  style={styles.textCenter}>{Lang.water}</Text>
                            <ProgressBarAndroid
                                color={D_BLUE}
                                styleAttr="Horizontal"
                                indeterminate={false}
                                progress={this.state.spendCal/this.state.total}
                            />
                            <Text>{this.state.spendCal} {Lang.outOff} {this.state.total} {Lang.gram}</Text>
                        </View>

                        <View style={[styles.containerInfoTop, styles.iconCenter]}>
                            <Icon style={{color: D_BLUE}} onPress = {() => this.setState({moreInfo: false})} name='up' type='AntDesign'  />
                        </View>
                    </View>
                    :
                    <View style={[styles.containerInfoTop, styles.iconCenter]}>
                        <Icon style={{color: D_BLUE}} onPress = {() => this.setState({moreInfo: true})} name='down' type='AntDesign'  />
                    </View>
                }
            </View>
        );
    }
}