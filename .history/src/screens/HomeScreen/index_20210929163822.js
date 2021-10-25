import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView,ScrollView, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RNBackground} from '../../assets';
import globalStyle from '../../theme/globalStyle';
import { listHardCode } from '../../utils/listItems';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={globalStyle.h2}>React Native</Text>
      <Image source={RNBackground} style={styles.bgHome} />
      <ScrollView>
        {listHardCode.map((index,item)=>{
          return(
            <TouchableOpacity>
               <Image source={item.icon} style={styles.iconHome} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>


    </SafeAreaView>
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
    height:globalStyle.heightScreen/4,
  },
  iconHome:{
    width:globalStyle.widthScreen/15,
    height:globalStyle.widthScreen/15,
  }
});
