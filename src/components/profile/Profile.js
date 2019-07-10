import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {H, L_GREY, Lang, W} from "../../index";

export class Profile extends Component {
    state = {
        isLoggedIn: false
    };
    render() {
        const styles = StyleSheet.create({
            container: {
                width: W,
                flex: 1,
                backgroundColor: L_GREY,
                minHeight: H,
                alignItems: 'center',
            }
        });
        return (
            <ScrollView>
                <View style={styles.container}>
                   <View>

                   </View>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>
            </ScrollView>
        );
    }
}