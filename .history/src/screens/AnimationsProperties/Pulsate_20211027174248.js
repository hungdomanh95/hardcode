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
const Pulsate = () => {

  return (
    <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> pulsate </Text>
            <Animated.Image
              resizeMode="contain"
              source={Pikachu}
              style={[styles.box, {transform: pulsate}]}
            />
          </View>
  )
}

export default Pulsate
const styles = StyleSheet.create({
  containerBox: {
    width: SIZE_CONTAINER,
    alignItems: 'center',
    margin: SPACING,
  },
});
