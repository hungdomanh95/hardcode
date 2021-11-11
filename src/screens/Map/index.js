import React,{ useState } from 'react'
import {StyleSheet ,Dimensions, ImageBackground} from 'react-native'
import MapView, {Marker, Polyline } from 'react-native-maps';
const {width, height} = Dimensions.get('window')
import MapViewDirections from 'react-native-maps-directions';

const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_API_KEY = 'AIzaSyDiZtWjp2VE7lLIvNVzDh9WjPQv4Z3e_wY';

const Map = () => {
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);
  return (
    <MapView
    style={styles.maps}
    initialRegion={{
      latitude: coordinates[0].latitude,
      longitude: coordinates[0].longitude,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0121,
    }}>
    <MapViewDirections
      origin={coordinates[0]}
      destination={coordinates[1]}
      apikey={GOOGLE_API_KEY} // insert your API Key here
      strokeWidth={4}
      strokeColor="#111111"
    />
    <Marker coordinate={coordinates[0]} />
    <Marker coordinate={coordinates[1]} />
  </MapView>
  )
}

export default Map
const styles = StyleSheet.create({
  maps:{
    ...StyleSheet.absoluteFillObject
  }
 });
