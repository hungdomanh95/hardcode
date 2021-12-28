import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { asin } from 'react-native-reanimated'
import assets from '../../../../assets'
import size from '../../../../utils/size'
import LinearGradient from 'react-native-linear-gradient';
import globalStyle from '../../../../theme/globalStyle'
const UserData = () => {
  return (
    <View style={styles.container} >
      <TouchableOpacity>
        <LinearGradient
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          colors={['#FBAA47', '#D91A46', '#A60F93']}
          style={styles.linearGradient}
        >
          <Image source={assets.avatar3} style={styles.avatar} />
        </LinearGradient>
      </TouchableOpacity>
      <View style={[globalStyle.row,{marginRight:43}]} >
        <View style={styles.data} >
          <Text style={styles.textBold}>54</Text>
          <Text style={styles.text}>Posts</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.textBold}>834</Text>
          <Text style={styles.text}>Followers</Text>
        </View>
        <View style={styles.data}>
          <Text style={styles.textBold}>162</Text>
          <Text style={styles.text}>Following</Text>
        </View>
      </View>
    </View>
  )
}

export default UserData
const styles = StyleSheet.create({
  container:{
    height:size.height*90/size.HEIGHT_DEVICE_DS,
    flexDirection:'row',
    alignItems:"center",
    paddingHorizontal:15,
    justifyContent:'space-between'
  },
  linearGradient: {
    width:88,
    height:88,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },
  avatar:{
    width:size.width*77/size.WIDTH_DEVICE_DS,
    height:size.width*77/size.WIDTH_DEVICE_DS,
    borderRadius:50,
    borderWidth:3,
    borderColor:"#fff",
  },
  textBold:{
    fontSize:19,
    fontWeight:"bold",
    lineHeight:19
  },
  text:{
    fontSize:13,
    lineHeight:15
  },
  data:{
    alignItems:"center",
    marginLeft:25
  }
});
