import React from 'react';
import {StyleSheet, View} from 'react-native';
import TestChart1 from "./src/components/TestChart1";
import TestChart2 from "./src/components/TestChart2";
import TestChart3 from "./src/components/TestChart3";
import TestChart4 from "./src/components/TestChart4";
import TestChart5 from "./src/components/TestChart5";
import TestChart6 from "./src/components/TestChart6";

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
            <View style={styles.container1}>
                <TestChart5 style={styles.flexItem}/>
                <TestChart6 style={styles.flexItem}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft: '10%',
        marginRight: '10%'
    },
    container1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '2%',
        marginBottom: '2%',
    },
    flexItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    }
});