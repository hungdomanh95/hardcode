import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text, Dimensions,Image } from 'react-native'
import {API_KEY, API_URL} from '../../configs/PexelsAPI';
import { FlatList } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get("screen")
const IMAGE_SIZE = 80;
const SPACING = 10
const GalleryView = () => {

  const [images, setImages] = useState(null)
  console.log('images: ------', images);

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
        data={images}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=>{
          return (
              <Image
                source={{uri:item.src.portrait}}
                style={{width,height}}
              />
          )
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={images}
        keyExtractor={item=>item.id.toString()}
        style={{position:"absolute", bottom:IMAGE_SIZE}}
        renderItem={({item})=>{
          return (
              <Image
                source={{uri:item.src.portrait}}
                style={{width:IMAGE_SIZE,height:IMAGE_SIZE, borderRadius:12, marginRight:SPACING}}
              />
          )
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default GalleryView
