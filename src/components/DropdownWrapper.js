import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { colors, fontFamily, WINDOW_WIDTH } from '../constant';

export const DropdownWrapper = ({ items, setItems, value, setValue, style = {}, placeholder = '', placeholderStyle = {}, title = '', required = false }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <>
      <Text style={styles.title}>{title} {required ? <Text style={{ color: 'red' }}>*</Text> : <Text>(optional)</Text>}</Text>
      <DropDownPicker
        open={openDropdown}
        value={value}
        items={items}
        setOpen={setOpenDropdown}
        setValue={setValue}
        setItems={setItems}
        listMode={"SCROLLVIEW"}
        style={[styles.textInput, style]}
        placeholder={placeholder}
        placeholderStyle={[styles.placeholderStyle, placeholderStyle]}
        textStyle={styles.textStyle}
        dropDownContainerStyle={[styles.dropDownContainerStyle, styles.border]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  border: {
    borderColor: colors.blur
  },
  textStyle: {
    fontSize: 12,
    fontFamily: fontFamily.poppins.regular,
    color: colors.black,
  },
  dropDownContainerStyle: {
    position: 'relative',
    top: 0,
  },
  placeholderStyle: {
    fontSize: 12,
    fontFamily: fontFamily.poppins.regular,
    color: colors.gray,
  },
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