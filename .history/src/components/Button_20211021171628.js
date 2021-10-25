import React from 'react'
import { View, Text } from 'react-native'
import StyleGuide from '../theme/StyleGuide'

const Button = ({label, onPress,primary }) => {
  const color = primary ? "white" : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;
  return (
    <View>
      <Text>{label}</Text>
    </View>
  )
}

export default Button
