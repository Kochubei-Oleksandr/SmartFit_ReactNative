import React from 'react';
import {D_BLUE} from "../../index";
import { Header, Left, Body, Right, Button, Segment, Text } from 'native-base';

const HeaderUI = ({btnLeftName, btnCenterName, btnRightName, onclickLeft, onclickCenter, onclickRight, isLeftBtn, isCenterBtn, isRightBtn}) => {
    return (
        <Header hasSegment style={{ backgroundColor: D_BLUE }}>
            <Left />
            <Body>
                <Segment style={{ backgroundColor: D_BLUE }}>
                    <Button onPress={onclickLeft} first active={isLeftBtn}>
                        <Text>{btnLeftName}</Text>
                    </Button>
                    {btnCenterName ?
                        <Button onPress={onclickCenter} active={isCenterBtn}>
                            <Text>{btnCenterName}</Text>
                        </Button>
                        :
                        null
                    }
                    <Button onPress={onclickRight} last active={isRightBtn}>
                        <Text>{btnRightName}</Text>
                    </Button>
                </Segment>
            </Body>
            <Right />
        </Header>
    )
};

export { HeaderUI }