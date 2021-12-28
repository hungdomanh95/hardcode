import React from 'react'
import { View, Text,StyleSheet, Image,TouchableOpacity, ScrollView, FlatList } from 'react-native'
import assets from '../../../../assets'
import size from '../../../../utils/size'
const arrImg=[assets.post9,assets.post10,assets.post11,assets.post12,assets.post13,assets.post14,assets.post15,assets.post16,assets.post1,assets.post2,assets.post3,assets.post4,assets.post5,assets.post6,assets.post7,assets.post8]

const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTab} >
        <TouchableOpacity style={styles.itemTab} >
          <Image source={assets.iconGrid} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.itemTab}>
          <Image source={assets.iconMentions} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={[styles.container]} >
        <View style={styles.contanerImg}>
          {arrImg.map((item,index)=>{
            return(
              <TouchableOpacity key={index} >
                <Image source={{uri:item}} style={styles.imgUser}  />
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}

export default Tab
const styles = StyleSheet.create({
  container:{
    flex:1
  },
  containerTab:{
    flexDirection:"row",
    justifyContent:"space-between",
    height:size.height*42/size.HEIGHT_DEVICE_DS
  },
  icon:{
    width:size.SIZE_ICON_IG,
    height:size.SIZE_ICON_IG
  },
  itemTab:{
    width:size.width/2,
    justifyContent:"center",
    alignItems:"center"
  },
  contanerImg:{
    flexDirection: 'row',
    flexWrap:"wrap"
  },
  imgUser:{
    width:size.width/3,
    height:size.width/3,
    borderWidth:0.5,
    borderColor:"white"
  }
});
