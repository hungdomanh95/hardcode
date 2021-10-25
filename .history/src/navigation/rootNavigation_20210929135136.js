import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryView from './src/screens/GalleryView';
import HomeScreen from './src/screens/HomeScreen';


const Stack = createNativeStackNavigator();
const RootNavigation = () => {
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

export default RootNavigation;
