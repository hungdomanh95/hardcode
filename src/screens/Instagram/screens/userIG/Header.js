import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import assets from '../../../../assets'
import globalStyle from '../../../../theme/globalStyle'
import size from '../../../../utils/size'
const Header = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={globalStyle.row} >
        <Text style={styles.textName}> hungK.dev </Text>
        <Image source={assets.iconDropdown} style={styles.iconDropdown} />
      </TouchableOpacity>
      <View style={[globalStyle.row,{marginLeft:"auto"}]} >
        <TouchableOpacity>
          <Image source={assets.iconAdd} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={assets.iconBurger} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  container:{
    flexDirection:"row",
    height:size.height*44/size.HEIGHT_DEVICE_DS,
    paddingHorizontal:15
  },
  iconDropdown:{
    width:size.width*16/size.WIDTH_DEVICE_DS,
    height:size.width*16/size.WIDTH_DEVICE_DS
  },
  icon:{
    width:size.SIZE_ICON_IG,
    height:size.SIZE_ICON_IG,
    marginLeft:26
  },
  textName:{
    fontWeight:"bold",
    fontSize:22,
    lineHeight:26
  }
});