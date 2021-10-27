import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Timing from './Timing';

const AnimationsProperties = () => {
  return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView >
            <Timing />
        </ScrollView> */}
        <Timing />
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
});
