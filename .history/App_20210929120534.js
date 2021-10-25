import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const App = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('GalleryView')}>
        <Text>move to Galleryview</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
