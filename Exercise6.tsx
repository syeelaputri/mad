/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Title from './components/Title/index6';
import TextInput from './components/Input/index6';
import Button from './components/Button/index6';

const Registration: React.FC = () => {
  // # Buat state untuk menyimpan data form
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    address: '',
    phoneNumber: '',
  });

  // # Fungsi untuk mengupdate state form sesuai input
  const handleChange = (key: string, value: string) => {
    setForm({
      ...form,
      [key]: key === 'phoneNumber' ? value.replace(/[^0-9]/g, '') : value, // # Hanya izinkan angka untuk phoneNumber
    });
  };

  // # Fungsi untuk menampilkan data form ke console saat tombol Register ditekan
  const handleRegister = () => {
    console.log('User Data:', form);
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />
      <TextInput
        label="Name"
        placeholder="Masukan nama lengkap anda"
        value={form.name}
        onChangeText={text => handleChange('name', text)}
      />
      <TextInput
        label="Username"
        placeholder="Masukan username anda"
        value={form.username}
        onChangeText={text => handleChange('username', text)}
      />
      <TextInput
        label="Email"
        placeholder="Masukan email anda"
        value={form.email}
        onChangeText={text => handleChange('email', text)}
      />
      <TextInput
        label="Address"
        placeholder="Masukan alamat anda"
        value={form.address}
        onChangeText={text => handleChange('address', text)}
      />
      <TextInput
        label="Phone Number"
        placeholder="Masukan Nomor telepon anda"
        keyboardType="phone-pad"
        value={form.phoneNumber}
        onChangeText={text => handleChange('phoneNumber', text)}
      />
      {/* # Tombol Register yang akan memanggil handleRegister saat ditekan */}
      <Button text="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
});

export default Registration;
