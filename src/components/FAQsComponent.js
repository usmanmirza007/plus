import * as React from 'react';
import {Image, Text, View} from 'react-native';
import {
  colors,
  fontFamily,
  images,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../constant';
import {FAQs} from './FAQs';

export const FAQsComponent = () => {
  return (
    <View style={{padding: 10}}>
      <Image
        source={images.manAndChild}
        style={{
          height: WINDOW_HEIGHT * 0.55,
          width: WINDOW_WIDTH - 20,
          resizeMode: 'contain',
          marginTop: 50,
        }}
      />
      <Text
        style={{
          color: colors.blue,
          fontFamily: fontFamily.poppins.semibold,
          fontSize: 25,
        }}>
        FAQ
      </Text>
      <View
        style={{
          width: 40,
          height: 4,
          backgroundColor: colors.lightGreen,
          marginVertical: 15,
        }}
      />
      <Text
        style={{
          fontFamily: fontFamily.poppins.bold,
          fontSize: 21,
          color: colors.primaryBlack,
        }}>
        If you still have any questions, please read the section below or
        contact us directly.
      </Text>
      <FAQs />
    </View>
  );
};
