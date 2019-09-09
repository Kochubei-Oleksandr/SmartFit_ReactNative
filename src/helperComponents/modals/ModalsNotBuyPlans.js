import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Lang, TablesInModalHeader} from "../../index";

export class ModalsNotBuyPlans extends Component {
    componentDidMount() {
        console.log(this.props.data);
    }
    render() {
        return (
            <ScrollView>
                <TablesInModalHeader
                    modalsNotBuyPlans={true}
                    data={this.props.data}
                    costPlan={this.props.costPlan}
                    firstColProperty={this.props.firstColProperty}
                    firstColName={Lang.foodName}
                    secondColName={Lang.day}
                    thirdColName={Lang.time}
                />
            </ScrollView>
        );
    }
}