import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import StyleGuide from '../theme/StyleGuide'

const Button = ({label, onPress,primary }) => {
  console.log('primary: ', primary);
  const color = primary ? "white" : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;
  console.log('backgroundColor: ', backgroundColor);
  return (
    <View style={{backgroundColor}} >
      <Text style={{color}}>{label}</Text>
    </View>
  )
}

export default Button
const styles = StyleSheet.create({

});