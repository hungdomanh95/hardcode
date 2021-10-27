import React, {useEffect, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Dimensions,
  Easing
} from 'react-native';

const {width, height} = Dimensions.get('window');
const SPACING = 10;

const Rotate = () => {
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotate, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.linear,
      }),
    ).start();
  }, []);

  var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  animatedRotate = rotate.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  rotateOpposit =rotate.interpolate({inputRange, outputRange});
  const transform = [{rotate: animatedRotate}];
  const transform1 = [{rotate: rotateOpposit}];

  return (
    <View style={{width,height:width, marginHorizontal:-SPACING, justifyContent:"center",alignItems:"center"}}>
    <Animated.View style={[styles.item, {transform}]}>
        <Animated.View style={[styles.dot,{transform:transform1}]}>
          <Text style={styles.text} >Text</Text>
        </Animated.View>
        {/* <Animated.View style={[styles.dot1,{transform:transform1}]}>
          <Text style={styles.text}>Text1</Text>
        </Animated.View>
        <Animated.View style={[styles.dot2,{transform:transform1}]}>
          <Text style={styles.text}>Text2</Text>
        </Animated.View> */}
      </Animated.View>
  </View>

  )
}

export default Rotate
const styles = StyleSheet.create({
  item: {
    position: 'absolute',
    width: 200,
    height: 200, // this is the diameter of circle
    backgroundColor:"green",
    borderRadius:100,
    justifyContent:"center",
    // alignItems:"center"
},
dot: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left:-25,
    borderRadius:100
},
dot1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top:25,
    left:-25,
    borderRadius:100
},
dot2: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top:125,
    left:-25,
    borderRadius:100
},
text: {
    color: '#fff',
},
});
