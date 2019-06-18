import React, {Component} from 'react'
import {AsyncStorage, View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {CLIENT_API, STATE_KEY, actionApp, changeStore, TextInputUI, USER_IMG, PW_IMG, EMAIL_IMG,
    Lang, ButtonsUI, SwitchesUI, WallpaperUI} from '../../index';

export class Register extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        confirm: false,
    };
    register = () => {
        this.props.actionApp(
            {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation,
                confirm: this.state.confirm,
                mobile: 1
            },
            'post',
            CLIENT_API + '/register',
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
        this.props.changeStore(STATE_KEY.formErrors, {});
        AsyncStorage.getItem("mob_token").then((value) => {
            this.props.navigation.navigate(value ? 'App' : 'Register')
        }).done()
    }

    render() {
        return (

            <WallpaperUI>
                <ScrollView >

                    <View style={styles.container}>
                        <TextInputUI
                            fieldName={'name'}
                            source={USER_IMG}
                            placeholder={Lang.name}
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            autoCorrect={false}
                            formErrors={this.props.formErrors}
                            changeInput={(name) => this.setState({name})}
                        />
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
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            secureTextEntry={true}
                            autoCorrect={false}
                            formErrors={this.props.formErrors}
                            changeInput={(password) => this.setState({password})}
                        />
                        <TextInputUI
                            fieldName={'password_confirmation'}
                            source={PW_IMG}
                            placeholder={Lang.password_confirmation}
                            autoCapitalize={'none'}
                            returnKeyType={'done'}
                            secureTextEntry={true}
                            autoCorrect={false}
                            formErrors={this.props.formErrors}
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
                </ScrollView>
            </WallpaperUI>
        );
    }
}

const mapStateToProps = state => ({
    personalData: state.personalData,
    formErrors: state.formErrors,
});


const styles = StyleSheet.create({
    container: {
        marginVertical: 40
    },
});
const RegisterConnect = connect(mapStateToProps, {actionApp, changeStore})(Register);

export {RegisterConnect}
