import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {HeaderUI, DiaryActivity, DiaryFoodConnect, Lang} from '../../index';


export class Diary extends Component {
    state = {
        isLeftBtn: true,
        isRightBtn: false,
    };
    clickLeftBtn() {
        this.setState({isLeftBtn: true});
        this.setState({isRightBtn: false});
    }
    clickRightBtn() {
        this.setState({isLeftBtn: false});
        this.setState({isRightBtn: true});
    }
    render() {
        return (
            <ScrollView>
                <HeaderUI
                    btnLeftName={Lang.diary_food}
                    btnRightName={Lang.diary_activity}
                    onclickLeft={() => this.clickLeftBtn()}
                    onclickRight={() => this.clickRightBtn()}
                    isLeftBtn={this.state.isLeftBtn}
                />
                { this.state.isLeftBtn ? <DiaryFoodConnect /> : <DiaryActivity /> }
            </ScrollView>
        );
    }
}
