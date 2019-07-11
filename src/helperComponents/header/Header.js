import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Segment, Text } from 'native-base';

const HeaderUI = ({btnLeftName, btnRightName, onclickLeft, onclickRight, isLeftBtn}) => {
    return (
        <Header hasSegment>
            <Left />
            <Body>
                <Segment>
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