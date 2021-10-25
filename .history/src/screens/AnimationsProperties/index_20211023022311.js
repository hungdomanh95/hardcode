import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import Timing from './Timing';

const AnimationsProperties = () => {
  return (
    <View style={styles.container}>
    <Timing/>
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

});
