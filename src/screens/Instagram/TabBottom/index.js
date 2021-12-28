import React,{ useState } from 'react';
import {View, Dimensions, StyleSheet, Image, TouchableOpacity} from 'react-native';
import assets from '../../../assets';
const {width, height} = Dimensions.get('window');
const SIZE_ICON = 25;
const HEIGHT_BOTTOM = 79
const HEIGHT_ICON = 50
const listBottom = [
  {
    id: 1,
    name: 'Home',
    route:"HomeIG",
    icon: assets.iconHome,
    iconActive:assets.iconHomeActive
  },
  {
    id: 2,
    name: 'Search',
    route:"SearchIG",
    icon: assets.iconSearch,
    iconActive:assets.iconSearchActive
  },
  {
    id: 3,
    name: 'Reels',
    route:"ReelsIG",
    icon: assets.iconReels,
    iconActive:assets.iconReelsActive
  },
  {
    id: 4,
    name: 'Messenger',
    route:"MessengerIG",
    icon: assets.iconMessenger,
    iconActive:assets.iconMessengerActive
  },
  {
    id: 5,
    name: 'User',
    route:"UserIG",
    icon: assets.Charizard,
  },
];
const LENGTH_BOTTOM = listBottom.length

const TabBottom = ({navigation}) => {
  const [active, setActive] = useState(0)

  const navigate = (item,index) => {
    navigation.navigate({ name: item.route, merge: true })
    setActive(index)
  }

  return (
    <View style={styles.container}>
      {listBottom.map((item, index) => (
          <TouchableOpacity key={index} style={styles.containerIcon}
            onPress={() => navigate(item,index)}
          >
            {index === active ?
              <Image source={item.iconActive} style={[styles.iconBottom,item.name === "User" && {
                borderRadius:SIZE_ICON/2, borderColor:"#000", borderWidth:1.5}]} />
              :
              <Image source={item.icon} style={[styles.iconBottom,item.name === "User" && {
                borderRadius:SIZE_ICON/2}]} />
            }
          </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT_BOTTOM,
    flexDirection:"row",
    backgroundColor:"white"
  },
  iconBottom: {
    width: SIZE_ICON,
    height: SIZE_ICON,
  },
  containerIcon:{
    width:width/LENGTH_BOTTOM,
    justifyContent:'center',
    alignItems:"center",
    height:HEIGHT_ICON
  }
});

export default TabBottom;
