import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import { Button } from '../../components';

const AnimationsProperties = () => {
  const valueAnimated = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Animated.View style={styles.box} />
      <Button/>
    </View>
  );
};

export default AnimationsProperties;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box:{
    width:100,
    height:100,
    backgroundColor:"tomato"
  }
});
