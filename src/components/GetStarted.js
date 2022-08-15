import * as React from 'react';
import { Text, View } from 'react-native';
import { colors, fontFamily, images } from '../constant';
import { Button } from './Button';
import commonStyle from '../constant/commonStyle';
import { useNavigation } from '@react-navigation/native';

export const GetStarted = () => {
  const navigation = useNavigation()
  return (
    <View style={{ marginTop: 20, marginBottom: 100, padding: 10 }}>
      <Text
        style={{
          fontFamily: fontFamily.poppins.semibold,
          fontSize: 25,
          color: colors.secondaryPurple,
        }}>
        Ready to get started?
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Button
          onPress={() => navigation.navigate('Pricing')}
          style={{
            backgroundColor: colors.secondaryPurple,
            ...commonStyle.shadow,
          }}
          text={'SUBSCRIBE NOW'}
          textStyle={{ fontSize: 13, fontFamily: fontFamily.poppins.bold }}
          rightIcon={images.playIcon}
          rightIconStyle={{ height: 13, width: 13 }}
        />
        <Button
          onPress={() => navigation.navigate('ContactUs')}
          style={{
            backgroundColor: colors.white,
            ...commonStyle.shadow,
          }}
          text={'CONTACT US'}
          textStyle={{
            fontSize: 13,
            fontFamily: fontFamily.poppins.bold,
            color: colors.secondaryPurple,
          }}
          rightIcon={images.playIcon}
          rightIconStyle={{
            height: 13,
            width: 13,
            tintColor: colors.secondaryPurple,
          }}
        />
      </View>
    </View>
  );
};
