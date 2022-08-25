import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import {
  images,
  fontFamily,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  resellerData1,
  resellerPricingPlans,
  colors,
  resellerData2,
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
            Advantages of becoming A-Plus TV Reseller
          </Text>

          <View style={styles.separator} />

          <Text style={{ fontFamily: fontFamily.poppins.regular, fontSize: 14, color: '#7A7A7A', textAlign: 'center' }}>
            Become our A-Plus TV reseller start making extra money !
          </Text>

          <Text style={styles.heading}>
            DISCOVER THE EASY WAY TO MAKE MONEY BY BECOMING A-Plus TV RESELLER
          </Text>

          <Text style={styles.description}>
            Do you know that more than 50 millions people in the world are using A-Plus TV services? So why don’t you start your own A-Plus TV business and make more than €2,000 per month .
          </Text>

          <Text style={styles.heading}>
            What is meant by A-Plus TV Reseller?
          </Text>

          <Text style={styles.description}>
            So, What is meant by A-Plus TV Reseller? he is the person who gets A-Plus TV Panel to create and sell A-Plus TV Subscription to his clients, through your A-Plus TV Panel you can create Free Trial, 1 month, 3 Months, 6 Months and 1 Year A-Plus TV Subscriptions.
          </Text>

          <Text style={styles.description}>
            Basically, A-Plus TV Resellers Panel work through something called Credit Points. {'\n\n'} Credit Points are used to activate the A-Plus TV Subscriptions.
          </Text>

          <Text style={styles.heading}>
            HOW TO START MAKING MONEY WITH DAILY A-Plus TV RESELLER ?
          </Text>

          <Text style={styles.description}>
            Simply. Register for a reseller account and then advertise our service to your neighbors, family users, online forums & social media or build your own website & sell our A-Plus TV service with your own service name to thousands of people online.
            {'\n\n'}For making this more clear and easy to understand I open up an example:  The clients buy A-Plus TV service for 1 year in 80$, but you buy 1 year means 1 credit (30 $) from us, and sell it 80$ or as you wish (good benefit). So the conclusion of this explanation is 1 credit is for 1 year and each credit is 30$
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

          <View style={[styles.separator, { backgroundColor: '#4328B7' }]} />

          <Text style={{ color: '#8300E9', fontSize: 30, fontFamily: fontFamily.poppins.bold, textAlign: 'center', marginTop: 20 }}>
            HOW DOES A-Plus TV PANEL WORK?
          </Text>

          <Text style={{ color: '#3A3A3A', fontSize: 25, fontFamily: fontFamily.poppins.bold, textAlign: 'center', marginTop: 20 }}>
            Credit Points Calculation
          </Text>

          <Text style={{ color: '#3A3A3A', fontSize: 18, fontFamily: fontFamily.poppins.bold, textAlign: 'center', marginTop: 20 }}>
            in our Reseller Panel the Credit works are used as below:
            {'\n'}1 Month Subscription = 1 Credit Points.
            {'\n'}3 Months Subscription = 3 Credit Points.
            {'\n'}6 Months Subscription = 6 Credit Points.
            {'\n'}1 Year Subscription = 12 Credit Points.
          </Text>

          <Text style={{ color: '#3A3A3A', fontSize: 25, fontFamily: fontFamily.poppins.bold, textAlign: 'center', marginTop: 20 }}>
            How many Credit Points will you get?
          </Text>

          <Text style={{ color: '#3A3A3A', fontSize: 18, fontFamily: fontFamily.poppins.semibold, textAlign: 'center', marginTop: 20 }}>
            300 $ = 120 Credit Points.
            {'\n'}600$ = 240 Credit Points.
            {'\n'}900 $= 360 Credit Points.
            {'\n'}1250 $ = 600 Credit Points.
          </Text>

          {resellerData1.map(({ image, title, desc }, i) => (
            <View style={[styles.characteristicsView, commonStyle.shadow, { paddingVertical: 20, borderWidth: 2, marginTop: 20 }]} key={i}>
              <Image source={image} style={{ height: 100, width: 100 }} />
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
          
          <View style={{ marginVertical: 50, marginHorizontal: 10 }}>
            <Text style={{fontSize: 43, fontFamily: fontFamily.teko.semibold, color: colors.primaryBlack, textAlign: 'center'}}>
              Plans & Features
            </Text>
            <View style={[styles.separator, { backgroundColor: '#4328B7' }]} />
            {resellerPricingPlans.map((plan, i) => (
              <View
                key={i}
                style={[
                  commonStyle.shadow,
                  {
                    overflow: 'hidden',
                    marginTop: 20,
                    backgroundColor: colors.darkPurple,
                  },
                ]}>
                <View
                  style={{
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
                    {plan.points} CREDIT POINTS
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
                  }}>
                  <Text
                    style={{
                      fontFamily: fontFamily.poppins.medium,
                      fontSize: 20,
                      color: colors.white,
                      marginTop: -35,
                    }}>
                    $
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily.poppins.medium,
                      fontSize: 50,
                      color: colors.white,
                    }}>
                    {plan.price}
                  </Text>
                  <Text
                    style={{
                      fontFamily: fontFamily.poppins.regular,
                      fontSize: 14,
                      color: colors.white,
                      marginTop: 25,
                    }}>
                    / {plan.duration}
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
                          color: colors.white,
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
                    backgroundColor: '#4328B7',
                    borderRadius: 0,
                  }}
                  text={'CONTACT US'}
                  textStyle={{ fontSize: 14 }}
                />
              </View>
            ))}
          </View>

          <Text style={{fontSize: 43, fontFamily: fontFamily.teko.regular, color: colors.primaryBlack, textAlign: 'center', marginTop: 50 }}>
          A-Plus TV A-Plus TV RESELLER
            </Text>

            <View style={[styles.separator, { backgroundColor: '#4328B7' }]} />

          <Text style={{ color: '#333333', fontSize: 15, fontFamily: fontFamily.poppins.semibold, textAlign: 'center', marginTop: 20 }}>
          At A-Plus TV, we believe that we provide the best A-Plus TV Resellers prices.
            {'\n'}Moreover, our A-Plus TV Panel is very easy to access and use.
            {'\n\n'}In Addition, you don’t need any equipment to become A-Plus TV Reseller, you can access your own panel and activate the A-Plus TV subscriptions using your Smartphone or your Laptop.
            {'\n'}Working in A-Plus TV Industry is very easy, flexible working whenever and wherever you want.
            {'\n'}Nevertheless, we have worldwide premium Live TV Channels and VOD.
          </Text>

          <View style={[styles.separator, { backgroundColor: '#4328B7' }]} />

          <Text style={{ color: '#8300E9', fontSize: 30, fontFamily: fontFamily.poppins.bold, textAlign: 'center', marginTop: 20 }}>
          THE CHEAPEST A-Plus TV RESELLERS PRICES
          </Text>

          <Text style={{ color: '#333333', fontSize: 15, fontFamily: fontFamily.poppins.semibold, textAlign: 'center', marginTop: 20 }}>
          Moreover, you can target clients all over the world, for example, Arabs who are interested in the UK, USA, Europe, Asia, Latin, America, Africa.
          </Text>
          
          {resellerData2.map(({ image, title, desc }, i) => (
            <View style={styles.characteristicsView} key={i}>
              <View style={{ height: 45, width: 45, backgroundColor: '#C5DFFF', borderRadius: 25, justifyContent: 'center', alignItems: 'center',}}>
                <Image source={image} style={{ height: 30, width: 30, tintColor: colors.blue }} />
              </View>
              <Text style={[styles.subHeading, { marginTop: 20 }]}>{title}</Text>
              <Text
                style={{
                  fontSize: 16,
                  marginHorizontal: 10,
                  marginTop: 10,
                  textAlign: 'center',
                  fontFamily: fontFamily.poppins.medium,
                  color: colors.darkGray,
                }}>
                {desc}
              </Text>
            </View>
          ))}
        </View>

        <View style={{marginTop: 60}} />

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
    marginTop: 40,
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
