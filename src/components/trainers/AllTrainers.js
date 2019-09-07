import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Lang, BasicTextInputUI, CardTrainers, CLIENT_API, STATE_KEY, actionApp, changeStore, ActivityIndicatorUI} from "../../index";

class AllTrainers extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
        isLoggedIn: false,
        search: null,
    };
    componentDidMount() {
        this.searchByNickname();
    };
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
            CLIENT_API + '/search-trainers',
            STATE_KEY.trainerStack
        )
            .then(success => {
                if (success === true) {
                    this.setState({isLoggedIn: false});
                }
            })
    };
    subscribeAction = (idTrainer) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                search: this.state.search,
                id_trainer: idTrainer,
            },
            'post',
            CLIENT_API + '/search-trainers',
            STATE_KEY.trainerStack
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
                    widthPart={1}
                    fieldName={'nickname'}
                    placeholder={Lang.searchNickName}
                    defaultValue={this.state.search}
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    formErrors={this.props.formErrors}
                    changeInput={(nickname) => this.setSearch(nickname)}
                />

                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                {this.props.trainerStack.map((data, i) => {
                    return (
                        <CardTrainers
                            actionName={Lang.subscribe}
                            actionCard={(idTrainer) => this.subscribeAction(idTrainer)}
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
    trainerStack: state.trainerStack,
});

const AllTrainersConnect = connect(mapStateToProps, {actionApp, changeStore})(AllTrainers);
export default AllTrainersConnect;