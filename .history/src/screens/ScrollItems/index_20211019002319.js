import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/"
const {width,height} = Dimensions.get("window")
const ScrollItems = () => {
  return (
    <View style={{flex:1}} >
      <Image
        source={{uri:BG_IMG}}
        style={StyleSheet.absoluteFillObject}
      />
      <View stylee={{flex:1, backgroundColor:"red",}} ></View>
    </View>
  )
}

export default ScrollItems
