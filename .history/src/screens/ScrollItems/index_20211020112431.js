import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions, StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import {RNBackground,avatar}  from "../../assets"
const BG_IMG = "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?cs=srgb&dl=pexels-sharefaith-1231265.jpg&fm=jpg"
import {listAvatar} from '../../utils/listItems'

const {width, height} = Dimensions.get("screen")
const SPACING = 20
const AVATAR_SIZE = 70

const ScrollItems = () => {

  const renderItem = ({item}) => (
    <View style={styles.styleItem}>
      <Image source={item.avatar} style={styles.styleAvatar} />
      <View>
        <Text style={{fontSize:16}} >{item.name}</Text>
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
        blurRadius={80}
      />
     <FlatList
      data={listAvatar}
      renderItem={renderItem}
      contentContainerStyle={styles.containerStyleFlatList}
     />
    </View>
  )
}

export default ScrollItems
const styles = StyleSheet.create({
  containerStyleFlatList: {
    padding: SPACING,
    paddingTop: StatusBar.currentHeight || 42,
  },
  styleItem: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: SPACING,
    marginBottom: SPACING,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  styleAvatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
});
