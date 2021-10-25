import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import {RNBackground}  from "../../assets"
const BG_IMG = "https://images.unsplash.com/photo-1634534904807-4506e28ba51b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
const {width, height} = Dimensions.get("screen")
const ScrollItems = () => {
  return (
    <View style={{flex:1 }} >
      <Image
        source={{uri:BG_IMG}}
        style={{ position: 'absolute',
        top: 300,
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
