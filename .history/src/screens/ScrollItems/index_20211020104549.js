import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {RNBackground,avatar}  from "../../assets"
const BG_IMG = "https://images.unsplash.com/photo-1568122506084-57d12d22b683?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
import {listAvatar} from '../../utils/listItems'

const {width, height} = Dimensions.get("screen")
const SPACING = 10
const AVATAR_SIZE = 70

const ScrollItems = () => {

  const renderItem = ({item}) => (
    <View>
      <Image source={item.avatar} style={{width:AVATAR_SIZE, height:AVATAR_SIZE, borderRadius:AVATAR_SIZE}} />
      <View>
        <Text>{item.name}</Text>
        <Text>{item.jobTitle}</Text>
        <Text>{item.email}</Text>
      </View>
    </View>
  )

  return (
    <View style={{flex:1 }} >
      <Image
        source={{uri:BG_IMG}}
        style={StyleSheet.absoluteFillObject}
      />
     <FlatList
      data={listAvatar}
      renderItem={renderItem}
     />
    </View>
  )
}

export default ScrollItems
