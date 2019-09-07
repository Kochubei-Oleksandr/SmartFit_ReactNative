import React from 'react';
import { StyleSheet, Image } from 'react-native';

const TrainerAvatarImageUI = ({source}) => {
    const styles = StyleSheet.create({
        img: {
            zIndex: 99,
            width: 100,
            height: 100,
        },
    });

    return (
        <Image source={{uri: source}} style={styles.img} />
    )
};

export { TrainerAvatarImageUI }
