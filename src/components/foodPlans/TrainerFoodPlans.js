import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View} from 'react-native';
import {STATE_KEY, CLIENT_API, actionApp, changeStore, Lang, ActivityIndicatorUI, CardTrainerPlans, Modals} from "../../index";

class TrainerFoodPlans extends Component {
    state = {
        isShowModal: false,
        isLeftBtn: true,
        isRightBtn: false,
        isLoggedIn: false,
        search: null,
        id_sex: null,
        id_goals: null,
        id_trainer: null,
        plansWithDelivery: null,
        sort: null,
        costPlan: null,
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
                if (success === true) {
                    this.setState({isLoggedIn: false});
                }
            })
    };
    actionCard = (dataPlan) => {
        this.showFoodPlanDetails(dataPlan.id, dataPlan.cost);
    };
    openModal = () => {
        this.setState({ isShowModal: true });
    };
    closeModal = () => {
        this.setState({ isShowModal: false });
    };
    showFoodPlanDetails = (id_plan, costPlan) => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                id_plan: id_plan,
            },
            'get',
            CLIENT_API + '/trainer-food-plan',
            STATE_KEY.trainerFoodPlanElements
        )
            .then(success => {
                if (success === true) {
                    this.openModal();
                    this.setState({isLoggedIn: false, costPlan: costPlan});
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
                            actionName={Lang.readMore}
                            costName={Lang.cost}
                            key={i}
                            data={data}
                            actionCard={(dataPlan) => this.actionCard(dataPlan)}
                        />
                    );
                })}
                <Modals
                    modalsNotBuyPlans={true}
                    showModal={this.state.isShowModal}
                    closeModal={this.closeModal}
                    data={this.props.trainerFoodPlanElements}
                    firstColProperty={'name_food'}
                    costPlan={this.state.costPlan}
                    firstColName={Lang.foodName}
                    secondColName={Lang.day}
                    thirdColName={Lang.time}
                />
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    trainerFoodPlanList: state.trainerFoodPlanList,
    trainerFoodPlanElements: state.trainerFoodPlanElements,
});

const TrainerFoodPlansConnect = connect(mapStateToProps, {actionApp, changeStore})(TrainerFoodPlans);
export default TrainerFoodPlansConnect;