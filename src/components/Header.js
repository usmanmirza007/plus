import React from 'react';
import {Text, StatusBar, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  colors,
  fontFamily,
  images,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../constant';

export const Header = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={colors.primaryBlue}
      />
      <View
        style={{
          marginTop: STATUS_BAR_HEIGHT,
          backgroundColor: colors.primaryBlue,
          flexDirection: 'row',
          alignItems: 'center',
          height: 40,
          paddingHorizontal: 10,
        }}>
        <Image
          source={images.emailIcon}
          style={{
            height: 18,
            width: 24,
            resizeMode: 'contain',
            tintColor: colors.white,
          }}
        />
        <Text
          style={{
            fontSize: 12,
            fontFamily: fontFamily.poppins.semibold,
            color: colors.white,
            marginLeft: 5,
          }}>
          admin@a-plus-tv.com
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: colors.white,
          alignItems: 'center',
          height: 70,
          paddingHorizontal: 20,
        }}>
        <Image
          source={images.appLogo}
          resizeMode={'contain'}
          style={{
            width: WINDOW_WIDTH * 0.2,
            height: WINDOW_HEIGHT * 0.08,
          }}
        />
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image
            source={images.menu}
            resizeMode={'contain'}
            style={{
              width: 30,
              height: 30,
              tintColor: colors.primaryBlack,
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
