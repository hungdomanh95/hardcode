import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import GalleryView from '../screens/GalleryView';
import HomeScreen from '../screens/HomeScreen';
const Stack = createNativeStackNavigator();
const rootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (

     <NavigationContainer>
     <Stack.Navigator initialRouteName="HomeScreen">
       <Stack.Screen name="HomeScreen" component={HomeScreen} />
       <Stack.Screen name="GalleryView" component={GalleryView} />
     </Stack.Navigator>
   </NavigationContainer>
  );
};

export default rootNavigation;
