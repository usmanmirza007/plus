import React from 'react';
// navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import SideMenu from './src/navigation/SideMenu';
import {Home, ContactUs, ChannelList, Pricing, FAQ} from './src/screens';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerPosition="left"
    initialRouteName="Home"
    drawerContent={props => <SideMenu {...props} />}>
    <Drawer.Screen
      name="Home"
      component={Home}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="Pricing"
      component={Pricing}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="ContactUs"
      component={ContactUs}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="ChannelList"
      component={ChannelList}
      options={{headerShown: false}}
    />
    <Drawer.Screen
      name="FAQ"
      component={FAQ}
      options={{headerShown: false}}
    />
  </Drawer.Navigator>
);

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Homes">
    <Stack.Screen
      name="Homes"
      component={DrawerNavigation}
      options={{
        animationEnabled: false,
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};
