import React from 'react'
import { View, Text,StyleSheet, Dimensions } from 'react-native'
import StyleGuide from '../theme/StyleGuide'
const {width, height} = Dimensions.get("window")

const Button = ({label, onPress,primary }) => {
  const color = primary ? "white" : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;
  return (
    <View style={[{backgroundColor}, styles.containerButton]} >
      <Text style={{color}}>{label}</Text>
    </View>
  )
}

export default Button
const styles = StyleSheet.create({
  containerButton:{
    height:height/20,
    width:width/3
  }
});