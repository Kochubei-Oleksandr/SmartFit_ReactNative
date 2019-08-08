import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {CLIENT_API, STATE_KEY, ActivityIndicatorUI, actionApp, changeStore,
    BasicTextInputUI, Lang, CHANGE_REPETITIONS} from "../../index";

class ModalsActivityDiary extends Component {
    state = {
        isLoggedIn: false,
        number_approaches: null,
        time_one_exercise: null,
        number_of_repetitions: null,
        rest_next_to_approach: null,
        repetitions: [],
        time: null,
        id: null
    };
    componentDidMount() {
        if (this.props.selectedItem !== null && this.props.selectedItem !== undefined) {
            this.setState({
                time: this.props.userCompletedActivity[this.props.selectedItem].time,
                number_approaches: this.props.userCompletedActivity[this.props.selectedItem].number_approaches,
                time_one_exercise: this.props.userCompletedActivity[this.props.selectedItem].time_one_exercise,
                number_of_repetitions: this.props.userCompletedActivity[this.props.selectedItem].number_of_repetitions,
                rest_next_to_approach: this.props.userCompletedActivity[this.props.selectedItem].rest_next_to_approach,
                repetitions: this.props.userCompletedActivity[this.props.selectedItem].repetitions,
                id: this.props.userCompletedActivity[this.props.selectedItem].id
            });
        }
    };
    changeDiaryActivity = () => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                time: this.state.time,
                id_exercise: this.props.userCompletedActivity[this.props.selectedItem].id_exercise,
                date: this.props.userCompletedActivity[this.props.selectedItem].date,
                number_approaches: this.state.number_approaches,
                time_one_exercise: this.state.time_one_exercise,
                number_of_repetitions: this.state.number_of_repetitions,
                rest_next_to_approach: this.state.rest_next_to_approach,
                repetitions: this.state.repetitions,
                id: this.state.id
            },
            'put',
            CLIENT_API + '/user-activity',
            STATE_KEY.userCompletedActivity
        )
            .then(success => {
                this.setState({isLoggedIn: false});
            })
    };
    changeTime = (time) => {
        this.setState({time: time}, () => this.changeDiaryActivity());
    };
    changeTimeOneExercise = (time_one_exercise) => {
        this.setState({time_one_exercise: time_one_exercise}, () => this.changeDiaryActivity());
    };
    changeRestNextToApproach = (rest_next_to_approach) => {
        this.setState({rest_next_to_approach: rest_next_to_approach}, () => this.changeDiaryActivity());
    };
    changeNumberApproaches = (number_approaches) => {
        this.setState({
            number_approaches: number_approaches,
            repetitions: CHANGE_REPETITIONS(this.state.id, this.state.repetitions, number_approaches)
        }, () => this.changeDiaryActivity());
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap:'wrap',
                justifyContent: 'center',
                marginLeft: 20,
                marginRight: 20,
            },
            title: {
                textAlign: 'center',
                fontSize: 18,
                margin: 5,
                color: '#000'
            },
            containerInfoTop: {
                padding: 5,
                flexDirection:'row',
                flexWrap:'wrap',
                justifyContent: 'center',
            },
            textTopInfo: {
                padding: 5,
                color: '#fff',
                backgroundColor: 'rgba(66, 135, 245, 0.5)',
                margin: 3,
                borderRadius: 10,
                justifyContent: 'center',
            },
        });
        return (
            <ScrollView>
                <Text style={styles.title}>{this.props.userCompletedActivity[this.props.selectedItem].name_exercise}</Text>
                <View style={styles.containerInfoTop}>
                    <View style={styles.textTopInfo}>
                        <Text>{Lang.date}: {this.props.userCompletedActivity[this.props.selectedItem].date}</Text>
                        <Text>{Lang.kcal}: {this.props.userCompletedActivity[this.props.selectedItem].kkal_lost}</Text>
                    </View>
                    <View style={styles.textTopInfo}>
                        <Text>{Lang.numberOfRepetitions}: {this.props.userCompletedActivity[this.props.selectedItem].number_of_repetitions}</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <BasicTextInputUI
                        widthPart={2}
                        fieldName={'time_one_exercise'}
                        placeholder={Lang.timeOneExercise}
                        defaultValue={this.props.userCompletedActivity[this.props.selectedItem].time_one_exercise}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(time_one_exercise) => this.changeTimeOneExercise(time_one_exercise)}
                    />
                    <BasicTextInputUI
                        widthPart={2}
                        fieldName={'rest_next_to_approach'}
                        placeholder={Lang.restNextToApproach}
                        defaultValue={this.props.userCompletedActivity[this.props.selectedItem].rest_next_to_approach}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(rest_next_to_approach) => this.changeRestNextToApproach(rest_next_to_approach)}
                    />
                    <BasicTextInputUI
                        widthPart={2}
                        fieldName={'number_approaches'}
                        placeholder={Lang.numberApproaches}
                        defaultValue={this.props.userCompletedActivity[this.props.selectedItem].number_approaches}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(number_approaches) => this.changeNumberApproaches(number_approaches)}
                    />
                    <BasicTextInputUI
                        widthPart={2}
                        fieldName={'time'}
                        placeholder={Lang.time}
                        defaultValue={this.props.userCompletedActivity[this.props.selectedItem].time}
                        returnKeyType={'done'}
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        formErrors={this.props.formErrors}
                        changeInput={(time) => this.changeTime(time)}
                    />
                </View>

                {this.state.repetitions.map((data, i) => {
                    return (
                        <View style={styles.container} key={i}>
                            <BasicTextInputUI
                                widthPart={2}
                                fieldName={'number_of_repetitions'}
                                placeholder={Lang.numberOfRepetitions}
                                defaultValue={data.number_of_repetitions}
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                formErrors={this.props.formErrors}
                                changeInput={(number_of_repetitions) => { data.number_of_repetitions = number_of_repetitions; this.changeDiaryActivity()} }
                            />
                            <BasicTextInputUI
                                widthPart={2}
                                fieldName={'weight'}
                                placeholder={Lang.burdenWeight}
                                defaultValue={data.weight}
                                returnKeyType={'done'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                formErrors={this.props.formErrors}
                                changeInput={(weight) => { data.weight = weight; this.changeDiaryActivity()} }
                            />
                        </View>
                    );
                })}

                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    userCompletedActivity: state.userCompletedActivity,
    formErrors: state.formErrors,
});

export const ModalsActivityDiaryConnect = connect(mapStateToProps, {actionApp, changeStore})(ModalsActivityDiary);