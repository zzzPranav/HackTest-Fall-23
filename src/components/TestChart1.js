import React from 'react';
import {Text} from 'react-native';
import * as V from 'victory';
import {Card} from "react-native-elements";

export default class TestChart1 extends React.Component {

    visualizationData = [
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
    ]

    render() {
        return (
            <>
                <Card>
                    <Text>Test1</Text>
                    <V.VictoryChart domainPadding={20}>
                        <V.VictoryBar data={this.visualizationData} x={'quarter'} y={'earnings'}/>
                    </V.VictoryChart>
                </Card>
            </>
        )
    }
}