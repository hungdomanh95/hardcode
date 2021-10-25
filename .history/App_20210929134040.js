import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';
const App = () => {
  const navigation = useNavigation();

  return (
    <RootNavigation />
  );
};

export default App;
