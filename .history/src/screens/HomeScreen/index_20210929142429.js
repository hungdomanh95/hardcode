import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RNBackground} from '../../assets';
import globalStyle from '../../theme/globalStyle';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={{flex: 1, flexDirection: 'row'}}> */}
        <Image source={RNBackground} style={styles.bgHome} />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  bgHome: {
    aspectRatio: 2000 / 720,
    width: globalStyle.widthScreen,
    // height:globalStyle.heightScreen/2
  },
});
