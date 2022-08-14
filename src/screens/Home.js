import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {
  images,
  whyChooseUs,
  pricingPlan,
  feedbacks,
  faqs,
  fontFamily,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
  colors,
} from '../constant';
import {GradientButton, FAQ, Button} from '../components';
import Header from '../components/Header';
import {useNavigation} from '@react-navigation/native';
import commonStyle from '../constant/commonStyle';

export const Home = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} showVerticalScrollIndicator={false}>
      {/* <Header image={images.menu} /> */}
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'#403FFC'}
      />
      {/* <View style={{backgroundColor: '#fff', height: 100}}> */}
      {/* <TouchableOpacity style={{ marginTop: 50, }} onPress={() => navigation.toggleDrawer()}> */}
      {/*<Image*/}
      {/*  source={images.menu}*/}
      {/*  resizeMode={'contain'}*/}
      {/*  style={{*/}
      {/*    width: 30,*/}
      {/*    height: 30,*/}
      {/*    tintColor: '#fff' ,*/}
      {/*    alignSelf: 'center'*/}
      {/*  }}*/}
      {/*/>*/}
      {/* </TouchableOpacity> */}
      {/* </View> */}

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
          onPress={() => navigation.toggleDrawer()}
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
      <View style={{marginVertical: 50, marginHorizontal: 20}}>
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
                backgroundColor: plan.color,
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
                  color: plan.color,
                  marginTop: -35,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontFamily: fontFamily.poppins.medium,
                  fontSize: 50,
                  color: plan.color,
                }}>
                {plan.price}
              </Text>
            </View>
            <View style={{paddingHorizontal: 15}}>
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
                    style={{width: 6, height: 6, resizeMode: 'contain'}}
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
                backgroundColor: plan.color,
              }}
              text={'SUBSCRIBE NOW'}
              textStyle={{fontSize: 14}}
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
      <View style={{paddingHorizontal: 10}}>
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
          Watch your favorite Movies, TV Series and Live TV channels without any
          extra cost, as part of your{' '}
          <Text style={{fontWeight: '700'}}>star-iptv</Text> subscription!{' '}
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
      <View style={{padding: 10, marginTop: 50}}>
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
      <View style={{padding: 10, marginTop: 50}}>
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
      <View style={{padding: 10}}>
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
        <Image
          source={images.manAndChild}
          style={{
            height: WINDOW_HEIGHT * 0.55,
            width: WINDOW_WIDTH - 20,
            resizeMode: 'contain',
            marginTop: 50,
          }}
        />
      </View>
      <View style={{padding: 10}}>
        <Text
          style={{
            color: colors.blue,
            fontFamily: fontFamily.poppins.semibold,
            fontSize: 25,
          }}>
          FAQ
        </Text>
        <View
          style={{
            width: 40,
            height: 4,
            backgroundColor: colors.lightGreen,
            marginVertical: 15,
          }}
        />
        <Text
          style={{
            fontFamily: fontFamily.poppins.bold,
            fontSize: 21,
            color: colors.primaryBlack,
          }}>
          If you still have any questions, please read the section below or
          contact us directly.
        </Text>
        {faqs.map((faq, i) => (
          <FAQ key={i} question={faq.question} answer={faq.answer} />
        ))}
      </View>
      <View style={{marginTop: 50}}>
        {feedbacks.map((feedback, i) => (
          <View
            key={i}
            style={{
              borderRadius: 15,
              backgroundColor: colors.white,
              margin: 10,
              padding: 20,
              ...commonStyle.shadow,
            }}>
            <Text
              style={{
                color: colors.secondaryGray,
                fontFamily: fontFamily.poppins.medium,
                fontSize: 14,
              }}>
              {feedback.text}
            </Text>
            <Text
              style={{
                color: colors.darkGray,
                fontFamily: fontFamily.poppins.semibold,
                fontSize: 14,
                marginTop: 20,
              }}>
              {feedback.user}
            </Text>
          </View>
        ))}
      </View>
      <View style={{marginTop: 20, marginBottom: 100, padding: 10}}>
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
            style={{
              backgroundColor: colors.secondaryPurple,
              ...commonStyle.shadow,
            }}
            text={'SUBSCRIBE NOW'}
            textStyle={{fontSize: 13, fontFamily: fontFamily.poppins.bold}}
            rightIcon={images.playIcon}
            rightIconStyle={{height: 13, width: 13}}
          />
          <Button
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
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
