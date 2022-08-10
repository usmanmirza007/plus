import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import images from '../constant/images';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../constant/dimensions';
import {GradientButton} from '../components/GradientButton';

export const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.mainImage} source={images.mainImage} />
      <View style={styles.mainView}>
        <Text style={[styles.heading, {color: '#fff'}]}>
          BEST IPTV SERVER PROVIDER
        </Text>
        <Text
          style={{
            color: '#fff',
            fontWeight: '600',
            fontSize: 16,
            textAlign: 'center',
            marginTop: 20,
          }}>
          +154,000 TV Channels & VODs in 4K & Ultra HD Picture Quality
        </Text>
        <GradientButton
          text={'VIEW PLANS & FEATURES'}
          btnStyle={{marginTop: 20}}
        />
      </View>
      <Text style={[styles.heading, {marginTop: 50, marginBottom: 30}]}>
        WHY CHOOSE US
      </Text>

      <View style={styles.separator} />

      <View style={styles.characteristicsView}>
        <Text style={styles.subHeading}>100% SATISFACTION GUARANTEED</Text>
        <Text style={{marginHorizontal: 30}}>
          We offer you a fast IPTV server ranked as one of the best in Uk and
          Europe. A stable server with a high bandwidth and Anti Freezing
          Technology. We also offer a fast order delivery service using email.
        </Text>
      </View>

      <View style={styles.characteristicsView}>
        <Text style={styles.subHeading}>IPTV PREMIUM STREAMING</Text>
        <Text style={{marginHorizontal: 30}}>
          Your IPTV subscription offers you live premium worldwide TV channels.
          No need to look anywhere else, everything is there: Sport,
          Entertainment, Kids Channels, News, VOD, Films, TV series ..etc
        </Text>
      </View>

      <View style={styles.characteristicsView}>
        <Text style={styles.subHeading}>WORLD CLASS SUPPORT</Text>
        <Text style={{marginHorizontal: 30}}>
          We offer in-depth tutorials and client support in live chat to make
          installation, and streaming amazingly quick and simple, no matter
          where you are in the world.
        </Text>
      </View>

      <View style={styles.characteristicsView}>
        <Text style={styles.subHeading}>VIDEO ON DEMAND</Text>
        <Text style={{marginHorizontal: 30}}>
          Enjoy more than 154000 TV Channels, Movies and TV shows! with Features
          of Catch Up & EPG (Electronic Program Guide) for all UK Channels
        </Text>
      </View>

      <View style={styles.characteristicsView}>
        <Text style={styles.subHeading}>COMPATIBILITY</Text>
        <Text style={{marginHorizontal: 30}}>
          Our IPTV server support all the TV boxes : Android, Smart Tv, Mag Box,
          Firestick, IOS, Windows and Mac OS, . All devices can be supported on
          request
        </Text>
      </View>

      <View style={styles.characteristicsView}>
        <Text style={styles.subHeading}>100% Satisfaction Guaranteed</Text>
        <Text style={{marginHorizontal: 30}}>
          We offer you a fast IPTV server ranked as one of the best in Uk and
          Europe. A stable server with a high bandwidth and Anti Freezing
          Technology. We also offer a fast order delivery service using email.
        </Text>
      </View>
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
    paddingHorizontal: 30,
  },
  mainImage: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT * 0.6,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 26,
    color: '#000000',
    fontWeight: '700',
    textAlign: 'center',
  },
  characteristicsView: {
    width: '100%',
    height: 120,
    marginTop: 10,
    alignItems: 'center',
  },
  subHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  separator: {
    backgroundColor: '#0693E3',
    width: WINDOW_WIDTH * 0.25,
    height: 1,
    alignSelf: 'center',
  },
});
