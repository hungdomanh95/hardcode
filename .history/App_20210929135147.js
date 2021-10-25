import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryView from './src/screens/GalleryView';
import HomeScreen from './src/screens/HomeScreen';
import RootNavigation from './src/navigation/rootNavigation';



const Stack = createNativeStackNavigator();

function App() {
  return (
   <RootNavigation/>
  );
}

export default App;
