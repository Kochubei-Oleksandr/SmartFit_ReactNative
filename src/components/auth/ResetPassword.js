import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, View} from 'react-native';
import {connect} from 'react-redux';
import {CLIENT_API, STATE_KEY, actionApp, changeStore, TextInputUI, EMAIL_IMG, WallpaperUI, Lang, ButtonsUI, W, H} from '../../index';

class ResetPassword extends Component {
    state = {
        email: '',
        isLoggedIn: false,
    };
    resetPassword = () => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                email: this.state.email
            },
            'post',
            CLIENT_API + '/reset-password',
            STATE_KEY.logicSuccess
        )
            .then(success => {
                this.setState({isLoggedIn: false});
                if (success === true) {
                    alert(this.props.logicSuccess.message)
                }
            })
    };
    componentDidMount() {
        this.props.changeStore(STATE_KEY.formErrors, {});
        AsyncStorage.getItem("mob_token").then((value) => {
            this.props.navigation.navigate(value ? 'App' : 'Auth')
        }).done()
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flex: 1,
                marginVertical: 20,
                height: H,
                alignItems: 'center',
                justifyContent: 'center',

            },
            containerSignUp: {
                flex: 1,
                top: 65,
                width: W,
                flexDirection: 'row',
                justifyContent: 'space-around',
            },
            text: {
                color: 'white',
                backgroundColor: 'transparent',
            },
        });

        return (
            <WallpaperUI>
                <View style={styles.container}>
                    <TextInputUI
                        fieldName={'email'}
                        source={EMAIL_IMG}
                        placeholder='Email'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(email) => this.setState({email})}
                    />
                    <ButtonsUI
                        btnName={Lang.submit}
                        onclick={() => this.resetPassword()}
                        isLoggedIn={this.state.isLoggedIn}
                    />
                </View>
            </WallpaperUI>
        );
    }
}

const mapStateToProps = state => ({
    formErrors: state.formErrors,
    logicSuccess: state.logicSuccess,
});

const ResetPasswordConnect = connect(mapStateToProps, {actionApp, changeStore})(ResetPassword);

export {ResetPasswordConnect}
