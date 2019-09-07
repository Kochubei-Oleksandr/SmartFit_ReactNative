import React from 'react';
import { StyleSheet, Image } from 'react-native';

const ImageUI = ({ source, h, w }) => {
    const styles = StyleSheet.create({
        inlineImg: {
            zIndex: 99,
            width: w,
            height: h,
        },
    });

    return (
        <Image source={source} style={styles.inlineImg} />
    )
};

export { ImageUI }


