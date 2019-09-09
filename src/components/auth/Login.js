import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {CLIENT_API, STATE_KEY, actionApp, changeStore, TextInputUI, PW_IMG, EMAIL_IMG,
    WallpaperUI, Lang, ButtonsUI, W, H} from '../../index';

class Login extends Component {
    state = {
        email: '',
        password: '',
        isLoggedIn: false,
    };
    login = () => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                email: this.state.email,
                password: this.state.password,
                mobile: 1
            },
            'post',
            CLIENT_API + '/login',
            STATE_KEY.personalData
        )
            .then(success => {
                this.setState({isLoggedIn: false});
                if (success === true) {
                    AsyncStorage.setItem('mob_token', this.props.personalData.mob_token);
                    AsyncStorage.setItem('name', this.props.personalData.name);
                    this.props.navigation.navigate('App');
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
                    <TextInputUI
                        fieldName={'password'}
                        source={PW_IMG}
                        placeholder={Lang.password}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        secureTextEntry={true}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(password) => this.setState({password})}
                    />
                    <ButtonsUI
                        minusWidth={40}
                        btnName={Lang.submit}
                        onclick={() => this.login()}
                        isLoggedIn={this.state.isLoggedIn}
                    />
                    <View style={styles.containerSignUp}>
                        <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.text}>Create
                            Account</Text>
                        <Text onPress={() => this.props.navigation.navigate('ResetPassword')} style={styles.text}>Forgot Password?</Text>
                    </View>
                </View>
            </WallpaperUI>
        );
    }
}

const mapStateToProps = state => ({
    personalData: state.personalData,
    formErrors: state.formErrors,
});

const LoginConnect = connect(mapStateToProps, {actionApp, changeStore})(Login);

export {LoginConnect}
