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
    height: 40,
    paddingLeft: 1,
    paddingRight: 40,
    marginLeft: 1,
    flex: 3,
    padding: 1,
    margin: 1,
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 30,
    flex: 1,
    color: "#000000",
    padding: 1,
    margin: 1,
  },
  containerStyle: {
    flexDirection: 'row',
    paddingTop: 15,
  }
});

export { Input };