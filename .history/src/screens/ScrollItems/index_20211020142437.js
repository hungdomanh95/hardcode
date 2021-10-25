import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions, StatusBar,Animated } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
// import Animated from 'react-native-reanimated'
import {RNBackground,avatar}  from "../../assets"
const BG_IMG = "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?cs=srgb&dl=pexels-sharefaith-1231265.jpg&fm=jpg"
import {listAvatar} from '../../utils/listItems'

const {width, height} = Dimensions.get("screen")
const SPACING = 20
const AVATAR_SIZE = 70
const ITEM_SIZE = AVATAR_SIZE + SPACING*3

const ScrollItems = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current
  console.log('scrollY: ', scrollY);

  const renderItem = ({item, index}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    console.log('ITEM_SIZE * index: ', ITEM_SIZE * index);
    console.log('ITEM_SIZE * (index + 2): ', ITEM_SIZE * (index + 2));
    const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [1, 1, 1, 0],
    });

    const opacity = scrollY.interpolate({
      inputRange:opacityInputRange,
      outputRange: [1, 1, 1, 0],
    });
    return(
      <Animated.View style={[styles.styleItem,{
        transform:[{scale}],
        opacity
      }]}>
        <Image source={item.avatar} style={styles.styleAvatar} />
        <View>
          <Text style={{fontSize:16, fontWeight:"700"}} >{item.name}</Text>
          <Text style={{fontSize:16, opacity:0.7}}>{item.jobTitle}</Text>
          <Text style={{fontSize:14, color:"#0099cc", opacity:0.8}}>{item.email}</Text>
        </View>
      </Animated.View>
    )
  }


  return (
    <View style={{flex:1 }} >
      <Image
        source={{uri:BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
     <Animated.FlatList
      pagingEnabled
      onScroll={Animated.event(
        [{nativeEvent:{contentOffset:{y:scrollY}}}],
        {useNativeDriver:true}
      )}
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
