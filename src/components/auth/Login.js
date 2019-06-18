import React, {Component} from 'react';
import {StyleSheet, AsyncStorage, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {CLIENT_API, STATE_KEY, actionApp, TextInputUI, Lang, ButtonsUI} from '../../index';
import Dimensions from 'Dimensions';
import Wallpaper from '../../ui/wallpaper/Wallpaper'
import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';
import SignupSection from './SignupSection/SignupSection'

class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    login = () => {
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
                if (success === true) {
                    AsyncStorage.setItem('mob_token', this.props.personalData.mob_token);
                    AsyncStorage.setItem('name', this.props.personalData.name);
                    this.props.navigation.navigate('App');
                }
            })
    };

    componentDidMount() {
        AsyncStorage.getItem("mob_token").then((value) => {
            this.props.navigation.navigate(value ? 'App' : 'Auth')
        }).done()
    }

    render() {
        return (

            <Wallpaper>
                <View style={styles.container}>

                    <TextInputUI
                        source={usernameImg}
                        placeholder='Email'
                        autoCapitalize={'none'}
                        returnKeyType={'done'}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(email) => this.setState({email})}
                    />
                    <TextInputUI
                        source={passwordImg}
                        placeholder={Lang.password}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(password) => this.setState({password})}
                    />

                    <ButtonsUI
                        btnName={Lang.submit}
                        onclick={() => this.login()}
                    />
                    <View style={styles.containerSignUp}>
                        <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.text}>Create
                            Account</Text>
                        <Text style={styles.text}>Forgot Password?</Text>
                    </View>
                </View>
            </Wallpaper>

        );
    }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
        height: DEVICE_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerSignUp: {
        flex: 1,
        top: 65,
        width: DEVICE_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        color: 'white',
        backgroundColor: 'transparent',
    },
});
const mapStateToProps = state => ({
    personalData: state.personalData,
    formErrors: state.formErrors,
});

const LoginConnect = connect(mapStateToProps, {actionApp})(Login);

export {LoginConnect}
