import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
} from 'react-native';
import { Header, Footer, Button, FAQsComponent, GetStarted } from '../components';
import {
  colors,
  fontFamily,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  pricingPlan,
  subscriptionRewards,
} from '../constant';
import commonStyle from '../constant/commonStyle';
export const Pricing = () => {
  return (
    <>
      <Header />
      <ScrollView style={{backgroundColor: colors.white}}>
        <View
          style={{
            backgroundColor: '#504ebd',
            alignItems: 'center',
            padding: 10,
          }}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: fontFamily.poppins.medium,
              marginTop: 20,
              color: colors.white,
            }}>
            Pricing Plans
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontFamily: fontFamily.poppins.semibold,
              marginTop: 20,
              color: colors.white,
            }}>
            OUR BEST PRICING
          </Text>
          <View
            style={{
              backgroundColor: colors.white,
              marginTop: 20,
              ...commonStyle.shadow,
            }}>
            {pricingPlan.map((plan, i) => (
              <View key={i} style={[commonStyle.shadow, { backgroundColor: colors.white, width: WINDOW_WIDTH - 20 }]}>
                <Text
                  style={{
                    color: colors.primaryBlack,
                    textAlign: 'center',
                    fontSize: 21,
                    fontFamily: fontFamily.poppins.medium,
                    marginTop: 20,
                  }}>
                  {plan.duration}
                </Text>
                <Text
                  style={{
                    color: colors.primaryGray,
                    textAlign: 'center',
                    fontSize: 14,
                    fontFamily: fontFamily.poppins.medium,
                    marginTop: 10,
                  }}>
                  {plan.plan}
                </Text>
                <View
                  style={{
                    height: WINDOW_HEIGHT * 0.13,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.poppins.medium,
                      fontSize: 20,
                      color: plan.pricingColor,
                      marginTop: -35,
                    }}>
                    $
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily.poppins.medium,
                      fontSize: 65,
                      color: plan.pricingColor,
                    }}>
                    {plan.price}
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                  {plan.features.map((feature, i) => (
                    <Text
                      key={i}
                      style={{
                        color: colors.darkGray,
                        fontFamily: fontFamily.poppins.semibold,
                        fontSize: 14,
                        textAlign: 'center',
                        marginTop: 15,
                      }}>
                      {feature}
                    </Text>
                  ))}
                </View>
                <Button
                  style={{
                    marginTop: 25,
                    marginBottom: 15,
                    backgroundColor: plan.pricingColor,
                    ...commonStyle.shadow,
                  }}
                  text={'SUBSCRIBE NOW'}
                  textStyle={{ fontSize: 16, fontFamily: fontFamily.poppins.bold }}
                />
              </View>
            ))}
          </View>
        </View>
        <Text style={{color: colors.blue, fontFamily: fontFamily.poppins.semibold, fontSize: 18, textAlign: 'center', marginTop: 20}}>
          WHAT YOU GET BY SUBSCRIBING
        </Text>

        <View style={styles.separator} />

        {subscriptionRewards.map(({image, title, desc}, i) => (
          <View style={styles.characteristicsView} key={i}>
            <Image source={image} style={{height: 80, width: 80, resizeMode: 'contain', borderRadius: 99}} />
            <Text style={[styles.subHeading, {marginTop: 5}]}>{title}</Text>
            <Text
              style={{
                fontSize: 14,
                textAlign: 'center',
                fontFamily: fontFamily.poppins.regular,
                color: colors.darkGray,
              }}>
              {desc}
            </Text>
          </View>
        ))}

        <View style={{backgroundColor: colors.primaryPurple}}>
          
        </View>
        <FAQsComponent backgroundColor={colors.primaryPurple} textColor={colors.white} />
        <GetStarted />
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
  characteristicsView: {
    padding: 10,
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 17,
    fontFamily: fontFamily.poppins.bold,
    color: colors.black,
  },
  separator: {
    backgroundColor: colors.lightGreen,
    width: WINDOW_WIDTH * 0.1,
    height: 4,
    alignSelf: 'center',
    marginVertical: 15,
  },
});
