import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Dimensions} from 'react-native';
import globalStyle from '../../theme/globalStyle';
import {Charizard} from '../../assets';
const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const Circle = () => {
  const circle = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(circle, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
  }, []);
  const snapshot = SIZE_BOX;
  const radius = width / 1.5 / 2;
  const interpolateCircularMotionOverY = (snapshot, radius) => {
    const inputRange = [];
    const outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = Math.sin(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    return {inputRange, outputRange};
  };

  const interpolateCircularMotionOverX = (snapshot, radius) => {
    const inputRange = [];
    const outputRange = [];
    for (var i = 0; i <= snapshot; ++i) {
      var value = i / snapshot;
      var move = Math.cos(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    return {inputRange, outputRange};
  };
  const inOutX = interpolateCircularMotionOverX(snapshot, radius);
  const translateCircleX = circle.interpolate(inOutX);

  const inOutY = interpolateCircularMotionOverY(snapshot, radius);
  const translateCircleY = circle.interpolate(inOutY);
  return (
    <View style={styles.container}>
      <Text style={[globalStyle.h3]}> Around Circle</Text>
      <View style={styles.containerCircle}>
        <Animated.Image
          resizeMode="contain"
          source={Charizard}
          style={[
            styles.box,
            {
              transform: [
                {translateX: translateCircleX},
                {translateY: translateCircleY},
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default Circle;
const styles = StyleSheet.create({
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
  },
  container: {
    width,
    height: width,
    marginHorizontal: -SPACING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCircle: {
    width: width / 1.5,
    height: width / 1.5,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
});
