/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Exercise4 = () => {
  return (
    <View>
      <View style={style.container1}>
        <View style={style.blackContainer} />
        <View style={style.yellowContainer} />
        <View style={style.blackContainer} />
      </View>
      <Image
        style={style.img1}
        source={{
          uri: 'https://lh3.googleusercontent.com/drive-storage/AJQWtBOxqcLBG9iruy_5FEojY45i1qCzZwVgEYS8PMj7-OqAtb9lbAAaxr_OC4OsXYOu_MvM84eLgVEfLRT8FYRDV-kEyY4A91uSO1Gu8IXdZyolzy4=w1920-h912?auditContext=forDisplay',
        }}
      />
      <View style={style.container2}>
        <View style={style.blackContainer} />
        <View style={style.yellowContainer} />
        <View style={style.blackContainer} />
      </View>
    </View>
  );
};

export default Exercise4;

const style = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    backgroundColor: 'red',
    height: 120,
    width: '100%',
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'blue',
    height: 900,
    width: '100%',
    bottom: -100,
  },
  blackContainer: {
    backgroundColor: 'black',
    height: 80,
    width: 80,
    marginTop: 18,
    marginBottom: 30,
    marginLeft: 18,
    marginRight: 18,
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    height: 80,
    width: 80,
    marginTop: 18,
    marginBottom: 30,
    marginLeft: 18,
    marginRight: 18,
  },
  img1: {
    height: 500,
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
