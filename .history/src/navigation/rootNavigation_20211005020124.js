import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import GalleryView from '../screens/GalleryView';
import ScrollItems from '../screens/ScrollItems';


const Stack = createNativeStackNavigator();
const RootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GalleryView" component={GalleryView} />
        <Stack.Screen name="ScrollItems" component={ScrollItems} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
