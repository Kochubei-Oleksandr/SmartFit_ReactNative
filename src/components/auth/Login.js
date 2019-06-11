import React, {Component} from 'react'
import {AsyncStorage, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import { Lang, CLIENT_API, LOGIN, actionApp } from '../../index'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        this.props.actionApp
        (
            {
                email: email,
                password: pass,
            },
            'post',
            CLIENT_API+'/login',
            LOGIN
        )
    }
    componentDidMount() {
        AsyncStorage.getItem("mob_token11").then((value) => {
            this.props.navigation.navigate(value ? 'App' : 'Auth')
        }).done()
    }

    render() {
        const {container, input, submitButton, submitButtonText} = styles
        return (
            <View style = {container}>
                <TextInput style = {input}
                           underlineColorAndroid = "transparent"
                           placeholder = "Email"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleEmail}/>

                <TextInput style = {input}
                           underlineColorAndroid = "transparent"
                           placeholder = {Lang.password}
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handlePassword}/>

                <TouchableOpacity
                    style = {submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style = {submitButtonText}> {Lang.submit} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})

const LoginConnect = connect(null, { actionApp })(Login)

export { LoginConnect }
