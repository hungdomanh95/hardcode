import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RNBackground} from '../../assets';
import globalStyle from '../../theme/globalStyle';
import {listHardCode} from '../../utils/listItems';
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={globalStyle.h2}>React Native</Text>
      <Image source={RNBackground} style={styles.bgHome} />
      <ScrollView style={styles.container}>
        <View style={styles.containerItem}>
          {listHardCode.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.stylesIcon} onPress={()=>navigation.navigate(`${item.navigation}`))>
                <Image source={item.icon} style={styles.iconHome} />
                <Text>{item.nameProject}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
  },
  bgHome: {
    width: globalStyle.widthScreen,
    height: globalStyle.heightScreen / 4,
  },
  iconHome: {
    width: 96,
    height: 96,
  },
  containerItem: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  stylesIcon: {
    width: globalStyle.widthScreen / 2.5,
    marginHorizontal: 10,
    alignItems:"center",
    padding: 20,
  },
});
