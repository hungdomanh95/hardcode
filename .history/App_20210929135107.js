import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GalleryView from './src/screens/GalleryView';
import HomeScreen from './src/screens/HomeScreen';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="GalleryView" component={GalleryView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
