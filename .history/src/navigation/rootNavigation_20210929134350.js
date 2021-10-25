import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import GalleryView from '../screens/GalleryView';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();
const rootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={screenOptions}>
    //     <Stack.Screen name="GalleryView" component={GalleryView} />
    //     <Stack.Screen name="HomeScreen" component={HomeScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
     <NavigationContainer>
     <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="GalleryView" component={GalleryView} />
     </Stack.Navigator>
   </NavigationContainer>
  );
};

export default rootNavigation;
