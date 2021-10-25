import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import { View, Text, Dimensions,Image, FlatList, TouchableOpacity  } from 'react-native'
import {API_KEY, API_URL} from '../../configs/PexelsAPI';
const {width, height} = Dimensions.get("screen")
console.log('width: ', width);
const IMAGE_SIZE = 80;
const SPACING = 10
const GalleryView = () => {

  const [images, setImages] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const topRef = useRef()
  const thumbRef = useRef()

  const scrollToActiveIndex = index => {
    console.log('index: ', index);
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width ,
      animated: true,
    });
    console.log('index * (IMAGE_SIZE + SPACING): ', index * (IMAGE_SIZE + SPACING));
    console.log('index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2: ', index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2);
    console.log('width / 2: ', width / 2);
    console.log('index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2: ', index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2);
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    }
  };

  useEffect(async() => {
    const data = await axios.get(API_URL,{
      headers: {
        "Authorization": API_KEY
      }
    })
    const {data:{photos}} = await data
    setImages(photos)

  }, []);
  if(!images){
    return <Text>Loading...</Text>
  }
  return (
    <View style={{flex:1}}>
      <FlatList
      ref={topRef}
        data={images}
        keyExtractor={item=>item.id.toString()}
        onMomentumScrollEnd={(e)=>{
          scrollToActiveIndex(Math.floor(e.nativeEvent.contentOffset.x/width))
        }}
        renderItem={({item})=>{
          return (
            <View>
              <View style={{width:1, height:height, backgroundColor:"red"}} />
              <Image
                source={{uri:item.src.portrait}}
                style={{width,height}}
              />
            </View>
          )
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
      ref={thumbRef}
        data={images}
        keyExtractor={item=>item.id.toString()}
        style={{position:"absolute", bottom:IMAGE_SIZE, paddingHorizontal:SPACING}}
        renderItem={({item,index})=>{
          return (
            <TouchableOpacity
              onPress={()=>scrollToActiveIndex(index)}
            >
              <Image
                source={{uri: item.src.portrait}}
                style={{
                  width: IMAGE_SIZE,
                  height: IMAGE_SIZE,
                  borderRadius: 12,
                  borderWidth: 2,
                  marginRight: SPACING,
                  borderColor: index === activeIndex ? '#fff' : 'transparent',
                }}
              />
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default GalleryView
