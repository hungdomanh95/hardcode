import React,{ useEffect, useRef} from 'react';
import {View, StyleSheet, Text, SafeAreaView, Animated, TouchableWithoutFeedback, Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import globalStyle from '../../theme/globalStyle'
const {width, height} = Dimensions.get("window")
const AnimationsProperties = () => {
  const fadeIn = useRef(new Animated.Value(0)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;
  useEffect(() => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start()
    Animated.timing(fadeOut, {
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
          <Animated.View style={[styles.box, {opacity: fadeIn}]} />
        </View>

        <View style={styles.containerBox}>
          <Text style={[globalStyle.h3]}> fadeOut </Text>
          <Animated.View style={[styles.box, {opacity: fadeOut}]} />
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
    marginBottom: 20,
  },
  containerBox:{
      flex:1,
      marginBottom:20,
      alignItems:"center",
      borderBottomWidth:1
  }
});
