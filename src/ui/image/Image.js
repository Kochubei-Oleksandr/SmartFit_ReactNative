import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import {W} from '../../index';

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

export { ImageUI, TouchableImageUI, RecipeImageUI, TrainerAvatarImageUI, TrainerPlansImageUI }


