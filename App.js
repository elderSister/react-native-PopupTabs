/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PopsTabView from "./lib/PopsTabView";


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={{flex: 1, alignItems: "center", padding: 20,}}>
                <Text style={styles.text}>显示PopsTabView</Text>
                <PopsTabView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 20,
    }
});
