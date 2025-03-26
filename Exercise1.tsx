/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <ScrollView
      contentContainerStyle={style.container}
      showsVerticalScrollIndicator={false}>
      <View>
        <Text style={style.title}>Profile</Text>
      </View>
      <TextInput style={style.input} placeholder="Username" />
      <TextInput
        style={style.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={style.button}>
        <Text style={style.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={style.subTitle}>Hey there!</Text>
      <Text style={style.subTitle}>
        I'm Syeela and I'm currently a fourth-semester Computer Science student
        at Universitas Klabat (UNKLAB). I enjoy learning new things and adding
        new skills to improve myself.
      </Text>
      <Text style={style.subTitle}>
        Whenever I start something, I always try to finish it in the best way
        possible. Learning and improving are important to me, and I am excited
        about what the future holds!
      </Text>
      <Text style={style.subTitle}>Some of my favorite things:</Text>
      <Image
        style={style.img1}
        source={{
          uri: 'https://tse1.mm.bing.net/th?id=OIP.gejKk9LYpCNoSy4ZcSK65gHaEK&pid=Api&P=0&h=180',
        }}
      />
      <Text style={style.subTitle}>My favorite flower</Text>
      <Image
        style={style.img1}
        source={{
          uri: 'https://cookingformysoul.com/wp-content/uploads/2022/04/feat-strawberry-bread-1-min.jpg',
        }}
      />
      <Text style={style.subTitle}>My favorite food</Text>
      <Image
        style={style.img1}
        source={{
          uri: 'https://i.pinimg.com/originals/21/f6/a9/21f6a9203492349e35a94c53909ad81d.png',
        }}
      />
      <Text style={style.subTitle}>My favorite color</Text>
    </ScrollView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#d2b2db',
    borderColor: '#d2b2db',
    borderWidth: 10,
    padding: 15,
    margin: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: '900',
    color: '#8e549b',
    textAlign: 'center',
    margin: 30,
  },
  subTitle: {
    fontSize: 20,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 20,
    textAlign: 'justify',
  },
  img1: {
    height: 200,
    width: 200,
    marginTop: 20,
  },
  input: {
    borderColor: 'black',
    borderWidth: 2,
    fontSize: 20,
    padding: 10,
  },
  button: {
    backgroundColor: 'green',
    margin: 20,
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
