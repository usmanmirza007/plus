import React, { useState, useEffect } from 'react';
import { View, StatusBar, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { colors, fontFamily, STATUS_BAR_HEIGHT } from '../constant';

const SideMenu = () => {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', }}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor={colors.primaryBlue}
      />
      <ScrollView style={{}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ marginLeft: 15, marginTop: 20 + STATUS_BAR_HEIGHT }}>
          <Text style={styles.itemText}>Home</Text>
        </TouchableOpacity>
        <View style={styles.separator} /> 
        <TouchableOpacity onPress={() => navigation.navigate('Pricing')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={styles.itemText}>Pricing</Text>
        </TouchableOpacity>
        <View style={styles.separator} /> 
        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={styles.itemText}>Tutorial</Text>
        </TouchableOpacity>
        <View style={styles.separator} /> 
        <TouchableOpacity onPress={() => navigation.navigate('FAQ')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={styles.itemText}>FAQ</Text>
        </TouchableOpacity>
        <View style={styles.separator} /> 
        <TouchableOpacity onPress={() => navigation.navigate('')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={styles.itemText}>Reseller</Text>
        </TouchableOpacity>
        <View style={styles.separator} /> 
        <TouchableOpacity onPress={() => navigation.navigate('ChannelList')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={styles.itemText}>Channel List</Text>
        </TouchableOpacity>
        <View style={styles.separator} /> 
        <TouchableOpacity onPress={() => navigation.navigate('ContactUs')} style={{ marginLeft: 15, marginTop: 20  }}>
          <Text style={styles.itemText}>Contact Us</Text>
        </TouchableOpacity>
        <View style={styles.separator} /> 


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
  itemText: { 
    fontSize: 15, 
    color: colors.black, 
    fontFamily: fontFamily.poppins.bold 
  },
  separator: { 
    borderColor: '#2D2D2D', 
    opacity: 0.2, 
    borderWidth: .5, 
    marginTop: 20, 
  }

});

export default SideMenu