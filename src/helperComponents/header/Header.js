import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtonUI, L_GREY, D_BLUE } from '../../index';

const HeaderUI = ({btnLeftName, btnRightName, onclickLeft, onclickRight, isLeftBtn}) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        }
    });

    return (
        <View>
            {isLeftBtn ?
                <View style = {styles.container}>
                    <HeaderButtonUI
                        btnName={btnLeftName}
                        onclick={onclickLeft}
                        borderBottom={0}
                        borderLeft={0}
                        borderRight={0}
                        backgroundColor={L_GREY}
                        textColor={'#000'}
                    />
                    <HeaderButtonUI
                        btnName={btnRightName}
                        onclick={onclickRight}
                        borderBottom={1}
                        borderLeft={1}
                        borderRight={0}
                        backgroundColor={D_BLUE}
                        textColor={'#fff'}
                    />
                </View>
                :
                <View style = {styles.container}>
                    <HeaderButtonUI
                        btnName={btnLeftName}
                        onclick={onclickLeft}
                        borderBottom={1}
                        borderLeft={0}
                        borderRight={1}
                        backgroundColor={D_BLUE}
                        textColor={'#fff'}
                    />
                    <HeaderButtonUI
                        btnName={btnRightName}
                        onclick={onclickRight}
                        borderBottom={0}
                        borderLeft={0}
                        borderRight={0}
                        backgroundColor={L_GREY}
                        textColor={'#000'}
                    />
                </View>
            }
        </View>
    )
};

export { HeaderUI }