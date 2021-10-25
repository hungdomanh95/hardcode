import React from 'react'
import { View, Text,Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView >
      <Text>HomeScreen</Text>
      <Button
        title="Go to GalleryView"
        onPress={() => navigation.navigate('GalleryView')}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
