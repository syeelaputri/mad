/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

interface ButtonProps {
  text: string; // # Teks yang ditampilkan pada tombol
  onPress?: () => void; // # Fungsi yang akan dipanggil saat tombol ditekan
}

const Button: React.FC<ButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple', // # Warna latar tombol
    paddingVertical: 12, // # Padding vertikal
    borderRadius: 25, // # Sudut tombol membulat
    alignItems: 'center', // # Teks di tengah secara horizontal
    marginTop: 20, // # Margin atas tombol
  },
  buttonText: {
    color: 'white', // # Warna teks tombol
    fontSize: 20, // # Ukuran font
    fontWeight: 'bold', // # Teks tebal
  },
});

export default Button;
