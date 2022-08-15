import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fontFamily} from '../constant';

export const Button = ({
  style = {},
  text = '',
  textStyle = {},
  rightIcon,
  rightIconStyle = {},
  lefIcon,
  leftIconStyle = {},
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          margin: 10,
          backgroundColor: colors.green,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 35,
          padding: 12,
          flexDirection: 'row',
        },
        style,
      ]}>
      {lefIcon && (
        <Image
          source={lefIcon}
          style={[
            {
              height: 17,
              width: 17,
              resizeMode: 'contain',
              tintColor: colors.white,
              marginRight: 5,
            },
            leftIconStyle,
          ]}
        />
      )}
      <Text
        style={[
          {
            fontFamily: fontFamily.poppins.medium,
            fontSize: 17,
            color: colors.white,
          },
          textStyle,
        ]}>
        {text}
      </Text>
      {rightIcon && (
        <Image
          source={rightIcon}
          style={[
            {
              height: 17,
              width: 17,
              resizeMode: 'contain',
              tintColor: colors.white,
              marginLeft: 5,
            },
            rightIconStyle,
          ]}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
