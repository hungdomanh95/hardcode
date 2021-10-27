import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Animated, Dimensions} from 'react-native';
import globalStyle from '../../theme/globalStyle';
import {Treecko} from '../../assets';
const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const SIZE_TWO_CONTAINER = 2 * SIZE_CONTAINER + 2 * SPACING;
const Spring = () => {
  const spring = useRef(new Animated.Value(0)).current;
  const translateY = [
    {
      translateY: spring.interpolate({
        inputRange: [0, 1],
        outputRange: [0, SIZE_TWO_CONTAINER - SIZE_BOX],
      }),
    },
  ];
  useEffect(() => {
    Animated.loop(
      Animated.spring(spring, {
        toValue: 1,
        friction: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 500},
    ).start();
  }, []);
  return (
    <View style={[styles.containerBox]}>
      <Text style={[globalStyle.h3]}> Translate Y </Text>
      <View style={{height: SIZE_TWO_CONTAINER}}>
        <Animated.Image
          resizeMode="contain"
          source={Treecko}
          style={[styles.box, {transform: translateY}]}
        />
      </View>
    </View>
  );
};

export default Spring;
const styles = StyleSheet.create({
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
  },
  containerBox: {
    width: SIZE_CONTAINER,
    alignItems: 'center',
    margin: SPACING,
  },
});
