import React from 'react';
import {View, StyleSheet} from 'react-native';
import Timing from './Timing';

const AnimationsProperties = () => {
  return (
    <View style={styles.container}>
      <Timing />
      <Text>Heiii</Text>
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
