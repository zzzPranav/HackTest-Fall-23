import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TestChart1 from "./src/components/TestChart1";
import TestChart2 from "./src/components/TestChart2";
import TestChart3 from "./src/components/TestChart3";
import TestChart4 from "./src/components/TestChart4";


export default function App() {
    return (
        <>
            <Text style={{width: '100%', textAlign: 'center', maxHeight:'2vh'}}>Hackathon Sample</Text>
            <View style={styles.container}>
                <TestChart1 style={styles.container}/>
                <TestChart2 style={styles.container}/>
                <TestChart3 style={styles.container}/>
                <TestChart4 style={styles.container}/>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});
