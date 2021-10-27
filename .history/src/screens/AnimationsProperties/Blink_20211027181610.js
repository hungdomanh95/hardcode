import React from 'react'
import { View, Text } from 'react-native'

const Blink = () => {
  const loop = useRef(new Animated.Value(0)).current;

  useEffect(()=>{
    Animated.loop(
      Animated.timing(loop, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
  })

  const blink = loop.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });
  return (
    <View style={styles.containerBox}>
      <Text style={[globalStyle.h3]}> blink </Text>
      <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
        <Animated.Image
          resizeMode="contain"
          source={Dragonite}
          style={[styles.box, {opacity: blink}]}
        />
      </TouchableWithoutFeedback>
    </View>
  )
}

export default Blink
const styles = StyleSheet.create({
  containerBox: {
    width: SIZE_CONTAINER,
    alignItems: 'center',
    margin: SPACING,
  },
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
    // backgroundColor: 'tomato',
  },
});
