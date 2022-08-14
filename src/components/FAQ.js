import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fontFamily, images, WINDOW_WIDTH} from '../constant';
import commonStyle from '../constant/commonStyle';

export const FAQ = ({question, answer}) => {
  const [toggle, setToggle] = useState(false);
  return (
    <View
      style={{
        borderRadius: 15,
        backgroundColor: colors.white,
        marginTop: 20,
        paddingHorizontal: 25,
        ...commonStyle.shadow,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 20,
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
        <TouchableOpacity onPress={() => setToggle(!toggle)}>
          <Image
            source={!toggle ? images.addIcon : images.minusIcon}
            style={{height: 15, width: 15, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
      {toggle && (
        <Text
          style={{
            color: colors.darkGray,
            fontFamily: fontFamily.poppins.light,
            fontSize: 15,
            marginBottom: 20,
          }}>
          {answer}
        </Text>
      )}
    </View>
  );
};
