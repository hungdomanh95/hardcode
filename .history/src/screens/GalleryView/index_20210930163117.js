import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { View, Text } from 'react-native'
import {API_KEY, API_URL} from '../../configs/PexelsAPI';
const GalleryView = () => {

  const [images, setImages] = useState(null)
  console.log('images: ------', images);

  useEffect(async() => {
    const data = await axios.get(API_URL,{
      headers: {
        "Authorization": API_KEY
      }
    })
    const {photos:{data}} = await JSON.stringify(data)
    console.log('photos: ', photos);
    setImages(data)

  }, []);
  if(!images){
    return <Text>Loading...</Text>
  }
  return (
    <View>
      <Text>GalleryView</Text>
    </View>
  )
}

export default GalleryView
