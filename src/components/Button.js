import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Button = ({text, onPress, backgroundColor}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: backgroundColor || '#649757'}]}
      onPress={onPress}>
      <Text style={{color: 'white', fontSize: 18}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 20,
    height: 55,
    width: '90%',
    fontSize: 24,
    borderRadius: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Button;
