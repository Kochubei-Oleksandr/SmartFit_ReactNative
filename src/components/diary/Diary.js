import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {HeaderUI, DiaryActivity, DiaryFood, Lang} from '../../index';


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
            <View style={styles.container}>
                <HeaderUI
                    btnLeftName={'Дневник питания'}
                    btnRightName={'Дневник активности'}
                    onclickLeft={() => this.clickLeftBtn()}
                    onclickRight={() => this.clickRightBtn()}
                    isLeftBtn={this.state.isLeftBtn}
                />
                {this.state.isLeftBtn ? <DiaryFood /> : <DiaryActivity /> }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
