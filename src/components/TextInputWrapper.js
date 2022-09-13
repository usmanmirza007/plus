// @flow
import * as React from 'react';
import { StyleSheet, Text, TextInput } from 'react-native';
import { colors, fontFamily, WINDOW_WIDTH } from '../constant';

export const TextInputWrapper = ({title, placeholder='', value, onChangeText, required=false, type='text'}) => {
  return (
    <>
      <Text style={styles.title}>{title} {required ? <Text style={{color: 'red'}}>*</Text> : <Text>(optional)</Text>}</Text>
      <TextInput type={type} placeholder={placeholder} style={styles.textInput} placeholderTextColor={'#555555'} value={value} onChangeText={onChangeText} />
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 13,
    fontFamily: fontFamily.poppins.regular,
    marginTop: 15,
    color: '#404040',
  },
  textInput: {
    fontSize: 14,
    borderColor: colors.blur,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
    width: WINDOW_WIDTH - 60,
    color: colors.black,
    fontFamily: fontFamily.poppins.regular,
    padding: 12,
  },
});
