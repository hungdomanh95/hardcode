import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Timing from './Timing';

const AnimationsProperties = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Timing />
      </ScrollView>
    </View>
  );
};

export default AnimationsProperties;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
