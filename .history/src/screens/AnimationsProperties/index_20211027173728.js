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
  const animatedIn = useRef(new Animated.Value(0)).current;
  const animatedOut = useRef(new Animated.Value(1)).current;
  const loop = useRef(new Animated.Value(0)).current;
  const spring = useRef(new Animated.Value(0)).current;
  const aroundX = useRef(new Animated.Value(0)).current;
  const aroundY = useRef(new Animated.Value(0)).current;
  const aroundCircleX = useRef(new Animated.Value(0)).current;
  const rotate = useRef(new Animated.Value(0)).current;


  const pulsate = [
    {
      scale: loop.interpolate({
        inputRange: [0, 0.25, 0.5, 0.75, 1],
        outputRange: [1, 0.5, 0, 0.5, 1],
      }),
    },
  ];
  const translateX = [
    {
      translateX: loop.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 2 * SIZE_CONTAINER - 6 * SPACING, 0],
      }),
    },
  ];
  const translateY = [
    {
      translateY: spring.interpolate({
        inputRange: [0, 1],
        outputRange: [0, SIZE_TWO_CONTAINER - SIZE_BOX],
      }),
    },
  ];

  useEffect(() => {
    handleAnimatedInOut();
    startRunAround();
    animationCircle();
    handleAnimationRotate();
    Animated.loop(
      Animated.timing(loop, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 1000},
    ).start();
    Animated.loop(
      Animated.spring(spring, {
        toValue: 1,
        friction: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      {iterations: 500},
    ).start();
  }, []);


  const handleAnimatedInOut = () => {
    animatedIn.setValue(0);
    animatedOut.setValue(1);
    Animated.timing(animatedIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(animatedOut, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const startRunAround = () => {
    // Nối tiếp
    Animated.loop(
      Animated.sequence([
        Animated.timing(aroundX, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(aroundY, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(aroundX, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(aroundY, {
          toValue: 2,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {iterations: 500},
    ).start();

  };
  const translateAroundX = aroundX.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 2 * SIZE_CONTAINER - 6 * SPACING, 0],
  });
  const translateAroundY = aroundY.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, SIZE_TWO_CONTAINER - SIZE_BOX, 0],
  });


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
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> pulsate </Text>
            <Animated.Image
              resizeMode="contain"
              source={Pikachu}
              style={[styles.box, {transform: pulsate}]}
            />
          </View>
          <View style={[styles.container2Box]}>
            <Text style={[globalStyle.h3]}> Translate X </Text>
            <Animated.Image
              resizeMode="contain"
              source={Treecko}
              style={[styles.box, {transform: translateX}]}
            />
          </View>
          <View style={[styles.containerBox]}>
            <Text style={[globalStyle.h3]}> Translate Y </Text>
            <View style={{height: SIZE_TWO_CONTAINER}}>
              <Animated.Image
                resizeMode="contain"
                source={Treecko}
                style={[styles.box, {transform: translateY}]}
              />
            </View>
          </View>
          <View style={[styles.container2Box]}>
            <Text style={[globalStyle.h3]}> Around</Text>
            <View
              style={[
                styles.container2Box,
                {height: SIZE_TWO_CONTAINER, margin: 0,borderStyle:"dashed", borderWidth:2},
              ]}>
              <Animated.Image
                resizeMode="contain"
                source={Charizard}
                style={[
                  styles.box,
                  {
                    transform: [
                      {translateX: translateAroundX},
                      {translateY: translateAroundY},
                    ],
                  },
                ]}
              />
            </View>
          </View>
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
  container2Box: {
    width: SIZE_TWO_CONTAINER,
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
