import React from 'react'
import { View, Text,Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View  >
      <Text>HomeScreen</Text>
      <Button
        title="Go to GalleryView"
        onPress={() => navigation.navigate('GalleryView')}
      />
    </View>
  )
}

export default HomeScreen
