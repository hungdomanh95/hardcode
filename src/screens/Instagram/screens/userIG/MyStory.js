import React, { Fragment } from 'react'
import { View, Text, StyleSheet,TouchableOpacity,Image,ScrollView} from 'react-native'
import assets from '../../../../assets'
import size from '../../../../utils/size'
import LinearGradient from 'react-native-linear-gradient';

const listStory=[
  {
    id:2,
    name:"KarolBary",
    watched:false,
    avatar:assets.avatar2
  },
  {
    id:3,
    name:"Waggles",
    watched:false,
    avatar:assets.avatar3
  },
  {
    id:4,
    name:"Cherine",
    watched:false,
    avatar:assets.avatar4
  },
  {
    id:5,
    name:"Story 5",
    watched:false,
    avatar:assets.avatar5
  },
  {
    id:6,
    name:"Story 6",
    watched:false,
    avatar:assets.avatar6
  },
  {
    id:7,
    name:"Story 7",
    watched:false,
    avatar:assets.avatar7
  },
  {
    id:8,
    name:"Story 8",
    watched:false,
    avatar:assets.avatar8
  },
]
const MyStory = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listStory.map((item,index)=>(
            <TouchableOpacity key={index} style={styles.story} >
              <LinearGradient
                start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                colors={['#FBAA47', '#D91A46', '#A60F93']}
                style={styles.linearGradient}
              >
              <Image source={item.avatar} style={styles.iconStory} />
              </LinearGradient>
              <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  )
}

export default MyStory
const styles = StyleSheet.create({
  container:{
    height:size.height*105/size.HEIGHT_DEVICE_DS,
    paddingTop:10,
    flexDirection:"row",
  },
  story:{
    justifyContent:"space-between",
    marginHorizontal:12,
    alignItems:'center',
    paddingBottom:5
  },
  iconStory:{
    width:size.width*size.SIZE_STORY_IG/size.WIDTH_DEVICE_DS,
    height:size.width*size.SIZE_STORY_IG/size.WIDTH_DEVICE_DS,
    borderRadius:50,
    borderWidth:3,
    borderColor:"#fff",
  },
  iconPlus:{width:25, height:25, position:"absolute", right:0, bottom:0, backgroundColor:"white", borderRadius:50},
  text:{
    lineHeight:22,
  },
  linearGradient: {
    width:70,
    height:70,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
  },
});
