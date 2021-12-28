import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import assets from '../../../../assets'
import size from '../../../../utils/size'

const Header = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity>
        <Image source={assets.IG_logo} />
      </TouchableOpacity>
      <View style={{flexDirection:"row"}} >
        <TouchableOpacity>
          <Image source={assets.iconAdd} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={assets.iconHeart} style={[styles.icon,{marginLeft:20}]} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header
const styles = StyleSheet.create({
  container:{
    height:(size.height*36)/size.HEIGHT_DEVICE_DS,
    paddingHorizontal:15,
    paddingVertical:3,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:'center'
  },
  icon:{
    width:size.SIZE_ICON_IG,
    height:size.SIZE_ICON_IG,
  }
});
