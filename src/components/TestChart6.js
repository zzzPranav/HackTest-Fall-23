import React from 'react';
import {Text} from 'react-native';
import * as V from 'victory';
import {Card} from "react-native-elements";

export default class TestChart6 extends React.Component {
    render() {
        return (
            <>
                <Card>
                    <Text>Test6</Text>
                    <V.VictoryChart>
                        <V.VictoryGroup offset={20}
                                      // colorScale={"qualitative"}
                            colorScale={['red', 'green', 'blue']}
                        >
                            <V.VictoryBar
                                data={[{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 5 }]}
                            />
                            <V.VictoryBar
                                data={[{ x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 7 }]}
                            />
                            <V.VictoryBar
                                data={[{ x: 1, y: 3 }, { x: 2, y: 4 }, { x: 3, y: 9 }]}
                            />
                        </V.VictoryGroup>
                    </V.VictoryChart>
                </Card>
            </>
        )
    }
}