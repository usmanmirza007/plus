import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Button } from '../components';
import {
  colors,
  fontFamily,
  images,
  STATUS_BAR_HEIGHT,
  WINDOW_HEIGHT,
  WINDOW_WIDTH,
} from '../constant';
import commonStyle from '../constant/commonStyle';
export const Payment = () => {
  const [showOrder, setShowOrder] = useState(false);

  return (
    <View style={{ backgroundColor: '#ffffff' }}>
      <View style={styles.header}>
        <Pressable onPress={() => setShowOrder(show => !show)} style={[styles.headerRow, { borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#d6d7db' }]}>
          <Text style={{ fontSize: 15, fontFamily: fontFamily.poppins.medium, color: colors.secondaryBlack }}>
            {showOrder ? 'Show' : 'Hide'} Order Summary
          </Text>
          <Text style={{ fontSize: 18, fontFamily: fontFamily.poppins.medium, color: colors.secondaryBlack }}>$ 14.00</Text>
        </Pressable>
        {showOrder && (
          <>
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>1 MONTH</Text>
              <Text style={styles.headerText}>x1</Text>
              <Text style={styles.headerText}>$ 14.00</Text>
            </View>
            <View style={[styles.headerRow, { borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#d6d7db' }]}>
              <Text style={styles.headerText}>Subtotal</Text>
              <Text style={styles.headerText}>$ 14.00</Text>
            </View>
            <View style={styles.headerRow}>
              <Text style={{ fontSize: 18, fontFamily: fontFamily.poppins.semibold, color: '#555555' }}>
                Total
              </Text>
              <Text style={{ fontSize: 18, fontFamily: fontFamily.poppins.bold, color: '#555555' }}>$ 14.00</Text>
            </View>
          </>
        )}
      </View>
      <ScrollView style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Customer information</Text>
        <Text style={styles.title}>Email Address</Text>
        <TextInput placeholder="First Name" style={styles.textInput} placeholderTextColor={'#555555'} />
        <Text style={styles.title}>Email Address</Text>
        <TextInput placeholder="Last Name" style={styles.textInput} placeholderTextColor={'#555555'} />
        <Text style={styles.title}>Email Address</Text>
        <TextInput placeholder="Email" style={styles.textInput} placeholderTextColor={'#555555'} />
        <Text style={styles.title}>Email Address</Text>
        <TextInput placeholder="Message" style={[styles.textInput, { height: 86 }]} placeholderTextColor={'#555555'} />
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10 + STATUS_BAR_HEIGHT,
    margin: 10,
    backgroundColor: '#f9fafb',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerText: {
    fontSize: 14,
    fontFamily: fontFamily.poppins.regular,
    color: '#555555',
  },
  heading: {
    fontSize: 20,
    fontFamily: fontFamily.poppins.semibold,
    marginTop: 22,
    marginBottom: 15,
    color: '#404040',
  },
  title: {
    fontSize: 13,
    fontFamily: fontFamily.poppins.regular,
    marginTop: 15,
    color: '#404040',
  },
  textInput: {
    fontSize: 14,
    borderColor: colors.blur,
    borderWidth: 1,
    borderRadius: 4,
    marginTop: 5,
    width: WINDOW_WIDTH - 60,
    color: colors.black,
    fontFamily: fontFamily.poppins.regular,
    padding: 12,
  },
});