import React, {useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import globalStyle from '../../theme/globalStyle'
const Timing = () => {
  const valueAnimated = useRef(new Animated.Value(1)).current;
  const scale  = useRef(new Animated.Value(1)).current;
  const startAnimation = () => {
    Animated.timing(valueAnimated, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
      easing: Easing.ease,
    }).start(()=>{
      Animated.timing(valueAnimated, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.ease,
      }).start()
    });
  };
  useEffect(() => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 5000,
      useNativeDriver: true,
    }).start()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={[globalStyle.h3]} >Timing</Text>
        {/* <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box,{ opacity:valueAnimated}]} />
        </TouchableWithoutFeedback> */}

        <Animated.View style={[styles.box,{ transform:[{scale:scale}]}]} />
    </View>
  );
};

export default Timing;
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    marginBottom:20
  },
  row:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-evenly",
    marginTop:10
  },
  container:{
    // marginBottom:50,
    // alignItems:"center",
    backgroundColor:"red",
    flex:1
  }
});
