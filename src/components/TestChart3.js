import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as V from 'victory';
import {Card} from "react-native-elements";

export default class TestChart3 extends React.Component {

    visualizationData = [
        { x: 0 },
        { x: 1 },
        { x: 1 },
        { x: 2 },
        { x: 3 },
        { x: 4 },
        { x: 4 }
    ]

    render() {
        return (
            <>
                <Card>
                    <Text>Test3</Text>
                    <V.VictoryChart domainPadding={20}>
                        <V.VictoryHistogram data={this.visualizationData} />
                    </V.VictoryChart>
                </Card>
            </>
        )
    }
}

const chart1Styles = StyleSheet.create({
    base: {
        maxHeight: "50vh"
    }
})