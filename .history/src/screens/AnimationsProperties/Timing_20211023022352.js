import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated, TouchableWithoutFeedback} from 'react-native';
import { Button } from '../../components';
const Timing = () => {
  const valueAnimated = useRef(new Animated.Value(0)).current;

  return (
    <TouchableWithoutFeedback>
      <Animated.View style={styles.box} />
      <Button label="FadeIn" primary />
    </TouchableWithoutFeedback>
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
