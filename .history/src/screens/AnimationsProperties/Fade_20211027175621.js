import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Animated,
  TouchableWithoutFeedback,
  Dimensions,
  Easing
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../theme/globalStyle';
import {
  Bulbasaur,
  Charizard,
  Dragonite,
  Pikachu,
  Squirtle,
  Treecko,
} from '../../assets';
const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = (width - 8 * SPACING) / 4;
const SIZE_CONTAINER = (width - 8 * SPACING) / 3;
const SIZE_TWO_CONTAINER = 2 * SIZE_CONTAINER + 2 * SPACING;
const Fade = () => {
  const animatedIn = useRef(new Animated.Value(0)).current;
  const animatedOut = useRef(new Animated.Value(1)).current;
  useEffect(()=>{
    handleAnimatedInOut();
  })
  const handleAnimatedInOut = () => {
    animatedIn.setValue(0);
    animatedOut.setValue(1);
    Animated.timing(animatedIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedOut, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const blink = loop.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });
  return (
    <>
      <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> fadeIn </Text>
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Bulbasaur}
                style={[styles.box, {opacity: animatedIn}]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> fadeOut </Text>
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Charizard}
                style={[styles.box, {opacity: animatedOut}]}
              />
            </TouchableWithoutFeedback>
          </View>
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
    </>
  );
};

export default Fade;
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
