import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
//Resposiveness
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      {/*Topbar start*/}
      <View style={styles.topbox}>
        <View style={styles.leftsidebox}>
          <View style={styles.innerleftbox}></View>
          <View style={styles.innerrightbox}>
            <Image
              style={styles.img}
              source={require("../../assets/starpic3.jpg")}
            />
            <Text style={styles.text1}>STAR</Text>
          </View>
        </View>
        <View style={styles.rightsidebox}>
          <TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
      {/*Topbar End*/}
      {/*Image background start*/}
      <View style={styles.imagebackgroundbox}>
        <Image
          style={styles.image}
          source={require("../../assets/backimage4.jpg")}
        />
      </View>
      {/*Image background End*/}
      <View style={styles.textbox}>
        <Text style={styles.text2}>WHY CHOOSE US</Text>
      </View>
      <View style={styles.textbox2}>
        <Text style={styles.text3}>100% SATISFACTION GUARANTEED</Text>
        <Text style={{ marginHorizontal: hp("2%") }}>
          We offer you a fast IPTV server ranked as one of the best in Uk and
          Europe. A stable server with a high bandwidth and Anti Freezing
          Technology. We also offer a fast order delivery service using email.
        </Text>
      </View>

      <View style={styles.textbox2}>
        <Text style={styles.text3}>IPTV PREMIUM STREAMING</Text>
        <Text style={{ marginHorizontal: hp("2%") }}>
          Your IPTV subscription offers you live premium worldwide TV channels.
          No need to look anywhere else, everything is there: Sport,
          Entertainment, Kids Channels, News, VOD, Films, TV series ..etc
        </Text>
      </View>

      <View style={styles.textbox2}>
        <Text style={styles.text3}>WORLD CLASS SUPPORT</Text>
        <Text style={{ marginHorizontal: hp("2%") }}>
          We offer in-depth tutorials and client support in live chat to make
          installation, and streaming amazingly quick and simple, no matter
          where you are in the world.
        </Text>
      </View>

      <View style={styles.textbox2}>
        <Text style={styles.text3}>VIDEO ON DEMAND</Text>
        <Text style={{ marginHorizontal: hp("2%") }}>
          Enjoy more than 154000 TV Channels, Movies and TV shows! with Features
          of Catch Up & EPG (Electronic Program Guide) for all UK Channels
        </Text>
      </View>

      <View style={styles.textbox2}>
        <Text style={styles.text3}>COMPATIBILITY</Text>
        <Text style={{ marginHorizontal: hp("2%") }}>
          Our IPTV server support all the TV boxes : Android, Smart Tv, Mag Box,
          Firestick, IOS, Windows and Mac OS, . All devices can be supported on
          request
        </Text>
      </View>

      <View style={styles.textbox2}>
        <Text style={styles.text3}>100% Satisfaction Guaranteed</Text>
        <Text style={{ marginHorizontal: hp("2%") }}>
          We offer you a fast IPTV server ranked as one of the best in Uk and
          Europe. A stable server with a high bandwidth and Anti Freezing
          Technology. We also offer a fast order delivery service using email.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "200%",
  },
  topbox: {
    width: wp("100%"),
    height: hp("10%"),
    //backgroundColor: "green",
    flexDirection: "row",
  },
  leftsidebox: {
    width: "80%",
    height: "100%",
    backgroundColor: "red",
    flexDirection: "row",
  },
  rightsidebox: {
    width: "20%",
    height: "100%",
    // backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  innerleftbox: {
    width: "20%",
    height: "100%",
    backgroundColor: "white",
  },
  innerrightbox: {
    width: "80%",
    height: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  img: {
    width: "20%",
    height: "80%",
    resizeMode: "contain",
  },
  text1: {
    fontSize: hp("2.5%"),
    color: "gray",
    fontWeight: "bold",
  },
  imagebackgroundbox: {
    width: wp("100%"),
    height: hp("70%"),
    backgroundColor: "green",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
    //overflow: "hidden",
  },
  textbox: {
    width: wp("100%"),
    height: hp("7%"),
    // backgroundColor: "green",
    marginTop: hp("6%"),
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    fontWeight: "bold",
    fontSize: hp("3%"),
  },
  textbox2: {
    width: wp("100%"),
    height: hp("15%"),
    //backgroundColor: "green",
    marginTop: hp("2%"),
    //justifyContent: "center",
    alignItems: "center",
  },
  text3: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
