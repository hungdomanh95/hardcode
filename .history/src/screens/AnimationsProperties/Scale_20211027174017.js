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
const Scale = () => {
  return (
    <>
       <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale </Text>
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Squirtle}
                style={[styles.box, {transform: [{scale: animatedIn}]}]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale X </Text>
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Treecko}
                style={[styles.box, {transform: [{scaleX: animatedIn}]}]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale Y </Text>
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Charizard}
                style={[styles.box, {transform: [{scaleY: animatedIn}]}]}
              />
            </TouchableWithoutFeedback>
          </View>
    </>
  )
}

export default Scale
