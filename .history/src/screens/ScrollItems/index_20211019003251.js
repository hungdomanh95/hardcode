import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?cs=srgb&dl=pexels-sharefaith-1231265.jpg&fm=jpg"
const {width, height} = Dimensions.get("screen")
const ScrollItems = () => {
  return (
    <View style={{flex:1 }} >
      <Image
        source={{uri:BG_IMG}}
        style={{width, height}}
      />
    </View>
  )
}

export default ScrollItems
