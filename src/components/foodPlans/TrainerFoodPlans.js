import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView} from 'react-native';
import {STATE_KEY, CLIENT_API, actionApp, changeStore, Lang, ActivityIndicatorUI, CardTrainerPlans} from "../../index";

class TrainerFoodPlans extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
        isLoggedIn: false,
        search: null,
        id_sex: null,
        id_goals: null,
        id_trainer: null,
        plansWithDelivery: null,
        sort: null,
    };
    componentDidMount() {
        this.showTrainerFoodPlans();
    }
    showTrainerFoodPlans = (idTrainer) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                search: this.state.search,
                id_sex: this.state.id_sex,
                id_goals: this.state.id_goals,
                sort: this.state.sort,
                // id_trainer: idTrainer,
                plans_with_delivery: this.state.plansWithDelivery,
            },
            'get',
            CLIENT_API + '/trainer-food-plan-list',
            STATE_KEY.trainerFoodPlanList
        )
            .then(success => {
                console.log(this.props.trainerFoodPlanList);
                if (success === true) {
                    this.setState({isLoggedIn: false});
                }
            })
    };
    render() {
        return (
            <ScrollView>
                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                {this.props.trainerFoodPlanList.map((data, i) => {
                    return (
                        <CardTrainerPlans
                            actionName={Lang.unsubscribe}
                            actionCard={(idTrainer) => this.showTrainerFoodPlans(idTrainer)}
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
    trainerFoodPlanList: state.trainerFoodPlanList,
});

const TrainerFoodPlansConnect = connect(mapStateToProps, {actionApp, changeStore})(TrainerFoodPlans);
export default TrainerFoodPlansConnect;