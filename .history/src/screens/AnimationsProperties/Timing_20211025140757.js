import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
  Easing,
} from 'react-native';
import {globalStyle} from '../../theme/globalStyle'
const Timing = () => {
  const valueAnimated = useRef(new Animated.Value(1)).current;
  const fadeAnim = useRef(new Animated.Value(1)).current;
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
      }).start(()=>{

      })
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.h2]} >Timing</Text>
      <View style={styles.row}>
        <TouchableWithoutFeedback onPress={startAnimation}>
          <Animated.View style={[styles.box,{ opacity:valueAnimated}]} />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback style={{borderColor:"red", borderWidth:2}}>
          <Animated.View style={[styles.box,{ opacity:fadeAnim, backgroundColor:"green"}]} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Timing;
const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
  },
  row:{
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-evenly",
    marginTop:10
  },
  container:{
    marginBottom:50,
    alignItems:"center"
  }
});
