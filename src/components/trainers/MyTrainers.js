import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Lang, BasicTextInputUI, Card, CLIENT_API, STATE_KEY, actionApp, changeStore, ActivityIndicatorUI} from "../../index";

class MyTrainers extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
        isLoggedIn: false,
        search: null,
    };
    componentDidMount() {
        this.searchByNickname();
    }
    setSearch = (nickname) => {
        this.setState({search: nickname}, () => this.searchByNickname());
    };
    searchByNickname = () => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                search: this.state.search
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
    unsubscribeAction = (idTrainer) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                search: this.state.search,
                id_trainer: idTrainer,
            },
            'post',
            CLIENT_API + '/trainer-users',
            STATE_KEY.trainerUsersStack
        )
            .then(success => {
                if (success === true) {
                    this.setState({isLoggedIn: false});
                }
            })
    };
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
                    changeInput={(nickname) => this.setSearch(nickname)}
                />

                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                {this.props.trainerUsersStack.map((data, i) => {
                    return (
                        <Card
                            actionName={Lang.unsubscribe}
                            actionCard={(idTrainer) => this.unsubscribeAction(idTrainer)}
                            key={i}
                            data={data}
                        />
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