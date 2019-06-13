import React, {Component} from 'react'
import { AsyncStorage, View } from 'react-native';
import { connect } from 'react-redux';
import { CLIENT_API, STATE_KEY, actionApp, TextInputUI, Lang, ButtonsUI, SwitchesUI } from '../../index';

export class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        confirm: false,
    };
    register = () => {
        this.props.actionApp (
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                confirm: this.state.confirm,
                mobile: 1
            },
            'post',
            CLIENT_API+'/register',
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
        AsyncStorage.getItem("mob_token11").then((value) => {
            this.props.navigation.navigate(value ? 'App' : 'Register')
        }).done()
    }
    render() {
        return (
            <View>
                <TextInputUI
                    fieldName={'name'}
                    formErrors={this.props.formErrors}
                    placeholder={Lang.name}
                    changeInput={(name) => this.setState({name})}
                />
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
                <TextInputUI
                    fieldName={'password_confirmation'}
                    formErrors={this.props.formErrors}
                    placeholder={Lang.password_confirmation}
                    changeInput={(password_confirmation) => this.setState({password_confirmation})}
                />
                <SwitchesUI
                    fieldName={'confirm'}
                    formErrors={this.props.formErrors}
                    title={Lang.confirmPolicy}
                    value={this.state.confirm}
                    onclick={(confirm) => this.setState({confirm})}
                />
                <ButtonsUI
                    btnName={Lang.submit}
                    onclick={() => this.register()}
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
    personalData: state.personalData,
    formErrors: state.formErrors,
});

const RegisterConnect = connect(mapStateToProps, { actionApp })(Register);

export { RegisterConnect }
