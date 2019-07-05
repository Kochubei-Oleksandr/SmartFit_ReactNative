import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Lang, BasicTextInputUI, Card, CLIENT_API, STATE_KEY, actionApp, changeStore} from "../../index";

class AllTrainers extends Component {
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
            CLIENT_API + '/search-trainers',
            STATE_KEY.trainerStack
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

                {this.props.trainerStack.map((data, i) => {
                    return (
                        <Card key={i} data={data} />
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