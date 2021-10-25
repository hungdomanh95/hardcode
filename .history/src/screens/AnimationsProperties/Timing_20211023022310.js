import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import { Button } from '../../components';
const Timing = () => {
  const valueAnimated = useRef(new Animated.Value(0)).current;

  return (
    <View>
      <Animated.View style={styles.box} />
      <Button label="FadeIn" primary />
    </View>
  )
}

export default Timing
const styles = StyleSheet.create({
  box:{
    width:100,
    height:100,
    backgroundColor:"tomato"
  }
});
