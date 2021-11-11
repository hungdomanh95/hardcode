import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {AnimationsProperties, GalleryView, HomeScreen, Lessons, Map, ScrollItems} from '../screens'

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
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="AnimationsProperties" component={AnimationsProperties} />
        <Stack.Screen name="Maps" component={Map} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
