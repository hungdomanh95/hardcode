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
  const valueAnimated = new Animated.Value(1);
  const startAnimation = () => {
    Animated.timing(valueAnimated, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(()=>{

    });
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={startAnimation}>
        <Animated.View style={[styles.box,{ opacity:valueAnimated}]} />
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
