import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
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
import { cards, Card, Button} from '../../components';
const Lessons = () => {
  const [show, setShow] = useState(true)
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={{ opacity : show ? 1 : 0}}>
          <Card card={cards[0]} />
        </Animated.View>
      </View>
      <Button label="Toggle" primary />
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

