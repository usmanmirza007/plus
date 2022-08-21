import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import {
  images,
  whyChooseUs,
  pricingPlan,
  fontFamily,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  colors,
} from '../constant';
import {
  Header,
  Button,
  Footer,
} from '../components';
import { useNavigation } from '@react-navigation/native';
import commonStyle from '../constant/commonStyle';

export const Reseller = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header />
      <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
        <View style={{ padding: 10 }}>
          <Text style={[styles.primaryHeading, { marginTop: 50 }]}>
            Advantages of becoming IPTV Reseller
          </Text>

          <View style={styles.separator} />

          <Text style={{ fontFamily: fontFamily.poppins.regular, fontSize: 14, color: '#7A7A7A', textAlign: 'center' }}>
            Become our iptv reseller start making extra money !
          </Text>

          <Text style={styles.heading}>
            DISCOVER THE EASY WAY TO MAKE MONEY BY BECOMING IPTV RESELLER
          </Text>

          <Text style={styles.description}>
            Do you know that more than 50 millions people in the world are using IPTV services? So why don’t you start your own iptv business and make more than €2,000 per month .
          </Text>

          <Text style={styles.heading}>
            What is meant by IPTV Reseller?
          </Text>

          <Text style={styles.description}>
            So, What is meant by IPTV Reseller? he is the person who gets IPTV Panel to create and sell IPTV Subscription to his clients, through your IPTV Panel you can create Free Trial, 1 month, 3 Months, 6 Months and 1 Year IPTV Subscriptions.
          </Text>

          <Text style={styles.description}>
            Basically, IPTV Resellers Panel work through something called Credit Points. {'\n\n'} Credit Points are used to activate the IPTV Subscriptions.
          </Text>

          <Text style={styles.heading}>
            HOW TO START MAKING MONEY WITH DAILY IPTV RESELLER ?
          </Text>

          <Text style={styles.description}>
            Simply. Register for a reseller account and then advertise our service to your neighbors, family users, online forums & social media or build your own website & sell our IPTV service with your own service name to thousands of people online.
            {'\n\n'}For making this more clear and easy to understand I open up an example:  The clients buy IPTV service for 1 year in 80$, but you buy 1 year means 1 credit (30 $) from us, and sell it 80$ or as you wish (good benefit). So the conclusion of this explanation is 1 credit is for 1 year and each credit is 30$
            {'\n\n'}Now, how you can start to be a reseller?
            {'\n'}Answer: You should get at least 120 credits ( 300) to start your own business under your own brand name.
          </Text>

          <Text style={styles.heading}>
            Contact Us on Whatsapp
          </Text>

          <Button
            style={{
              marginTop: 20,
              backgroundColor: colors.primaryGreen,
              paddingHorizontal: 30,
            }}
            text={'Contact Us'}
            leftIcon={images.whatsapp}
          />

          {whyChooseUs.map(({ image, title, desc }, i) => (
            <View style={styles.characteristicsView} key={i}>
              <Image source={image} style={{ height: 60, width: 60 }} />
              <Text style={[styles.subHeading, { marginTop: 15 }]}>{title}</Text>
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
          <View style={{ marginVertical: 50, marginHorizontal: 20 }}>
            <Text style={styles.primaryHeading}>
              WHICH SUBSCRIPTION PLAN IS RIGHT FOR YOU?
            </Text>
            <View style={styles.separator} />
            {pricingPlan.map((plan, i) => (
              <View
                key={i}
                style={[
                  commonStyle.shadow,
                  {
                    borderRadius: 15,
                    overflow: 'hidden',
                    marginTop: 20,
                    backgroundColor: colors.white,
                  },
                ]}>
                <View
                  style={{
                    backgroundColor: plan.homeColor,
                    paddingBottom: 5,
                  }}>
                  <Text
                    style={{
                      color: colors.white,
                      textAlign: 'center',
                      fontSize: 21,
                      fontFamily: fontFamily.poppins.medium,
                      marginTop: 20,
                    }}>
                    {plan.duration}
                  </Text>
                  <Text
                    style={{
                      color: colors.white,
                      textAlign: 'center',
                      fontSize: 14,
                      fontFamily: fontFamily.poppins.regular,
                      marginTop: 10,
                    }}>
                    {plan.plan}
                  </Text>
                </View>
                <View
                  style={{
                    height: WINDOW_HEIGHT * 0.13,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 1,
                    borderColor: colors.gray,
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.poppins.medium,
                      fontSize: 20,
                      color: plan.homeColor,
                      marginTop: -35,
                    }}>
                    $
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily.poppins.medium,
                      fontSize: 50,
                      color: plan.homeColor,
                    }}>
                    {plan.price}
                  </Text>
                </View>
                <View style={{ paddingHorizontal: 15 }}>
                  {plan.features.map((feature, i) => (
                    <View
                      key={i}
                      style={{
                        marginTop: 15,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={images.bulletIcon}
                        style={{ width: 6, height: 6, resizeMode: 'contain' }}
                      />
                      <Text
                        style={{
                          color: colors.darkGray,
                          fontFamily: fontFamily.poppins.semibold,
                          fontSize: 14,
                          marginLeft: 7,
                        }}>
                        {feature}
                      </Text>
                    </View>
                  ))}
                </View>
                <Button
                  style={{
                    marginTop: 25,
                    marginBottom: 15,
                    backgroundColor: plan.homeColor,
                  }}
                  text={'SUBSCRIBE NOW'}
                  textStyle={{ fontSize: 14 }}
                />
              </View>
            ))}
          </View>
          <View
            style={{
              backgroundColor: colors.blue,
              marginVertical: 50,
              paddingVertical: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 27,
                fontFamily: fontFamily.poppins.semibold,
                color: colors.white,
                margin: 10,
                lineHeight: 30,
              }}>
              How to Setup IPTV on your Device
            </Text>
            <Button text="TUTORIAL" rightIcon={images.roundedPlayIcon} />
          </View>
          <View
            style={{
              margin: 10,
              paddingHorizontal: 5,
              borderRadius: 25,
              backgroundColor: colors.white,
              ...commonStyle.shadow,
            }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: fontFamily.poppins.medium,
                color: colors.darkGray,
              }}>
              <Text
                style={{
                  color: colors.lightBlue,
                  fontFamily: fontFamily.poppins.bold,
                }}>
                Star-iptv
              </Text>
              , Best IPTV Provider
            </Text>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text
              style={{
                color: colors.black,
                fontFamily: fontFamily.poppins.bold,
                fontSize: 50,
                marginTop: 20,
              }}>
              #1 IPTV
            </Text>
            <Text
              style={{
                color: colors.black,
                fontFamily: fontFamily.poppins.bold,
                fontSize: 18,
                marginTop: 20,
              }}>
              Join now and watch our Service on any device!
            </Text>
            <Text
              style={{
                color: colors.darkGray,
                fontFamily: fontFamily.poppins.medium,
                fontSize: 14,
                marginTop: 20,
              }}>
              Watch your favorite Movies, TV Series and Live TV channels without
              any extra cost, as part of your{' '}
              <Text style={{ fontWeight: '700' }}>star-iptv</Text> subscription!{' '}
              {'\n\n'}
              Great Entertainment for Everyone.
            </Text>
          </View>
          <Image
            source={images.movies}
            style={{
              height: WINDOW_HEIGHT * 0.34,
              width: WINDOW_WIDTH,
              resizeMode: 'contain',
              marginTop: 35,
            }}
          />
          <View style={{ padding: 10, marginTop: 50 }}>
            <Image
              source={images.production}
              style={{
                height: WINDOW_HEIGHT * 0.34,
                width: WINDOW_WIDTH,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: colors.blue,
                fontFamily: fontFamily.poppins.bold,
                fontSize: 22,
                marginTop: 15,
                textAlign: 'center',
              }}>
              SPORTS - MOVIES - SERIES
            </Text>
            <Text
              style={{
                color: colors.primaryBlack,
                fontFamily: fontFamily.poppins.medium,
                fontSize: 14,
                textAlign: 'center',
              }}>
              With star-itv you can watch what you want, whenever you want, the
              biggest events in sports, the best movies and TV series.
            </Text>
          </View>
          <View style={{ padding: 10, marginTop: 50 }}>
            <Image
              source={images.family}
              style={{
                height: WINDOW_HEIGHT * 0.34,
                width: WINDOW_WIDTH,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{
                color: colors.blue,
                fontFamily: fontFamily.poppins.bold,
                fontSize: 22,
                marginTop: 15,
                textAlign: 'center',
              }}>
              FAMILY AND KIDS
            </Text>
            <Text
              style={{
                color: colors.primaryBlack,
                fontFamily: fontFamily.poppins.medium,
                fontSize: 14,
                textAlign: 'center',
              }}>
              With star-itv there’s something for everyone in your home. you can
              enjoy watching kid-friendly shows and family movies with your Kids.
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <Text
              style={{
                color: colors.blue,
                fontFamily: fontFamily.poppins.bold,
                fontSize: 22,
                marginTop: 15,
                textAlign: 'center',
              }}>
              ALL THE DEVICES ARE SUPPORTED
            </Text>
            <Text
              style={{
                color: colors.primaryBlack,
                fontFamily: fontFamily.poppins.medium,
                fontSize: 14,
                textAlign: 'center',
              }}>
              Now you can watch live TV & VOD at home or on-the-go — wherever you
              are, anytime, on your favorite devices.
            </Text>
            <Image
              source={images.mobileDevices}
              style={{
                height: WINDOW_HEIGHT * 0.2,
                width: WINDOW_WIDTH - 20,
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>

        <Footer />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  heading: {
    fontFamily: fontFamily.poppins.medium,
    fontSize: 26,
    color: colors.black,
    textAlign: 'center',
    marginTop: 20,
  },
  description: {
    fontFamily: fontFamily.poppins.semibold,
    fontSize: 14,
    color: colors.darkGray,
    textAlign: 'center',
    marginTop: 20,
  },
  primaryHeading: {
    fontSize: 43,
    color: colors.primaryBlack,
    fontFamily: fontFamily.teko.regular,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  characteristicsView: {
    paddingVertical: 10,
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
    height: 4,
    alignSelf: 'center',
    marginVertical: 20,
  },
});
