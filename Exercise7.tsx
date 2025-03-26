/* eslint-disable prettier/prettier */ // nonaktifkan Prettier (klo nd, error)

// syeela's notes

// impor pustaka dari React
import React from 'react';

// impor komponen bawaan dari React Native
import {StyleSheet, Text, ScrollView} from 'react-native';

// impor komponen UserCard dari folder components
import UserCard from './components/UserCard/index';

// definisikan data user yg akan ditampilkan sesuai template UserCard
const users = [
  {
    id: 1,
    first_name: 'Bluth',
    last_name: 'George',
    email: 'george.bluth@reqres.in',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: 2,
    first_name: 'Weaver',
    last_name: 'Janet',
    email: 'janet.weaver@reqres.in',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: 3,
    first_name: 'Wong',
    last_name: 'Emma',
    email: 'emma.wong@reqres.in',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: 4,
    first_name: 'Holt',
    last_name: 'Eve',
    email: 'eve.holt@reqres.in',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
  {
    id: 5,
    first_name: 'Morris',
    last_name: 'Charles',
    email: 'charles.morris@reqres.in',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  },
  {
    id: 6,
    first_name: 'Ramos',
    last_name: 'Tracey',
    email: 'tracey.ramos@reqres.in',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
  },
  {
    id: 7,
    first_name: 'Lawson',
    last_name: 'Michael',
    email: 'michael.lawson@reqres.in',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  },
  {
    id: 8,
    first_name: 'Ferguson',
    last_name: 'Lindsay',
    email: 'lindsay.ferguson@reqres.in',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
  },
  {
    id: 9,
    first_name: 'Funke',
    last_name: 'Tobias',
    email: 'tobias.funke@reqres.in',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
  },
  {
    id: 10,
    first_name: 'Fields',
    last_name: 'Byron',
    email: 'byron.fields@reqres.in',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
  },
  {
    id: 11,
    first_name: 'Edwards',
    last_name: 'George',
    email: 'george.edwards@reqres.in',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
  },
  {
    id: 12,
    first_name: 'Howell',
    last_name: 'Rachel',
    email: 'rachel.howell@reqres.in',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
  },
];

// definisikan komponen Exercise7
const Exercise7 = () => {
  return (
    <ScrollView>
      <Text style={styles.title}>User List</Text>
      {users.map(user => (
        <UserCard
          key={user.id}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
          avatar={user.avatar}
        />
      ))}
    </ScrollView>
  );
};

// ekspor komponen Exercise7
export default Exercise7;

// definisikan objek styles untuk styling komponen
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'black',
    fontWeight: '700',
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 30,
  },
});
