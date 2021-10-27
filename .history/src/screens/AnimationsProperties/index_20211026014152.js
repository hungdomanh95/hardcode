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
  const aroundCircleY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    handleAnimatedInOut();
    startRunAround();
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

  const blink = loop.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0, 1],
  });
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
    // Animated.loop(
    //   Animated.sequence([
    //     Animated.timing(aroundCircleX, {
    //       toValue: 1,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }),
    //     Animated.timing(aroundCircleY, {
    //       toValue: 1,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }),
    //     Animated.timing(aroundCircleX, {
    //       toValue: 2,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }),
    //     Animated.timing(aroundCircleY, {
    //       toValue: 2,
    //       duration: 500,
    //       useNativeDriver: true,
    //     }),
    //   ]),
    //   {iterations: 500},
    // ).start();
    Animated.timing(
      aroundX,
      {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
      },
    )
  };
  const translateAroundX = aroundX.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 2 * SIZE_CONTAINER - 6 * SPACING, 0],
  });
  const translateAroundY = aroundY.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, SIZE_TWO_CONTAINER - SIZE_BOX, 0],
  });


  const snapshot = SIZE_BOX;
  const radius = width/1.5/2;
  // const translateCircleX = aroundCircleX.interpolate({
  //   inputRange: [0, 1, 2],
  //   outputRange: [-SIZE_BOX/2, width/1.5  - SIZE_BOX, 0],
  // });
  // const translateCircleY = aroundCircleY.interpolate({
  //   inputRange: [0, 1, 2],
  //   outputRange: [(width/1.5 - SIZE_BOX)/2, width/1.5 - SIZE_BOX, 0],
  // });
  const interpolateCircularMotionOverX = (snapshot, radius) => {
    const inputRange = [];
    const outputRange = [];
    for (let i = 0; i <= snapshot * 2; ++i) {
      const value = i / snapshot;
      const move = Math.sin(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    return { inputRange, outputRange };
  }

  const interpolateCircularMotionOverY = (snapshot, radius) => {
    const inputRange = [];
    const outputRange = [];
    for (let i = 0; i <= snapshot * 2; ++i) {
      const value = i / snapshot;
      const move = -Math.cos(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    }
    return { inputRange, outputRange };
  }

  const inOutX = interpolateCircularMotionOverX(snapshot, radius);

  const translateCircleX = aroundCircleX.interpolate(inOutX);

  const inOutY = interpolateCircularMotionOverY(snapshot, radius);

  const translateCircleY = aroundCircleX.interpolate(inOutY);



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
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Bulbasaur}
                style={[styles.box, {opacity: animatedIn}]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> fadeOut </Text>
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Charizard}
                style={[styles.box, {opacity: animatedOut}]}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.containerBox}>
            <Text style={[globalStyle.h3]}> blink </Text>
            <TouchableWithoutFeedback onPress={handleAnimatedInOut}>
              <Animated.Image
                resizeMode="contain"
                source={Dragonite}
                style={[styles.box, {opacity: blink}]}
              />
            </TouchableWithoutFeedback>
          </View>
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
                {height: SIZE_TWO_CONTAINER, margin: 0},
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
          <View style={{width,height:width, backgroundColor:"red", marginHorizontal:-SPACING, justifyContent:"center",alignItems:"center"}}>
            <Text style={[globalStyle.h3]}> Around Circle</Text>
            <View
              style={{width:width/1.5, height:width/1.5, backgroundColor:"green",borderRadius:1000 }}>
              <Animated.Image
                resizeMode="contain"
                source={Charizard}
                style={[
                  styles.box,
                  {
                    // left:-SIZE_BOX/2,
                    transform: [
                      {translateX: translateCircleX},
                      {translateY: translateCircleY},
                    ],
                  },
                ]}
              />
            </View>
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
});
