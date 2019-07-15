import React from 'react';
import { StyleSheet, View } from 'react-native';
import {D_BLUE} from "../../index";
import { Header, Left, Body, Right, Button, Segment, Text } from 'native-base';

const HeaderUI = ({btnLeftName, btnRightName, onclickLeft, onclickRight, isLeftBtn}) => {
    return (
        <Header hasSegment style={{ backgroundColor: D_BLUE }}>
            <Left />
            <Body>
                <Segment style={{ backgroundColor: D_BLUE }}>
                    <Button onPress={onclickLeft} first active={isLeftBtn}>
                        <Text>{btnLeftName}</Text>
                    </Button>
                    <Button onPress={onclickRight} last active={!isLeftBtn}>
                        <Text>{btnRightName}</Text>
                    </Button>
                </Segment>
            </Body>
            <Right />
        </Header>
    )
};

export { HeaderUI }