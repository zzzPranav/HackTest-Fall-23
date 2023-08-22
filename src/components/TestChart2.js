import React from 'react';
import {Text} from 'react-native';
import * as V from 'victory';
import {Card} from "react-native-elements";

export default class TestChart2 extends React.Component {

    visualizationData = [
        {x: "Cats", y: 35},
        {x: "Dogs", y: 40},
        {x: "Birds", y: 55}
    ]

    render() {
        var myTotal = 0;
        this.visualizationData.forEach((element) => myTotal += element.y);

        return (
            <>
                <Card>
                    <Text>Test2</Text>
                    <V.VictoryPie
                        labels={(datapoint) => {
                            return datapoint.datum.x + '\n' + Math.round((datapoint.datum.y / myTotal)*100) + '%'
                        }}
                        data={this.visualizationData}
                    />
                </Card>
            </>
        )
    }
}