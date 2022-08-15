import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { colors, fontFamily, images, WINDOW_WIDTH } from '../constant';
import commonStyle from '../constant/commonStyle';

export const FAQ = ({ question, answer, faqStyle, iconStyle }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <View
      style={[{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginTop: 20,
        paddingHorizontal: 25,
        paddingVertical: 20,
        ...commonStyle.shadow,
      }, faqStyle]}>
      <TouchableOpacity
        onPress={() => setToggle(!toggle)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: colors.primaryBlack,
            fontFamily: fontFamily.poppins.medium,
            fontSize: 15,
            maxWidth: WINDOW_WIDTH * 0.7,
          }}>
          {question}
        </Text>
        <Image
          source={!toggle ? images.addIcon : images.minusIcon}
          style={[{ height: 15, width: 15, resizeMode: 'contain' }, iconStyle]}
        />
      </TouchableOpacity>
      {toggle && (
        <Text
          style={{
            color: colors.darkGray,
            fontFamily: fontFamily.poppins.light,
            fontSize: 15,
            marginVertical: 20,
          }}>
          {answer}
        </Text>
      )}
    </View>
  );
};
