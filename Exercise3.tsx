import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise3 = () => {
  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <View>
        <Text style={style.title}>Welcome</Text>
      </View>
      <Text style={style.subTitle}>Username</Text>
      <TextInput style={style.input} placeholder="Masukan username anda" />
      <Text style={style.subTitle}>Password</Text>
      <TextInput
        style={style.input}
        placeholder="Masukan password anda"
        secureTextEntry={true}
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Exercise3;

const style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 15,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: 'black',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginTop: 25,
  },
  input: {
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 15,
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#f27108',
    marginTop: 50,
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
