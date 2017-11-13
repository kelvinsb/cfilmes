import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, autoCapitalize, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize || 'none'}
        secureTextEntry={secureTextEntry || false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: 20,
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    flex: 2
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    flexDirection: 'row'
  }
});

export { Input };