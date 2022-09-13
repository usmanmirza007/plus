import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Pressable,
  SafeAreaView,
} from 'react-native';
import { Button, TextInputWrapper, DropdownWrapper } from '../components';
import {
  colors,
  fontFamily,
  images,
  SCREEN_WIDTH,
  STATUS_BAR_HEIGHT,
  WINDOW_WIDTH,
} from '../constant';
export const Payment = ({navigation, route}) => {
  const {planDuration, planPrice} = route.params;
  const [showOrder, setShowOrder] = useState(false);
  const [isCheckboxActive, setIsCheckboxActive] = useState(false);
  const [devices, setDevices] = useState([
    { label: 'Android', value: 'android' },
    { label: 'IOS', value: 'ios' },
  ]);
  const [device, setDevice] = useState(devices[0]);
  const [paymentMethods, setPaymentMethods] = useState([
    { label: 'Paypal', value: 'paypal' },
    { label: 'Credit Card', value: 'creditCard' },
  ]);
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

  return (
    <SafeAreaView style={{ backgroundColor: '#ffffff', flex: 1 }}>
      <View style={styles.header}>
        <Pressable onPress={() => setShowOrder(show => !show)} style={[styles.headerRow, { borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#d6d7db' }]}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize: 15, fontFamily: fontFamily.poppins.medium, color: colors.secondaryBlack }}>
              {showOrder ? 'Show' : 'Hide'} Order Summary
            </Text>
            <Image source={images.arraowDown} style={{width: 30, height: 30, resizeMode: 'contain', transform: [{ rotate: showOrder ? '180deg': '0deg' }]}} />
          </View>
          <Text style={{ fontSize: 18, fontFamily: fontFamily.poppins.medium, color: colors.secondaryBlack }}>$ {planPrice}</Text>
        </Pressable>
        {showOrder && (
          <>
            <View style={styles.headerRow}>
              <Text style={styles.headerText}>{planDuration}</Text>
              <Text style={styles.headerText}>x1</Text>
              <Text style={styles.headerText}>$ {planPrice}</Text>
            </View>
            <View style={[styles.headerRow, { borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#d6d7db' }]}>
              <Text style={styles.headerText}>Subtotal</Text>
              <Text style={styles.headerText}>$ {planPrice}</Text>
            </View>
            <View style={styles.headerRow}>
              <Text style={{ fontSize: 18, fontFamily: fontFamily.poppins.semibold, color: '#555555' }}>
                Total
              </Text>
              <Text style={{ fontSize: 18, fontFamily: fontFamily.poppins.bold, color: '#555555' }}>$ {planPrice}</Text>
            </View>
          </>
        )}
      </View>
      <ScrollView style={{ paddingHorizontal: 30 }}>
        <Text style={styles.heading}>Customer information</Text>
        <TextInputWrapper title='Email Address' placeholder='Email Address' value={''} onChangeText={(text) => console.log(text)} required={true} />

        <Text style={styles.heading}>Billing details</Text>
        <TextInputWrapper title='Full name' value={''} onChangeText={(text) => console.log(text)} />
        <TextInputWrapper title='Whatsapp Number' value={''} onChangeText={(text) => console.log(text)} required={true} />
        <DropdownWrapper title='Device' items={devices} setItems={setDevices} value={device} setValue={setDevice} required={true} />
        <TextInputWrapper title='Add your MAC address' value={''} onChangeText={(text) => console.log(text)} />

        <Text style={styles.heading}>Payment</Text>

        <View style={{ borderColor: colors.blur, borderRadius: 5, borderWidth: 1 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingVertical: 15 }}>
            <Text style={{ color: '#555555', fontSize: 15, fontFamily: fontFamily.poppins.medium, marginLeft: 5, }}>Stripe Pay</Text>
            <Image source={images.stripeLogo} style={{ width: 200, height: 200, resizeMode: 'contain', borderRadius: 20 }} />
          </View>
          <View style={{ backgroundColor: '#f9f9f9', borderTopColor: colors.blur, borderTopWidth: 1, padding: 15 }}>
            <DropdownWrapper title='Payment Method' items={paymentMethods} setItems={setPaymentMethods} value={paymentMethod} setValue={setPaymentMethod} required={true} style={{ width: WINDOW_WIDTH - 90 }} />
          </View>
        </View>

        <Pressable onPress={() => setIsCheckboxActive(isCheckboxActive => !isCheckboxActive)} style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image source={isCheckboxActive ? images.checkboxActive : images.checkbox} style={{ width: 25, height: 25 }} />
          <Text style={{ color: '#555555', fontSize: 15, fontFamily: fontFamily.poppins.medium, marginLeft: 5, textAlign: 'justify', width: WINDOW_WIDTH - 90 }}>
            I would like to receive exclusive emails with discounts and product information
          </Text>
        </Pressable>

        <Text style={{ color: '#777777', fontSize: 12, fontFamily: fontFamily.poppins.regular, marginTop: 10, textAlign: 'justify' }}>
          Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our
          <Text onPress={() => console.log('text pressed')} style={{ color: '#133196', fontSize: 12, fontFamily: fontFamily.poppins.regular, padding: 0, margin: 0 }}> privacy policy</Text>
        </Text>

        <Button
          style={{
            marginTop: 20,
            backgroundColor: '#133196',
            alignSelf: 'flex-start',
            marginLeft: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: SCREEN_WIDTH - 60,
            borderRadius: 5,
          }}
          text={`Place Order  $ ${planPrice}`}
          leftIcon={images.lock}
          leftIconStyle={{ width: 20, heading: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 10 + STATUS_BAR_HEIGHT,
    marginHorizontal: 10,
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