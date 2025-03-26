/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flexbox = () => {
  return (
    <View style={style.container}>
      <View style={style.redContainer} />
      <View style={style.greenContainer} />
      <View style={style.blueContainer} />
    </View>
  );
};

export default Flexbox;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});
