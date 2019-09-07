import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';

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

export { TouchableImageUI }
