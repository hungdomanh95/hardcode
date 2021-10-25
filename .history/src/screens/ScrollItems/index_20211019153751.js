import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://images.unsplash.com/photo-1568122506084-57d12d22b683?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
const {width, height} = Dimensions.get("screen")
const SPACING = 10
const AVATAR_SIZE = 70
const ScrollItems = () => {
  return (
    <View style={{flex:1 }} >
      <Image
        source={{uri:BG_IMG}}
        style={{ position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,}}
      />
      <View>
        <Text>hung</Text>
      </View>
    </View>
  )
}

export default ScrollItems
