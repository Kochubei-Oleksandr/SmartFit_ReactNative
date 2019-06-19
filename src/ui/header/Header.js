import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtonUI } from '../../index';

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
                        backgroundColor={'#F5FCFF'}
                        textColor={'#000'}
                    />
                    <HeaderButtonUI
                        btnName={btnRightName}
                        onclick={onclickRight}
                        borderBottom={1}
                        borderLeft={1}
                        borderRight={0}
                        backgroundColor={'#0277BD'}
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
                        backgroundColor={'#0277BD'}
                        textColor={'#fff'}
                    />
                    <HeaderButtonUI
                        btnName={btnRightName}
                        onclick={onclickRight}
                        borderBottom={0}
                        borderLeft={0}
                        borderRight={0}
                        backgroundColor={'#F5FCFF'}
                        textColor={'#000'}
                    />
                </View>
            }
        </View>
    )
};

export { HeaderUI }