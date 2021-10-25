import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RNBackground} from '../../assets';
import globalStyle from '../../theme/globalStyle';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <Image source={RNBackground} style={styles.bgHome} />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bgHome: {
    width: globalStyle.widthScreen,
    height:globalStyle.heightScreen/5,
  },
});
