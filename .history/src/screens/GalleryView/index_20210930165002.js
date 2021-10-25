import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text, Dimensions } from 'react-native'
import {API_KEY, API_URL} from '../../configs/PexelsAPI';
import { FlatList } from 'react-native-gesture-handler';
const {width, height} = Dimensions.get("screen")
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
    <View>
      <FlatList
        data={images}
        keyExtractor={item=>item.id.toString()}
        renderItem={({item})=>{
          return (
            <View>
              <Image
                source={{uri:item.src.portrait}}
                style={{width,height}}
              />
            </View>
          )
        }}
      />
    </View>
  )
}

export default GalleryView
