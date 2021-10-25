import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {RNBackground,avatar}  from "../../assets"
const BG_IMG = "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?cs=srgb&dl=pexels-sharefaith-1231265.jpg&fm=jpg"
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
