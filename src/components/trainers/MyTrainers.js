import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Lang, BasicTextInputUI, Card, CLIENT_API, STATE_KEY, actionApp, changeStore} from "../../index";

class MyTrainers extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
        isLoggedIn: false
    };
    searchByNickname = (nickname) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                search: nickname
            },
            'get',
            CLIENT_API + '/trainer-users',
            STATE_KEY.trainerUsersStack
        )
            .then(success => {
                if (success === true) {
                    this.setState({isLoggedIn: false});
                }
            })
    };
    componentDidMount() {
        this.searchByNickname();
    }
    render() {
        return (
            <ScrollView>
                <BasicTextInputUI
                    fieldName={'nickname'}
                    placeholder={Lang.searchNickName}
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    formErrors={this.props.formErrors}
                    changeInput={(nickname) => this.searchByNickname(nickname)}
                />

                {this.props.trainerUsersStack.map((data, i) => {
                    return (
                        <Card key={i} data={data} />
                    );
                })}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    trainerUsersStack: state.trainerUsersStack,
});

const MyTrainersConnect = connect(mapStateToProps, {actionApp, changeStore})(MyTrainers);
export default MyTrainersConnect;