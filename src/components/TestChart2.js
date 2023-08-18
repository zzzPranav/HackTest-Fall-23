import React from 'react';
import {StyleSheet, Text} from 'react-native';
import * as V from 'victory';
import {Card} from "react-native-elements";

export default class TestChart2 extends React.Component {

    visualizationData = [
        {x: "Cats", y: 35},
        {x: "Dogs", y: 40},
        {x: "Birds", y: 55}
    ]

    render() {
        return (
            <>
                <Card>
                    <Text>Test2</Text>
                    <V.VictoryPie
                        data={this.visualizationData}
                    />
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