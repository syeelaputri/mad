import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Logo} from '../../assets';

const SplashScreen = () => {
    return {
        <View style={styles.container}>
            <Logo />
            <Text>Money Tracker</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColors: 'white'