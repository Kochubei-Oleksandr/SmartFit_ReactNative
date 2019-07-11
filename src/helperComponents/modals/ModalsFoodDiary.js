import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {connect} from 'react-redux';
import { CLIENT_API, STATE_KEY, ActivityIndicatorUI, actionApp, changeStore,
    BasicTextInputUI, Lang, D_GREY, RecipeImageUI } from "../../index";

class ModalsFoodDiary extends Component {
    state = {
        isLoggedIn: false,
        weight: null,
        time: null,
        photo: null,
        description: null,
    };
    componentDidMount() {
        if (this.props.selectedItem !== null && this.props.selectedItem !== undefined) {
            this.setState({
                isLoggedIn: true,
                weight: this.props.userEatenFood[this.props.selectedItem].weight,
                time: this.props.userEatenFood[this.props.selectedItem].time,
            });
            this.props.actionApp(
                {
                    id_food: this.props.userEatenFood[this.props.selectedItem].id_food,
                    weight: this.props.userEatenFood[this.props.selectedItem].weight,
                },
                'get',
                CLIENT_API + '/basic-recipe-info',
                STATE_KEY.basicRecipeInfo
            )
                .then(success => {
                    if (success === true) {
                        this.setState({ isLoggedIn: false });
                        this.setState({
                            photo: this.props.basicRecipeInfo[0].photo,
                            description: this.props.basicRecipeInfo[0].description
                        });
                    }
                })
        }
    };
    changeDiaryFood = () => {
        this.setState({isLoggedIn: true});
        this.props.actionApp(
            {
                id_food: this.props.userEatenFood[this.props.selectedItem].id_food,
                date: this.props.userEatenFood[this.props.selectedItem].date,
                time: this.state.time,
                weight: this.state.weight,
                id: this.props.userEatenFood[this.props.selectedItem].id
            },
            'put',
            CLIENT_API + '/user-food',
            STATE_KEY.userEatenFood
        )
            .then(success => {
                if (success === true) {
                    this.setState({isLoggedIn: false});
                }
            })
    };
    changeTime = (time) => {
        this.setState({time: time}, () => this.changeDiaryFood());
    };
    changeWeight = (weight) => {
        this.setState({weight: weight}, () => this.changeDiaryFood());
    };

    render() {
        const styles = StyleSheet.create({
            container: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
               
            },

            title: {
                textAlign: 'center',
                fontSize: 18,
                marginTop: 10,
                marginBottom: 20,
                color: '#000'
            },
            containerInfoTop: {
                padding: 5,
                flexDirection:'row',
                flexWrap:'wrap',

            },
            textTopInfo: {
                padding: 5,
                color: '#fff',
                backgroundColor: 'rgba(66, 135, 245, 0.5)',
                margin: 3,
                borderRadius: 10
            },
        });
        return (
            <ScrollView>
                <Text style={styles.title}>{this.props.userEatenFood[this.props.selectedItem].name_food}</Text>
                <View style={styles.containerInfoTop}>
                    <View style={styles.textTopInfo}>
                        <Text>{Lang.date}: {this.props.userEatenFood[this.props.selectedItem].date}</Text>
                        <Text>{Lang.kcal}: {this.props.userEatenFood[this.props.selectedItem].kkal_summ}</Text>
                    </View>
                    <View style={styles.textTopInfo}>
                        <Text>{Lang.protein}: {this.props.userEatenFood[this.props.selectedItem].protein_summ}</Text>
                        <Text>{Lang.fat}: {this.props.userEatenFood[this.props.selectedItem].fat_summ}</Text>
                    </View>
                    <View style={styles.textTopInfo}>
                        <Text>{Lang.carbohydrates}: {this.props.userEatenFood[this.props.selectedItem].carbohydrates_summ}</Text>
                        <Text>{Lang.water}: {this.props.userEatenFood[this.props.selectedItem].water_summ}</Text>
                    </View>
                </View>

<View style={styles.container}>
                <BasicTextInputUI
                    fieldName={'time'}
                    placeholder={Lang.time}
                    defaultValue={this.props.userEatenFood[this.props.selectedItem].time}
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    formErrors={this.props.formErrors}
                    changeInput={(time) => this.changeTime(time)}
                />
                <BasicTextInputUI
                    fieldName={'weight'}
                    placeholder={Lang.weightPortion}
                    defaultValue={this.props.userEatenFood[this.props.selectedItem].weight}
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'numeric'}
                    formErrors={this.props.formErrors}
                    changeInput={(weight) => this.changeWeight(weight)}
                />
</View>


                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                {this.state.photo ? <RecipeImageUI source={{uri: this.state.photo}} /> : null}
                {this.state.description ? <Text style={styles.title}>{this.state.description}</Text> : null}
            </ScrollView>
        );
    }
}

const mapStateToProps = state => ({
    basicRecipeInfo: state.basicRecipeInfo,
    userEatenFood: state.userEatenFood,
    formErrors: state.formErrors,
});

const ModalsFoodDiaryConnect = connect(mapStateToProps, {actionApp, changeStore})(ModalsFoodDiary);

export {ModalsFoodDiaryConnect}