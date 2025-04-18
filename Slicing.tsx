/* eslint-disable prettier/prettier */ // nonaktifkan Prettier (biar tidak error)

// notes

// impor pustaka dari React
import React from 'react';

// impor komponen bawaan dari React Native
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

const Slicing: React.FC = () => {
  return (
    <ImageBackground
      source={require('./assets/calico_bg.png')}
      style={styles.bg}
      resizeMode="cover">
      <Image
        source={require('./assets/calico_header.png')}
        style={styles.header}
        resizeMode="contain"
      />
      <Text style={styles.title}>Sign Up</Text>

      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.square}>
          <Text style={styles.subtitle}>Username or email</Text>
          <TextInput style={styles.input} />

          <Text style={styles.subtitle}>Password</Text>
          <TextInput secureTextEntry style={styles.input} />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.divider}>
            <Text>────────── </Text> or <Text> ──────────</Text>
          </Text>

          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require('./assets/google.png')}
              style={styles.googleIcon}
            />
            <Text style={styles.googleText}>Continue with Google</Text>
          </TouchableOpacity>

          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.link}>Log In</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 10,
  },
  container: {
    alignItems: 'center',
    padding: 50,
  },
  square: {
    backgroundColor: '#F2A602',
    padding: 20,
    width: '100%',
    textAlign: 'left',
  },
  square1: {
    backgroundColor: '#F2A602',
    textAlign: 'left',
  },
  square2: {
    backgroundColor: '#F2A602',
    alignItems: 'center',
  },
  header: {
    marginBottom: 70,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#130E01',
  },
  subtitle: {
    fontSize: 18,
    color: '#130E01',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 30,
    marginBottom: 15,
    fontWeight: 'bold',
    backgroundColor: '#FEFEFE',
  },
  link: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#28A745',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divider: {
    fontSize: 14,
    color: '#130E01',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 30,
    marginBottom: 30,
    backgroundColor: '#DB4437',
    marginTop: 20,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 20,
  },
  googleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FEFEFE',
  },
  loginText: {
    fontSize: 14,
    color: '#130E01',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Slicing;
