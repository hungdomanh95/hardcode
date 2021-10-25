import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/"
const {width, height} = Dimensions.get("screen")
console.log('height: ', height);
console.log('width: ', width);
const ScrollItems = () => {
  return (
    <View >
      {/* <Image
        source={{uri:BG_IMG}}
        style={StyleSheet.absoluteFillObject}
      /> */}
      <View stylee={{width,height, backgroundColor:"green"}} >
        <Text>hungaaaaa</Text>
      </View>
    </View>
  )
}

export default ScrollItems
