import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions, StatusBar } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import {RNBackground,avatar}  from "../../assets"
const BG_IMG = "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?cs=srgb&dl=pexels-sharefaith-1231265.jpg&fm=jpg"
import {listAvatar} from '../../utils/listItems'

const {width, height} = Dimensions.get("screen")
const SPACING = 20
const AVATAR_SIZE = 70

const ScrollItems = () => {
  const scrollY = React.useRef(new Animated.Value()).current
  const onScroll = () => {
    Animated.event(
      [{nativeEvent:{contentOffset:{y:scrollY}}}],
      {useNativeDriver:true}
    )
  }

  const renderItem = ({item}) => (
    <View style={styles.styleItem}>
      <Image source={item.avatar} style={styles.styleAvatar} />
      <View>
        <Text style={{fontSize:16, fontWeight:"700"}} >{item.name}</Text>
        <Text style={{fontSize:16, opacity:0.7}}>{item.jobTitle}</Text>
        <Text style={{fontSize:14, color:"#0099cc", opacity:0.8}}>{item.email}</Text>
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
     <Animated.FlatList
      onScroll={onScroll}
      data={listAvatar}
      keyExtractor={(item,index)=>`${item.name}_${index}`}
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
    alignItems:"center"
  },
  styleAvatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
});
