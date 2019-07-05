import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {D_GREY, W} from '../../index';

export class DiaryUserStatistics extends Component {
    render() {
        const styles = StyleSheet.create({
            containerInfoTop: {
                width: W - 20,
                padding: 5,
                flexDirection:'row',
                flexWrap:'wrap',
                backgroundColor: D_GREY,
            },
            textTopInfo: {
                padding: 3,
            },
        });
        return (
            <View style={styles.containerInfoTop}>
                <View style={styles.textTopInfo}>
                    <Text>Съеденно: 250 из 2500 ккал</Text>
                    <Text style={styles.textTopInfo}>Потрачено: 100 из 480 ккал</Text>
                </View>
                <View style={styles.textTopInfo}>
                    <Text>Белки: 30 из 180 грамм</Text>
                    <Text>Жиры: 10 из 65 грамм</Text>
                </View>
                <View style={styles.textTopInfo}>
                    <Text>Углеводы: 150 из 280 грамм</Text>
                    <Text>Вода: 1060 из 3069 мл</Text>
                </View>
            </View>
        );
    }
}