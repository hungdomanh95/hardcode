import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/"
const {width, height} = Dimensions.get("screen")
const ScrollItems = () => {
  return (
    <View style={{flex:1,width,height,backgroundColor:"red" }} >
      {/* <Image
        source={{uri:BG_IMG}}
        style={StyleSheet.absoluteFillObject}
      /> */}
      {/* <View style={{width,height, backgroundColor:"green", flex:1, zIndex: 999,}} >
        <Text>hungaaaaa</Text>
      </View> */}
    </View>
  )
}

export default ScrollItems
