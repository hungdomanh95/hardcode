import React from 'react'
import { View, Text,Image,StyleSheet, Dimensions, StatusBar,Animated,FlatList } from 'react-native'
const BG_IMG = "https://images.pexels.com/photos/1231265/pexels-photo-1231265.jpeg?cs=srgb&dl=pexels-sharefaith-1231265.jpg&fm=jpg"
import {listAvatar} from '../../utils/listItems'

const {width, height} = Dimensions.get("screen")
const SPACING = 20
const AVATAR_SIZE = 70
const MARGIN_BOTTOM = 20
const ITEM_SIZE = AVATAR_SIZE + SPACING*2 + MARGIN_BOTTOM
// Tổng kích thước của item = chiều cao của avatar + khoảng cách padding top và bottom + marginBottom giữa 2 item

const ScrollItems = () => {
  const scrollY = React.useRef(new Animated.Value(0)).current

  const renderItem = ({item, index}) => {
    const inputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 2)];
    const opacityInputRange = [-1, 0, ITEM_SIZE * index, ITEM_SIZE * (index + 1)];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0, 1, 1, 0],
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
    <View style={{flex: 1}}>
      <Image
        source={{uri: BG_IMG}}
        style={StyleSheet.absoluteFillObject}
        blurRadius={80}
      />
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        data={listAvatar}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        renderItem={renderItem}
        contentContainerStyle={styles.containerStyleFlatList}
      />
    </View>
  );
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
    marginBottom: MARGIN_BOTTOM,
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
