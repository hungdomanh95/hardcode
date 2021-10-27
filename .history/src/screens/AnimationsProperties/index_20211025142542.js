import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Timing from './Timing';

const AnimationsProperties = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1 , backgroundColor:"blue"}}>
        <ScrollView style={{flex:1, backgroundColor:"green"}} >
          <Timing />
          {/* <Timing /> */}
        </ScrollView>
      </SafeAreaView>
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
