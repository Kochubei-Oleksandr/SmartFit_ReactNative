import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export class DiaryFood extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>DIARY Food</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // this.props.navigation.navigate('DiaryFood')
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
