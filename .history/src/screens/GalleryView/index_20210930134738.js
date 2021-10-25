import React, {useEffect} from 'react';
import axios from 'axios';
import { View, Text } from 'react-native'
import {API_KEY, API_URL} from '../../configs/PexelsAPI';
const GalleryView = () => {

  useEffect(async() => {
    const data = await axios.get(API_URL,{
      headers: {
        "Authorization": API_KEY
      }
    })
    console.log('results: ', data);
  }, []);
  return (
    <View>
      <Text>GalleryView</Text>
    </View>
  )
}

export default GalleryView
