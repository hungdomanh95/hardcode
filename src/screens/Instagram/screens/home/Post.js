import React, { Fragment,useCallback,useRef } from 'react'
import { View, Text, StyleSheet, ScrollView, Image, FlatList,Animated } from 'react-native'
import assets from '../../../../assets'
import size from '../../../../utils/size'
const SIZE_DOT = 5
const listPost = [
  {
    id:0,
    name:"hungK.dev",
    avatar:assets.avatar2,
    contentPost:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, dolorem.",
    imagePost:[assets.post8],
    location:"Q8,Hồ Chí Minh"
  },
  {
    id:2,
    name:"meandmeangie",
    avatar:assets.avatar4,
    contentPost:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nam aliquid, tempora excepturi quasi dolore?",
    imagePost:[assets.post2,assets.post6],
    location:"Q7,Hồ Chí Minh"
  },
  {
    id:3,
    name:"hungK.dev",
    avatar:assets.avatar2,
    contentPost:" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi nam aliquid, tempora excepturi quasi dolore?",
    imagePost:[assets.post1,assets.post2,assets.post3,assets.post4,assets.post5,assets.post6,assets.post7,assets.post8],
    location:"Hồ Chí Minh"
  },
]

const Post = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const Indicator = ({item}) => {
    return (
      <View style={{flexDirection:"row",marginVertical:10,justifyContent:"center"}}>
      {item.imagePost.map((item,index)=>{
        const inputRange = [
          (index-1)*size.width,
          index * size.width,
          (index+1)*size.width
        ]
        const scale = scrollX.interpolate({
          inputRange,
          outputRange:[1, 1.2,1],
          extrapolate:"clamp"
        })
        const color = scrollX.interpolate({
          inputRange,
          outputRange:["#BDBDBD",`#2679F1`,"#BDBDBD"],
          extrapolate:"clamp"
        })
        const widthDot = scrollX.interpolate({
          inputRange,
          outputRange:[SIZE_DOT, SIZE_DOT, SIZE_DOT],
          extrapolate:"clamp"
        })
        return(
          <Animated.View
          key={index}
          style={{
            width:widthDot,
            height:SIZE_DOT,
            backgroundColor:color,
            marginHorizontal:2,
            borderRadius:5,
            transform:[{scale}]
          }}
        />
        )
      })}
    </View>
    )
  }
  const _renderItem = ({ item }) => {
      console.log('item: ',typeof item);
      return(
        <>
        <Image
        style={styles.imgPost}
        source={{
          uri: `https://source.unsplash.com/random`
        }}
      />
        </>
      )
    }
  return (
    <ScrollView style={styles.container}>
      {listPost.map((item,index)=>{
        return(
          <View key={index} style={styles.containerPost} >
            <View style={styles.headerPost}>
              <View style={{flexDirection:"row", alignItems:"center"}} >
                <Image resizeMode="contain" source={item.avatar} style={styles.avatar} />
                <View>
                  <Text style={styles.textBold}>{item.name}</Text>
                  <Text>{item.location}</Text>
                </View>
              </View>
              <Image source={assets.iconMore} style={styles.iconMore} />
            </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={item.imagePost}
              renderItem={_renderItem}
              // renderItem={({item})=> <Image source={item} style={styles.imgPost} />}
              keyExtractor={item =>`${item}` }
              pagingEnabled
              onScroll={Animated.event(
                [{
                  nativeEvent:{
                    contentOffset:{x:scrollX}
                  }
                }],
                {useNativeDriver:false}
              )}
            />

            <View style={styles.containerAction} >
              <Image source={assets.iconHeart} style={styles.icon} />
              <Image source={assets.iconComment} style={styles.icon} />
              <Image source={assets.iconShare} style={styles.icon} />
              <View style={{position:"absolute", width:size.width}} >
                {item.imagePost.length > 1 &&  <Indicator item={item} />}
              </View>
              <Image source={assets.iconBookmark} style={[styles.icon,{marginLeft:"auto", marginRight:0}]} />
            </View>
            <View style={styles.contentPost}>
              <Text style={styles.textBold} >100 like</Text>
              <Text><Text style={styles.textBold}>{item.name}</Text> {item.contentPost}</Text>
            </View>

          </View>
        )
      })}
    </ScrollView>
  )
}

export default Post
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerPost:{
    marginVertical:15,
  },
  contentPost:{
    paddingHorizontal:15,
  },
  containerAction:{
    flexDirection:"row",
    marginVertical:10,
    paddingHorizontal:15,
  },
  headerPost:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:15,
    paddingHorizontal:15,
  },
  avatar:{
    width:size.width*45/size.WIDTH_DEVICE_DS,
    height:size.width*45/size.WIDTH_DEVICE_DS,
    borderRadius:50,
    marginRight:10
  },
  iconMore:{
    width:size.width*28/size.WIDTH_DEVICE_DS,
    height:size.height*6/size.HEIGHT_DEVICE_DS,
  },
  imgPost:{
    width:size.width,
    height:size.width,
  },
  icon:{
    width:size.SIZE_ICON_IG,
    height:size.SIZE_ICON_IG,
    marginRight:17
  },
  textBold:{
    fontSize: 15,
    lineHeight: 22,
    fontWeight:"bold"
  }
});