/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TextInput as RNTextInput, View, StyleSheet} from 'react-native';

interface TextInputProps {
  label: string;
  placeholder: string;
  keyboardType?: 'default' | 'numeric' | 'phone-pad' | 'email-address'; // Allow different types
  value: string;
  onChangeText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  keyboardType = 'default',
  value,
  onChangeText,
}) => {
  const handleTextChange = (text: string) => {
    if (keyboardType === 'numeric' || keyboardType === 'phone-pad') {
      text = text.replace(/[^0-9]/g, ''); // Allow only numbers
    }
    onChangeText(text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={handleTextChange} // Enforce numeric input if needed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
});

export default TextInput;
