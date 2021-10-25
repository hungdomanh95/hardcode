import React from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'

const AnimationsProperties = () => {
  const valueAnimated = new Animated.Value(0)

  return (
    <View style={styles.container}>
      <Text>AnimationsProperties</Text>
    </View>
  )
}

export default AnimationsProperties
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
});
