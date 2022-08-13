import React from 'react';
import { Text, StatusBar, View, Image, TouchableOpacity } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, image }) => {
  var navigation = useNavigation();

  return (
    <View
    style={{
      // marginTop: StatusBar.currentHeight + getStatusBarHeight(true),
      flexDirection: 'row',
      justifyContent: 'center',
      backgroundColor: '#403FFC',
      alignItems: 'center',
      height: 100,
    }}>
      <StatusBar translucent barStyle={"light-content"} backgroundColor={ '#403FFC'} />

      <TouchableOpacity style={{ position: 'absolute', left: 20, top: 50 }} onPress={() => navigation.toggleDrawer()}>
        <Image
          source={image}
          resizeMode={'contain'}
          style={{
            width: 30,
            height: 30,
            tintColor: '#fff' ,
            alignSelf: 'center'
          }}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{ color: '#fff' , fontSize: 18 }}
        >
          {title}
        </Text>
      </View>
    </View>
  )
}

export default Header