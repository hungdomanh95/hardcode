import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Blink from './Blink';
import Fade from './Fade';
import Scale from './Scale';
import Pulsate from './Pulsate';
import Translate from './Translate';
import Spring from './Spring';
import Square from './Square';

const SPACING = 10;
const AnimationsProperties = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.containerRow}>
          <Fade/>
          <Blink/>
          <Scale/>
          <Pulsate/>
          <Translate/>
          <Spring/>
          <Square/>
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
  containerRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: SPACING,
  },
});
