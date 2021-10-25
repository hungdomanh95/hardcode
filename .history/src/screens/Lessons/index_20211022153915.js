import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, { Value } from 'react-native-reanimated';
import {cards, Card, Button} from '../../components';
console.log('cards: ', cards[0]);
const Lessons = () => {
  const [show, setShow] = useState(true);
  const startAnimation = new Value(0)
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Animated.View style={{ opacity: show ? 1 : 0 }}>
          <Card card={cards[0]} />
        </Animated.View>
      </View>
      <Button label={"Togle"} primary onPress={() => startAnimation.setValue(1)} />
    </View>
  );
};

export default Lessons;
const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
