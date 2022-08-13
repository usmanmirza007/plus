import React, { useState, useEffect } from 'react';
import { View, Image, ToastAndroid, StatusBar, TouchableOpacity, Text, StyleSheet, Switch } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const SideMenu = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#000"
      />
      <ScrollView style={{}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 15, marginTop: 20 + StatusBar.currentHeight }}>
          <Text style={{ fontSize: 16, color: '#000' }}>Home</Text>
        </TouchableOpacity>
        <View style={{ borderColor: '#2D2D2D', opacity: 0.2, borderWidth: .5, marginTop: 20, }} /> 
        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={{ fontSize: 16, color: '#000' }}>Pricing</Text>
        </TouchableOpacity>
        <View style={{ borderColor: '#2D2D2D', opacity: 0.2, borderWidth: .5, marginTop: 20, }} /> 
        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={{ fontSize: 16, color: '#000' }}>Tutorial</Text>
        </TouchableOpacity>
        <View style={{ borderColor: '#2D2D2D', opacity: 0.2, borderWidth: .5, marginTop: 20, }} /> 
        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={{ fontSize: 16, color: '#000' }}>FAQ</Text>
        </TouchableOpacity>
        <View style={{ borderColor: '#2D2D2D', opacity: 0.2, borderWidth: .5, marginTop: 20, }} /> 
        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={{ fontSize: 16, color: '#000' }}>Reseller</Text>
        </TouchableOpacity>
        <View style={{ borderColor: '#2D2D2D', opacity: 0.2, borderWidth: .5, marginTop: 20, }} /> 
        <TouchableOpacity onPress={() => navigation.navigate('ChannelList')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={{ fontSize: 16, color: '#000' }}>Channel List</Text>
        </TouchableOpacity>
        <View style={{ borderColor: '#2D2D2D', opacity: 0.2, borderWidth: .5, marginTop: 20, }} /> 
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={{ fontSize: 16, color: '#000' }}>Contact Us</Text>
        </TouchableOpacity>
        <View style={{ borderColor: '#2D2D2D', opacity: 0.2, borderWidth: .5, marginTop: 20, }} /> 


      </ScrollView>
    </View>
  );
}

// export default sideMenu
const styles = StyleSheet.create({
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  colortext: {
    color: 'white'
  },

});

export default SideMenu