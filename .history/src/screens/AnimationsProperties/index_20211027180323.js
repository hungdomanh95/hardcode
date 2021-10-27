import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Fade from './Fade';

const SPACING = 10;
const AnimationsProperties = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={style.containerRow}>
          <Fade/>
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
