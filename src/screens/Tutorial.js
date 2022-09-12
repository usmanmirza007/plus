import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import { Header, Footer, CustomCollapse } from '../components';
import {
  colors,
  fontFamily,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  tutorials,
} from '../constant';
export const Tutorial = () => {
  return (
    <>
      <Header />
      <ScrollView>
        <View style={{ backgroundColor: '#2EA3F2', alignItems: 'center', height: WINDOW_HEIGHT * 0.4 }}>
          <Text style={{ fontSize: 25, fontFamily: fontFamily.poppins.semibold, marginTop: 30, padding: 10, color: colors.white }}>
            TUTORIALS
          </Text>
        </View >
        <View style={{ backgroundColor: colors.white, paddingBottom: 50, padding: 10 }}>
          <View style={{ backgroundColor: colors.white, marginTop: -100, padding: 10, }}>
            <Text style={{ fontSize: 30, fontFamily: fontFamily.teko.bold, color: colors.primaryBlack, textAlign: 'center', marginTop: 30 }}>
              HOW TO SETUP THE A-Plus TV ON YOUR DEVICE
            </Text>
            {tutorials.map((tutorial, i) => (
              <View key={i} style={{ width: WINDOW_WIDTH - 40, alignItems: 'center', marginTop: 50 }}>
                <Image source={tutorial.image} style={{ height: 40, width: 40, resizeMode: 'contain' }} />
                <Text style={{ fontSize: 17, fontFamily: fontFamily.poppins.bold, color: colors.black, marginTop: 15 }}>{tutorial.title}</Text>
                <CustomCollapse
                  title={tutorial.question}
                  content={tutorial.answer}
                  style={{ width: WINDOW_WIDTH - 40, borderRadius: 0, backgroundColor: '#EFEFEF', paddingHorizontal: 15, paddingVertical: 12 }}
                  iconStyle={{ tintColor: colors.black }}
                />
              </View>
            ))}
          </View>
        </View>
        <Footer />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});