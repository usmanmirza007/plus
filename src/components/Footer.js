// @flow
import * as React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { colors, fontFamily, images } from '../constant';
import { useNavigation } from '@react-navigation/native';

export const Footer = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>CONTACT US</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={images.emailIcon}
          style={{
            height: 40,
            width: 50,
            resizeMode: 'contain',
            tintColor: colors.white,
            marginRight: 5,
          }}
        />
        <View>
          <Text style={[styles.text, { textDecorationLine: 'underline' }]}>
            admin@star-iptv.com
          </Text>
          <Text style={[styles.text, { marginTop: 0 }]}>We reply within 1h</Text>
        </View>
      </View>

      <Text style={[styles.heading, { marginTop: 30 }]}>MAIN MENU</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Pricing')}>
        <Text style={styles.text}>Subscription Plans</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ContactUs')}>
        <Text style={styles.text}>Contact Us</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Terms and Conditions</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Tutorial</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('FAQ')}>
        <Text style={styles.text}>FAQ</Text>
      </TouchableOpacity>
      <Text style={styles.text}>© 2021 star-iPtv. All Rights Reserved</Text>
      <Image
          source={images.dmcaProtectedLogo}
          style={{
            height: 70,
            width: 140,
            resizeMode: 'stretch',
            marginRight: 5,
          }}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBlack,
    paddingHorizontal: 10,
    marginBottom: 0,
    paddingVertical: 10,
    paddingTop: 100,
  },
  heading: {
    color: '#fff',
    fontSize: 18,
    fontFamily: fontFamily.poppins.bold,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontFamily: fontFamily.poppins.medium,
    marginVertical: 5,
  },
});
