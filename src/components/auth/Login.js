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
        this.props.actionApp (
            {
                email: email,
                password: password,
                mobile: 1
            },
            'post',
            CLIENT_API+'/login',
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
            <View>
                <TextInputUI
                    fieldName={'email'}
                    formErrors={this.props.formErrors}
                    placeholder='Email'
                    changeInput={(email) => this.setState({email})}
                />
                <TextInputUI
                    fieldName={'password'}
                    formErrors={this.props.formErrors}
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
    formErrors: state.formErrors,
});

const LoginConnect = connect(mapStateToProps, { actionApp })(Login);

export { LoginConnect }
