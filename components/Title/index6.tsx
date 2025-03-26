/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface TitleProps {
  text: string;
}

const Title: React.FC<TitleProps> = ({text}) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 40,
    color: 'black',
  },
});

export default Title;
