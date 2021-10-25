import React, {useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const AnimationsProperties = () => {
  const valueAnimated = useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Text>AnimationsProperties</Text>
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
