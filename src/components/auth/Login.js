import React, {Component} from 'react';
import { AsyncStorage, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { CLIENT_API, STATE_KEY, actionApp, TextInputUI, Lang, ButtonsUI } from '../../index';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };
    login = (email, password) => {
        this.props.actionApp
        (
            {
                email: email,
                password: password,
            },
            'post',
            CLIENT_API+'/login',
            STATE_KEY.personalData
        )
    };
    componentDidMount() {
        AsyncStorage.getItem("mob_token11").then((value) => {
            this.props.navigation.navigate(value ? 'App' : 'Auth')
        }).done()
    }
    render() {
        return (
            <View>
                <TextInputUI
                    fieldName={'email'}
                    error={this.props.errors}
                    placeholder='Email'
                    changeInput={(email) => this.setState({email})}
                />
                <TextInputUI
                    fieldName={'password'}
                    error={this.props.errors}
                    placeholder={Lang.password}
                    changeInput={(password) => this.setState({password})}
                />
                <ButtonsUI
                    btnName={Lang.submit}
                    onclick={() => this.login(this.state.email, this.state.password)}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    personalData: state.personalData,
    errors: state.errors,
});

const LoginConnect = connect(mapStateToProps, { actionApp })(Login);

export { LoginConnect }
