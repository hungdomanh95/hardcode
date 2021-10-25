import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
const Timing = () => {
  const valueAnimated = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.timing(valueAnimated, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start();
  };
  const animationStyle = {
    opacity : valueAnimated
  }
  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation} style={{backgroundColor:"red"}}>
        <Animated.View style={[styles.box, {animationStyle}]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Timing;
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
});
