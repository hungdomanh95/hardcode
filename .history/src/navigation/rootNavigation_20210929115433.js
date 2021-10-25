import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native'
import GalleryView from '../screens/GalleryView';
const Stack = createStackNavigator();
const rootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer>
<Stack.Navigator screenOptions={screenOptions}>
<Stack.Screen name="GalleryView" component={GalleryView} />
</Stack.Navigator>
    </NavigationContainer>
  )
}

export default rootNavigation
