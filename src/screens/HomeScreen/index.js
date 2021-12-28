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
import size from '../../utils/size';
const SIZE_ICON = 60
const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[globalStyle.h2,{textAlign:"center"}]}>React Native</Text>
      <Image source={RNBackground} style={styles.bgHome} />
      <ScrollView style={styles.container}>
        <View style={styles.containerItem}>
          {listHardCode.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={styles.stylesIcon}
              onPress={()=>navigation.navigate(`${item.navigation}`)}
              >
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
    flex: 1,
    backgroundColor:"white",
  },
  bgHome: {
    width:size.width,
    height: size.height / 4,
  },
  iconHome: {
    width: SIZE_ICON,
    height: SIZE_ICON,
  },
  containerItem: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop:25,
  },
  stylesIcon: {
    width: size.width / 3,
    alignItems:"center",
    padding: 20,
    // borderColor:"#ddd",
    // borderWidth:1
  },
});
