import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {W} from '../../index';

const RecipeImageUI = ({source}) => {
    const styles = StyleSheet.create({
        img: {
            marginTop: 10,
            zIndex: 99,
            width: W,
            height: 300,
        },
    });

    return (
        <Image source={source} style={styles.img} />
    )
};

export { RecipeImageUI }
