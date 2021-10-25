import React from 'react'
import { View, Text } from 'react-native'

const HomeScreen = () => {
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
