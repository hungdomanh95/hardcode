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
const AnimationsProperties = () => {
  const aroundCircleX = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animationCircle();
    handleAnimationRotate();
  }, []);

  const animationCircle = () => {
    Animated.loop(
      Animated.timing(aroundCircleX, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start()
  }
  const snapshot = SIZE_BOX;
  const radius = (width/1.5)/2;
  console.log('radius: ', radius);
  const interpolateCircularMotionOverY = (snapshot, radius) => {
    const inputRange = [];
    const outputRange = [];
    for (var i=0; i<=snapshot; ++i) {
      var value = i/snapshot;
      var move = Math.sin(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
  }
    return { inputRange, outputRange };
  }

  const interpolateCircularMotionOverX = (snapshot, radius) => {
    const inputRange = [];
    const outputRange = [];
    for (var i=0; i<=snapshot; ++i) {
        var value = i/snapshot;
        var move = Math.cos(value * Math.PI * 2) * radius;
        inputRange.push(value);
        outputRange.push(move);
    }
    return { inputRange, outputRange };
  }

  const inOutX = interpolateCircularMotionOverX(snapshot, radius);
  const translateCircleX = aroundCircleX.interpolate(inOutX);

  const inOutY = interpolateCircularMotionOverY(snapshot, radius);
  const translateCircleY = aroundCircleX.interpolate(inOutY);

  const handleAnimationRotate = () => {
    Animated.loop(
      Animated.timing(rotate, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
          easing: Easing.linear,
      }),
    ).start();
  }

  var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  animatedRotate = rotate.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  rotateOpposit =rotate.interpolate({inputRange, outputRange});
  const transform = [{rotate: animatedRotate}];
  const transform1 = [{rotate: rotateOpposit}];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: SPACING,
          }}>






          <View style={{width,height:width, marginHorizontal:-SPACING, justifyContent:"center",alignItems:"center"}}>
            <Text style={[globalStyle.h3]}> Around Circle</Text>
            <View
              style={{width:width/1.5, height:width/1.5,borderRadius:1000, justifyContent:"center", alignItems:"center", borderStyle:"dashed", borderWidth:2 }}>
              <Animated.Image
                resizeMode="contain"
                source={Charizard}
                style={[
                  styles.box,
                  {
                    transform: [
                      {translateX: translateCircleX},
                      {translateY: translateCircleY},
                    ],
                  },
                ]}
              />
            </View>
          </View>
          <View style={[styles.container2Box]}>
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
    width: SIZE_BOX,
    height: SIZE_BOX,
    // backgroundColor: 'tomato',
  },
  containerBox: {
    width: SIZE_CONTAINER,
    alignItems: 'center',
    margin: SPACING,
  },

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
