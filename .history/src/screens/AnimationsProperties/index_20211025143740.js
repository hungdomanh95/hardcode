import React from 'react';
import {View, StyleSheet, Text, SafeAreaView, Animated, TouchableWithoutFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Timing from './Timing';
import globalStyle from '../../theme/globalStyle'
const AnimationsProperties = () => {

  useEffect(() => {
    Animated.timing(scale, {
      toValue: 2,
      duration: 5000,
      useNativeDriver: true,
    }).start()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerBox}>
          <Text style={[globalStyle.h3]}> Timing </Text>
          <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View style={[styles.box, {opacity: valueAnimated}]} />
          </TouchableWithoutFeedback>

          {/* <Animated.View style={[styles.box,{ transform:[{scale:scale}]}]} /> */}
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
  row: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
});
