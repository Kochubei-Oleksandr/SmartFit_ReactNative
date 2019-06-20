import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

const ImageUI = ({source}) => {
    const styles = StyleSheet.create({
        inlineImg: {
            position: 'absolute',
            zIndex: 99,
            width: 30,
            height: 30,
        },
    });

    return (
        <Image source={source} style={styles.inlineImg} />
    )
};

const TouchableImageUI = ({source, onclick}) => {
    const styles = StyleSheet.create({
        inlineImg: {
            position: 'absolute',
            zIndex: 99,
            width: 30,
            height: 30,
        },
        touchable: {
            width: 30,
            height: 30
        },
    });

    return (
        <TouchableOpacity
            onPress = {onclick}
            style={styles.touchable}
        >
            <Image source={source} style={styles.inlineImg} />
        </TouchableOpacity>
    )
};

export { ImageUI, TouchableImageUI }


