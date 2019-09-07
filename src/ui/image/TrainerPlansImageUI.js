import React from 'react';
import { StyleSheet, Image } from 'react-native';
import {W} from '../../index';

const TrainerPlansImageUI = ({source}) => {
    const styles = StyleSheet.create({
        img: {
            zIndex: 99,
            width: W - 20,
            height: 250,
        },
    });

    return (
        <Image source={{uri: source}} style={styles.img} />
    )
};

export { TrainerPlansImageUI }
