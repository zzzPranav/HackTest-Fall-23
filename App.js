import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TestChart1 from "./src/components/TestChart1";
import TestChart2 from "./src/components/TestChart2";
import TestChart3 from "./src/components/TestChart3";
import TestChart4 from "./src/components/TestChart4";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <TestChart1 style={styles.flexItem}/>
                <TestChart2 style={styles.flexItem}/>
            </View>
            <View style={styles.container1}>
                <TestChart3 style={styles.flexItem}/>
                <TestChart4 style={styles.flexItem}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    flexItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});