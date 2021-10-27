import React,{ useEffect, useRef} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Animated, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../theme/globalStyle'
const {width, height} = Dimensions.get("window")
const AnimationsProperties = () => {
  const animatedIn = useRef(new Animated.Value(0)).current;
  const animatedOut = useRef(new Animated.Value(1)).current;
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
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{width}}>
        <View style={styles.containerBox}>
          <Text style={[globalStyle.h3]}> fadeIn </Text>
          <Animated.View style={[styles.box, {opacity: animatedIn}]} />
        </View>

        <View style={styles.containerBox}>
          <Text style={[globalStyle.h3]}> fadeOut </Text>
          <Animated.View style={[styles.box, {opacity: animatedOut}]} />
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
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
  containerBox:{
      marginBottom:20,
      alignItems:"center",
      borderBottomWidth:1,
      paddingVertical:20
  }
});
