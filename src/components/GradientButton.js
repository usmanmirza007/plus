import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {fontFamily, colors as colours} from '../constant';

export const GradientButton = ({
  colors,
  text,
  onPress,
  style = {},
  btnStyle = {},
  textStyle = {},
  leftIcon,
  iconStyle = {},
  leftIconStyle = {},
  rightIcon,
  rightIconStyle = {},
  children,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btnStyle, btnStyle]}>
      <LinearGradient
        style={[styles.btnGradient, style]}
        colors={colors && colors.length > 0 ? colors : colours.gradientPurple}>
        {leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.icon, {marginRight: 5}, iconStyle, leftIconStyle]}
            resizeMode="contain"
          />
        )}
        {children ? (
          children
        ) : (
          <Text style={[styles.btnTxt, textStyle]}>{text}</Text>
        )}
        {rightIcon && (
          <Image
            source={rightIcon}
            style={[styles.icon, {marginLeft: 5}, iconStyle, rightIconStyle]}
            resizeMode="contain"
          />
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#8300E9',
  },
  btnGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 45,
    borderRadius: 99,
    paddingHorizontal: 20,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 17,
    fontFamily: fontFamily.poppins.medium,
  },
  icon: {
    width: 25,
    height: 25,
  },
});
