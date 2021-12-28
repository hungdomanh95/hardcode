import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import assets from '../../../../assets';
import Header from './Header';
import Post from './Post';
import Story from './Story';

const HomeIG = () => {
  console.log("HomeIG");
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Story />
      <Post/>
    </SafeAreaView>
  );
};

export default HomeIG;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
