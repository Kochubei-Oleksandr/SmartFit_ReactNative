import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {
    CLIENT_API,
    STATE_KEY,
    ActivityIndicatorUI,
    actionApp,
    changeStore,
    BasicTextInputUI,
    Lang,
    D_GREY, W, RecipeImageUI
} from "../../index";

export class Modals extends Component {
    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.props.showModal}
                >
                    <TouchableHighlight onPress={this.props.closeModal}>
                        <Text style={{textAlign: 'right'}}>{Lang.close}</Text>
                    </TouchableHighlight>
                    <View>
                        <View>
                            <ModalsFoodDiaryConnect data={this.props.data} />
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

class ModalsFoodDiary extends Component {
    state = {
        isLoggedIn: false,
        weight: null,
        time: null,
        photo: null,
        description: null,
    };
    componentDidMount() {
        this.setState({isLoggedIn: true});
        if (this.props.data) {
            this.props.actionApp(
                {
                    id_food: this.props.data.id_food,
                    weight: this.props.data.weight,
                },
                'get',
                CLIENT_API + '/basic-recipe-info',
                STATE_KEY.basicRecipeInfo
            )
                .then(success => {
                    if (success === true) {
                        this.setState({isLoggedIn: false});
                        this.setState({photo: this.props.basicRecipeInfo[0].photo});
                        this.setState({description: this.props.basicRecipeInfo[0].description});
                    }
                })
        }
    };
    changeDiaryFood = () => {
        console.log(this.state.time, this.state.weight);
    };
    changeTime = (time) => {
        this.setState({time: time});
        this.changeDiaryFood();
    };
    changeWeight = (weight) => {
        this.setState({weight: weight});
        this.changeDiaryFood();
    };

    render() {
        const styles = StyleSheet.create({
            title: {
                textAlign: 'center',
                fontSize: 18,
                marginBottom: 10,
                color: '#000'
            },
            containerInfoTop: {
                padding: 5,
                flexDirection:'row',
                flexWrap:'wrap',
                backgroundColor: D_GREY,
            },
            textTopInfo: {
                padding: 3,
            },
        });
        return (
            <View>
                {this.state.isLoggedIn ? <ActivityIndicatorUI /> : null}

                <Text style={styles.title}>{this.props.data.name_food}</Text>

                <View style={styles.containerInfoTop}>
                    <View style={styles.textTopInfo}>
                        <Text>Дата: {this.props.data.date}</Text>
                        <Text>Ккал: {this.props.data.kkal_summ}</Text>
                    </View>
                    <View style={styles.textTopInfo}>
                        <Text>Белки: {this.props.data.protein_summ}</Text>
                        <Text>Жиры: {this.props.data.fat_summ}</Text>
                    </View>
                    <View style={styles.textTopInfo}>
                        <Text>Углеводы: {this.props.data.carbohydrates_summ}</Text>
                        <Text>Вода: {this.props.data.water_summ}</Text>
                    </View>
                </View>

                <BasicTextInputUI
                    fieldName={'time'}
                    placeholder={Lang.time}
                    defaultValue={this.props.data.time}
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    formErrors={this.props.formErrors}
                    changeInput={(time) => this.changeTime(time)}
                />
                <BasicTextInputUI
                    fieldName={'weight'}
                    placeholder={Lang.weightPortion}
                    defaultValue={this.props.data.weight}
                    returnKeyType={'done'}
                    autoCapitalize={'none'}
                    autoCorrect={false}
                    keyboardType={'numeric'}
                    formErrors={this.props.formErrors}
                    changeInput={(weight) => this.changeWeight(weight)}
                />

                {this.state.photo ? <RecipeImageUI source={{uri: this.state.photo}} /> : null}
                {this.state.description ? <Text style={styles.title}>{this.state.description}</Text> : null}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    basicRecipeInfo: state.basicRecipeInfo,
    formErrors: state.formErrors,
});

const ModalsFoodDiaryConnect = connect(mapStateToProps, {actionApp, changeStore})(ModalsFoodDiary);

export {ModalsFoodDiaryConnect}