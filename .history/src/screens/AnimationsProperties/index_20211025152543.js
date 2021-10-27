import React,{ useEffect, useRef} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Animated, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../theme/globalStyle'
const {width, height} = Dimensions.get("window")
const SPACING = 10
const SIZE_BOX = ( width - 8*SPACING ) / 4
const SIZE_CONTAINER = ( width - 8*SPACING ) / 3
const AnimationsProperties = () => {
  const animatedIn = useRef(new Animated.Value(0)).current;
  const animatedOut = useRef(new Animated.Value(1)).current;
  const blink = useRef(new Animated.Value(0)).current;
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
      Animated.timing(blink, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={{flexDirection:"row",flexWrap:"wrap", marginHorizontal:SPACING}}>
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
            <Animated.View style={[styles.box, {
              opacity: blink.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 0, 1],
              })
              }]}
            />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale </Text>
            <Animated.View style={[styles.box, {transform:[{scale:animatedIn}]}]} />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale X </Text>
            <Animated.View style={[styles.box, {transform:[{scaleX:animatedIn}]}]} />
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> scale Y </Text>
            <Animated.View style={[styles.box, {transform:[{scaleY:animatedIn}]}]} />
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
    height: SIZE_CONTAINER,
    alignItems:"center",
    margin:SPACING,
    // backgroundColor:"red"
  }
});
