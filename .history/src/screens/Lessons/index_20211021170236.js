import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import Card  from '../../components/Card'
import Animated, {
  Clock,
  Extrapolate,
  Value,
  add,
  cond,
  eq,
  interpolateNode,
  not,
  set,
  startClock,
  useCode,
} from "react-native-reanimated";
const Lessons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={{ opacity }}>
          <Card card={cards[0]} />
        </Animated.View>
      </View>
      {/* <Button label="Toggle" primary onPress={() => startTime.setValue(-1)} /> */}
    </View>
  )
}

export default Lessons
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  card:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  }
});

