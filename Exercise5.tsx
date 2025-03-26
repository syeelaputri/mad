/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Input from './components/Input';
import Button from './components/Button';

const Exercise5 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Input label="Username" placeholder="Masukan username Anda" />
      <Input label="Password" placeholder="Masukan password Anda" />
      <Input label="Alamat" placeholder="Masukan alamat Anda" />
      <Input label="No Telp" placeholder="Masukan nomor telepon Anda" />
      <Button label="Sign In" color="orange" />
      <Button label="Sign In Google" color="red" />
      <Button label="Sign In Facebook" color="blue" />
      <Button label="Sign In Apple" color="black" />
    </View>
  );
};

export default Exercise5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
});
