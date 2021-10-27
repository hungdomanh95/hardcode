import React,{ useEffect, useRef} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Animated, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../theme/globalStyle'
const {width, height} = Dimensions.get("window")
const SPACING = 10
const SIZE_BOX = ( width - 8*SPACING ) / 4
const SIZE_CONTAINER = ( width - 8*SPACING ) / 3
const SIZE_TWO_CONTAINER = 2 * SIZE_CONTAINER + 2*SPACING
const AnimationsProperties = () => {
  const animatedIn = useRef(new Animated.Value(0)).current;
  const animatedOut = useRef(new Animated.Value(1)).current;
  const loop = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animatedIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
    Animated.timing(animatedOut, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start()
    Animated.loop(
      Animated.timing(loop, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
    Animated.loop(
      Animated.timing(loop, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
  }, [])

  const blink = loop.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  })
  const pulsate  =  [
    {
      scale: loop.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [1, 0.5, 0, 0.5, 1],
      }),
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: SPACING,
          }}>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> fadeIn </Text>
            <Animated.View style={[styles.box, {opacity: animatedIn}]} />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> fadeOut </Text>
            <Animated.View style={[styles.box, {opacity: animatedOut}]} />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> blink </Text>
            <Animated.View style={[styles.box, {opacity: blink}]} />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale </Text>
            <Animated.View
              style={[styles.box, {transform: [{scale: animatedIn}]}]}
            />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale X </Text>
            <Animated.View
              style={[styles.box, {transform: [{scaleX: animatedIn}]}]}
            />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale Y </Text>
            <Animated.View
              style={[styles.box, {transform: [{scaleY: animatedIn}]}]}
            />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> pulsate </Text>
            <Animated.View
              style={[
                styles.box,
                {
                  transform: pulsate
                },
              ]}
            />
          </View>

          <View style={[styles.container2Box]}>
            <Text style={[globalStyle.h3]}> Translate X </Text>
            <Animated.View
              style={[
                styles.box,
                {
                  transform: [
                    {
                      translateX: loop.interpolate({
                        inputRange: [0, 0.5, 1],
                        outputRange: [0, 2 * SIZE_CONTAINER - 6 * SPACING, 0],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AnimationsProperties;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: SIZE_BOX ,
    height: SIZE_BOX,
    backgroundColor: 'tomato',
  },
  containerBox:{
    width:SIZE_CONTAINER,
    alignItems:"center",
    margin:SPACING,
  },
  container2Box:{
    width:SIZE_TWO_CONTAINER,
    margin:SPACING,
  },
});
