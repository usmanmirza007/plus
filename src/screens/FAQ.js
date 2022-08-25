import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
import { Header, Footer, Button, FAQs } from '../components';
import {
  colors,
  fontFamily,
  WINDOW_WIDTH,
  faqs2,
} from '../constant';
import { useNavigation } from '@react-navigation/native';

export const FAQ = () => {
  const navigation = useNavigation()
  return (
    <>
      <Header />
      <ScrollView style={{ backgroundColor: colors.white }}>
        <Text
          style={{
            fontSize: 80,
            fontFamily: fontFamily.poppins.semibold,
            marginTop: 20,
            color: colors.black,
            textAlign: 'center',
          }}>
          FAQ
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontFamily: fontFamily.poppins.regular,
            color: colors.darkGray,
            textAlign: 'center',
          }}>
          Still have questions? Visit our FAQs.
        </Text>

        <Button 
        text='CONTACT US' 
        textStyle={{ fontSize: 15, fontFamily: fontFamily.poppins.bold }} 
        style={{ paddingHorizontal: 20, backgroundColor: colors.secondaryGreen, marginTop: 25 }} 
        onPress={() => navigation.navigate('ContactUs')}
        />

        <Text style={styles.heading}>Who are A-Plus TV</Text>

        <Text style={styles.text}>
          A-Plus TV is an online streaming worldwide A-Plus TV subscription service provider with fast activation and no setup fees. covering all your day-to-day devices. Our team supplies solid TV services to various countries around the world. Our experienced network engineers deliver high-quality digital media streaming to our loyal customers. Our strong support team and technical expertise have allowed us to be the best A-Plus TV service provider available worldwide.
          Your services are usually activated within 5min – 1 hour of ordering however may take up to 2 hours during busy periods.
          If you have any questions feel free to contact our live chat team who are happy to help
        </Text>

        <Text style={styles.heading}>What do we offer</Text>

        <Text style={styles.text}>
          Our company provides TV subscription services straight to your device through the internet. This includes Smart TV Samsung & LG, PC, Mac, Apple iPhone, iPad, Apple TV 4 & 5, Amazon Firestick, A-Plus TV box, Android phones, and tablets, Android box, MAG, STB Emulator.
          We give customers direct exclusive access to +54000 4K/Ultra HD channels and video on demand, ranging from sports, movies and popular TV shows to netflix, amazon prime and Disney+
        </Text>

        <Text style={{ color: colors.black, fontFamily: fontFamily.poppins.bold, fontSize: 40, textAlign: 'center', marginTop: 20 }}>
          FAQ
        </Text>

        <View style={styles.separator} />
        
        <View style={{padding: 10, marginBottom: 100}}>
          <FAQs data={faqs2} faqStyle={{borderRadius: 0, backgroundColor: '#EFEFEF', paddingHorizontal: 15, paddingVertical: 12}} iconStyle={{tintColor: colors.black}} />
        </View>

        <Footer />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontFamily: fontFamily.poppins.semibold,
    marginTop: 20,
    color: colors.black,
    textAlign: 'center',
  },
  text: {
    fontSize: 13,
    fontFamily: fontFamily.poppins.medium,
    color: colors.darkGray,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  separator: {
    backgroundColor: colors.black,
    width: WINDOW_WIDTH * 0.15,
    height: 1,
    alignSelf: 'center',
    marginVertical: 15,
  },
});
