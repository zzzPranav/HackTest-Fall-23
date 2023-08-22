import React from 'react';
import {Text} from 'react-native';
import * as V from 'victory';
import {Card} from "react-native-elements";

export default class TestChart5 extends React.Component {

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
                    <Text>Test5</Text>
                    <V.VictoryPie
                        data={this.visualizationData}
                        labelRadius={({ innerRadius }) => innerRadius + 5 }
                        radius={({ datum }) => 50 + datum.y * 20}
                        innerRadius={50}
                        colorScale={"qualitative"}
                        style={{ labels: { fill: "white", fontSize: 15, fontWeight: "bold" } }}
                    />
                </Card>
            </>
        )
    }
}