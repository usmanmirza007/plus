import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {
  images,
  whyChooseUs,
  fontFamily,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  colors,
} from '../constant';
import {GradientButton} from '../components';

export const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.mainImage} source={images.mainImage} />
      <View style={styles.mainView}>
        <Text style={[styles.heading, {color: colors.white}]}>
          BEST IPTV SERVER PROVIDER
        </Text>
        <Text
          style={{
            color: colors.white,
            fontFamily: fontFamily.poppins.medium,
            fontSize: 17,
            textAlign: 'center',
            marginTop: 10,
            lineHeight: 20,
          }}>
          +154,000 TV Channels & VODs in 4K & Ultra HD Picture Quality
        </Text>
        <GradientButton
          text={'VIEW PLANS & FEATURES'}
          btnStyle={{marginTop: 10}}
        />
      </View>
      <Text style={[styles.primaryHeading, {marginTop: 50, marginBottom: 15}]}>
        WHY CHOOSE US
      </Text>

      <View style={styles.separator} />

      {whyChooseUs.map(({image, title, desc}, i) => (
        <View style={styles.characteristicsView} key={i}>
          <Image source={image} style={{height: 60, width: 60}} />
          <Text style={[styles.subHeading, {marginTop: 15}]}>{title}</Text>
          <Text
            style={{
              fontSize: 14,
              marginHorizontal: 20,
              textAlign: 'center',
              fontFamily: fontFamily.poppins.medium,
              color: colors.darkGray,
            }}>
            {desc}
          </Text>
        </View>
      ))}

      <Text
        style={[styles.primaryHeading, {marginTop: 70, marginHorizontal: 20}]}>
        WHICH SUBSCRIPTION PLAN IS RIGHT FOR YOU?
      </Text>

      <View style={styles.separator} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainView: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
    backgroundColor: '#00000066',
    paddingHorizontal: 20,
  },
  mainImage: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.6,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 35,
    fontFamily: fontFamily.poppins.bold,
    textAlign: 'center',
    lineHeight: 37,
  },
  primaryHeading: {
    fontSize: 35,
    color: colors.primaryBlack,
    fontFamily: fontFamily.teko.bold,
    textAlign: 'center',
    lineHeight: 37,
  },
  characteristicsView: {
    padding: 10,
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 18,
    fontFamily: fontFamily.poppins.semibold,
    color: colors.black,
  },
  separator: {
    backgroundColor: colors.lightBlue,
    width: WINDOW_WIDTH * 0.25,
    height: 1,
    alignSelf: 'center',
    marginVertical: 15,
  },
});
