import React from 'react'
import { View, Text } from 'react-native'

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
  }, [])
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
  )
}

export default Spring
const styles = StyleSheet.create({
  containerBox: {
    width: SIZE_CONTAINER,
    alignItems: 'center',
    margin: SPACING,
  },
});
