import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Header, Footer, Button} from '../components';
import {
  colors,
  fontFamily,
  images,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../constant';
import commonStyle from '../constant/commonStyle';
export const ContactUs = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View
          style={{
            backgroundColor: '#504ebd',
            alignItems: 'center',
            marginBottom: WINDOW_HEIGHT * 0.25,
            height: WINDOW_HEIGHT * 1.34,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: fontFamily.poppins.semibold,
              marginTop: 50,
              padding: 10,
              color: colors.white,
            }}>
            CONTACT US
          </Text>
          <View
            style={{
              backgroundColor: colors.white,
              marginTop: 20,
              ...commonStyle.shadow,
            }}>
            <View style={{paddingVertical: 50, paddingHorizontal: 20}}>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: fontFamily.poppins.semibold,
                  color: colors.blue,
                }}>
                Send us a Message
              </Text>
              <TextInput placeholder="First Name" style={styles.textInput} placeholderTextColor={'#0C71C34D'} />
              <TextInput placeholder="Last Name" style={styles.textInput} placeholderTextColor={'#0C71C34D'} />
              <TextInput placeholder="Email" style={styles.textInput} placeholderTextColor={'#0C71C34D'} />
              <TextInput placeholder="Message" style={[styles.textInput, {height: 86}]} placeholderTextColor={'#0C71C34D'} />
              <TouchableOpacity
                style={{
                  backgroundColor: colors.blue,
                  marginTop: 20,
                  height: 50,
                  width: '50%',
                  alignSelf: 'flex-start',
                  borderRadius: 25,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: colors.white,
                    fontFamily: fontFamily.poppins.medium,
                  }}>
                  SEND MESSAGE
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                backgroundColor: colors.blue,
                marginTop: 20,
                paddingVertical: 50,
                paddingHorizontal: 20,
              }}>
              <Text
                style={{
                  fontSize: 25,
                  fontFamily: fontFamily.poppins.semibold,
                  color: colors.white,
                  marginTop: 20,
                }}>
                Info
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fontFamily.poppins.regular,
                  color: colors.white,
                  marginTop: 20,
                }}>
                admin@a-plus-tv.com
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: fontFamily.poppins.regular,
                  color: colors.white,
                  marginTop: 20,
                }}>
                Contact us on whatsapp:
              </Text>
              <Button
                style={{
                  marginTop: 20,
                  backgroundColor: colors.primaryGreen,
                  paddingHorizontal: 30,
                  alignSelf: 'flex-start',
                  marginLeft: 0,
                }}
                text={'Contact Us'}
                leftIcon={images.whatsapp}
              />
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    borderColor: colors.blue,
    borderWidth: 1,
    marginTop: 20,
    width: WINDOW_WIDTH - 60,
    color: colors.blue,
    fontFamily: fontFamily.poppins.regular,
    padding: 12,
  },
});