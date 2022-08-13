import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { ScrollView } from 'react-native-gesture-handler';
const ContactUs = () => {
  const [collapseState, setCollapseState] = useState(false);

  return (
    <View style={{ backgroundColor: '#fff' }}>
      <ScrollView>

        <View style={{ backgroundColor: '#504ebd', alignItems: 'center' }}>
          <Text style={{ alignSelf: 'center', fontSize: 24, fontWeight: '700', marginTop: 40, color: '#fff' }}>CONTACT US</Text>
          <View style={{ backgroundColor: '#fff', width: '90%', marginTop: 20, alignItems: 'center' }}>
            <Text style={{ alignSelf: 'center', fontSize: 24, fontWeight: '700', marginTop: 25, color: '#504ebd' }}>Send us a Message</Text>
            <TextInput placeholder='First Name' style={{ alignSelf: 'center', fontSize: 12, borderColor: '#504ebd', borderWidth: 1, width: '80%', marginTop: 20 }} />
            <TextInput placeholder='Last Name' style={{ alignSelf: 'center', fontSize: 12, borderColor: '#504ebd', borderWidth: 1, width: '80%', marginTop: 20 }} />
            <TextInput placeholder='Email' style={{ alignSelf: 'center', fontSize: 12, borderColor: '#504ebd', borderWidth: 1, width: '80%', marginTop: 20 }} />
            <TextInput placeholder='Message' style={{ alignSelf: 'center', height: 86, fontSize: 12, borderColor: '#504ebd', borderWidth: 1, width: '80%', marginTop: 20 }} />
            <TouchableOpacity style={{ backgroundColor: '#0c71c3', marginLeft: 25, marginTop: 20, height: 50, width: '50%', alignSelf: 'flex-start', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 15, color: '#fff' }}>SEND MESSAGE</Text>
            </TouchableOpacity>
            <View style={{ backgroundColor: '#0c71c3', width: '100%', marginTop: 20 }}>
              <Text style={{ alignSelf: 'flex-start', fontSize: 20, marginLeft: 25, fontWeight: '700', marginTop: 25, color: '#fff' }}>CONTACT US</Text>
              <Text style={{ alignSelf: 'flex-start', color: '#fff', marginTop: 10, marginLeft: 25, }}>admin@star-iptv.com</Text>
              <Text style={{ alignSelf: 'flex-start', color: '#fff', marginLeft: 25, marginBottom: 20 }}>Contact us on whatsapp</Text>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: '#000000', paddingHorizontal: 10, marginBottom: 0, paddingVertical: 10, marginTop: 25 }}>
          <Text style={{ color: '#fff', fontSize: 20, fontWeight: '700' }}>CONTACT US</Text>
          <Text style={{ color: '#fff', marginTop: 10 }}>admin@star-iptv.com</Text>
          <Text style={{ color: '#fff' }}>We reply within 1h</Text>
          <Text style={{ color: '#fff', fontSize: 20, marginTop: 10, fontWeight: '700' }}>MAIN MENU</Text>
          <Text style={{ color: '#fff', marginTop: 10 }}>Home</Text>
          <Text style={{ color: '#fff' }}>Subscription Plans</Text>
          <Text style={{ color: '#fff' }}>Contact Us</Text>
          <Text style={{ color: '#fff' }}>Terms and Conditions</Text>
          <Text style={{ color: '#fff' }}>Privacy Policy</Text>
          <Text style={{ color: '#fff', fontSize: 20, marginTop: 10, fontWeight: '700' }}>MAIN MENU</Text>
          <Text style={{ color: '#fff', marginTop: 10 }}>Tutorial</Text>
          <Text style={{ color: '#fff' }}>FAQ</Text>
          <Text style={{ color: '#fff' }}>Contact Us</Text>
          <Text style={{ color: '#fff' }}>© 2021 star-iPtv. All Rights Reserved</Text>
        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({})

export default ContactUs;
