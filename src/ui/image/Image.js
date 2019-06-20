import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {W} from '../../index';

const ImageUI = ({source}) => {
    const styles = StyleSheet.create({
        inlineImg: {
            position: 'absolute',
            zIndex: 99,
            width: 30,
            height: 30,
            // left: 25,
            // top: 17,
        },
    });

    return (
        <Image source={source} style={styles.inlineImg} />
    )
};

export { ImageUI }


