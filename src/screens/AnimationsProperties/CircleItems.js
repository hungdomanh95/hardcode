import React, {useEffect, useRef, useState} from 'react';
import {View, StyleSheet, Text, Animated, Dimensions, Easing} from 'react-native';
import globalStyle from '../../theme/globalStyle';
import {Bulbasaur, Charizard, Squirtle, Pikachu, Treecko, Dragonite} from '../../assets';
import {interpolateCircularMotionOverY ,interpolateCircularMotionOverX} from '../../utils/position'
const {width, height} = Dimensions.get('window');
const SPACING = 10;
const SIZE_BOX = 50;
let SIZE_CIRCLE =300

const arrImg = [
  {
    id: 1,
    image: Pikachu,
  },
  {
    id: 2,
    image: Bulbasaur,
  },
  {
    id: 3,
    image: Squirtle,
  },
  {
    id: 4,
    image: Charizard,
  },
  {
    id: 5,
    image: Treecko,
  },
  {
    id: 6,
    image: Dragonite,
  },

];
const CircleItems = () => {
  const circle = useRef(new Animated.Value(0)).current;
  const [newArray, setNewArray] = useState(undefined)
  const rotate = useRef(new Animated.Value(0)).current;
  useEffect(() => {

   const newArr = arrImg.map((item, index)=>{
    var offsetAngle = 360 / arrImg.length;
		var rotateAngle = offsetAngle * index;
    var degToRad = rotateAngle * Math.PI / 180;
     return {...item, left:SIZE_CIRCLE/2 * Math.cos(degToRad) + SIZE_CIRCLE/2, top:SIZE_CIRCLE/2 * Math.sin(degToRad) + SIZE_CIRCLE/2 }
    })
    setNewArray(newArr)
    // Animated.loop(
    //   Animated.timing(circle, {
    //     toValue: 1,
    //     duration: 3000,
    //     useNativeDriver: true,
    //     easing: Easing.linear,
    //   }),
    //   {iterations: 1000},
    // ).start();
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 7000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  }, []);

  // const snapshot = SIZE_BOX ;
  // const radius = SIZE_CIRCLE / 2 ;

  // const inOutX = interpolateCircularMotionOverX(snapshot, radius);
  // const translateCircleX = circle.interpolate(inOutX);

  // const inOutY = interpolateCircularMotionOverY(snapshot, radius);
  // const translateCircleY = circle.interpolate(inOutY);
  var inputRange = [0, 1];
  var outputRange = ['0deg', '360deg'];
  animatedRotate = rotate.interpolate({inputRange, outputRange});
  outputRange = ['0deg', '-360deg'];
  rotateOpposit = rotate.interpolate({inputRange, outputRange});
  const transform = [{rotate: animatedRotate}];
  const transform1 = [{rotate: rotateOpposit}];

  return (
    <View style={styles.container}>
      <Text style={[globalStyle.h3,{marginBottom:SIZE_BOX}]}> Around Circle</Text>
      <Animated.View style={[styles.containerCircle,{transform}]}>
          {newArray &&  newArray.map((item,index)=>{
            return(
              <Animated.Image
                key={index}
                resizeMode="contain"
                source={item.image}
                style={[
                  styles.box,
                  {
                    left:item.left,
                    top:item.top,
                  //   transform: [
                  //   // {translateX: index === 1 ? -SIZE_CIRCLE/2 : translateCircleX},
                  //   {translateX:0},
                  //   {translateY:item.translate},
                  //   // {rotateX:item.rotate},
                  //   // {rotateY:`-${item.rotate}`}
                  // ]
                  transform: transform1

                },
                ]}
              />
            )
          })}


      </Animated.View>
    </View>
  );
};

export default CircleItems;
const styles = StyleSheet.create({
  box: {
    width: SIZE_BOX,
    height: SIZE_BOX,
    position: "absolute",
    margin: - 0.5 * SIZE_BOX,
    // top:SIZE_CIRCLE/2,
    // left:SIZE_CIRCLE/2
  },
  container: {
    width,
    height: width,
    marginHorizontal: -SPACING,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerCircle: {
    position: "relative",
    width: SIZE_CIRCLE,
    height: SIZE_CIRCLE,
    borderRadius: 1000,
    // justifyContent: 'center',
    // alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 2,
  },
});
