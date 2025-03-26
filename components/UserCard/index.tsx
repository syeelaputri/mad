/* eslint-disable prettier/prettier */ // nonaktifkan Prettier (klo nd, error)

// syeela's notes

// impor pustaka dari React
import React from 'react';

// impor komponen bawaan dari React Native
import {View, Text, Image, StyleSheet} from 'react-native';

// definisikan tipe props yg diterima oleh UserCard
interface UserCardProps {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

// definisikan komponen UserCard
const UserCard: React.FC<UserCardProps> = ({
  first_name,
  last_name,
  email,
  avatar,
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: avatar}} />
      <View style={styles.textBox}>
        <Text style={styles.subtitle1}>
          <Text style={styles.subtitle}>{first_name}</Text> {last_name}
        </Text>
        <Text style={styles.subtitle2}>{email}</Text>
      </View>
    </View>
  );
};

// definisikan objek styles untuk styling komponen
const styles = StyleSheet.create({
  container: {
    // container utama
    width: 350,
    padding: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 20,
    marginBottom: 30,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  subtitle: {
    // nama depan
    fontSize: 25,
    color: 'black',
    fontWeight: '800',
  },
  subtitle1: {
    // nama belakang
    fontSize: 25,
    color: 'black',
    fontWeight: '400',
  },
  subtitle2: {
    // email
    fontSize: 17,
    color: 'black',
    fontWeight: '400',
  },
  img: {
    // foto profil
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  textBox: {
    // kotak teks
    flex: 1,
    marginLeft: 15,
  },
});

// ekspor komponen UserCard (supaya blh pakai di file lain)
export default UserCard;
