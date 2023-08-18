import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as V from 'victory';
import {Card} from "react-native-elements";

export default class TestChart4 extends React.Component {

    visualizationData = [
        { x: 1, y: 2 , label: "Point 1"},
        { x: 2, y: 3 , label: "Point 2"},
        { x: 3, y: 5 , label: "Point 3"},
        { x: 4, y: 4 , label: "Point 4"},
        { x: 5, y: 7 , label: "Point 5"}
    ]

    render() {
        return (
            <>
                <Card>
                    <Text>Test3</Text>
                    <V.VictoryChart domainPadding={20}>
                        <V.VictoryLine data={this.visualizationData}  interpolation={'linear'} />
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