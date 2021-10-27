import React from 'react'
import { View, Text } from 'react-native'

const Rotate = () => {
  return (
    <View style={{width,height:width, marginHorizontal:-SPACING, justifyContent:"center",alignItems:"center"}}>
    <Animated.View style={[styles.item, {transform}]}>
        <Animated.View style={[styles.dot,{transform:transform1}]}>
          <Text style={styles.text} >Text</Text>
        </Animated.View>
        {/* <Animated.View style={[styles.dot1,{transform:transform1}]}>
          <Text style={styles.text}>Text1</Text>
        </Animated.View>
        <Animated.View style={[styles.dot2,{transform:transform1}]}>
          <Text style={styles.text}>Text2</Text>
        </Animated.View> */}
      </Animated.View>
  </View>

  )
}

export default Rotate
const styles = StyleSheet.create({
  item: {
    position: 'absolute',
    width: 200,
    height: 200, // this is the diameter of circle
    backgroundColor:"green",
    borderRadius:100,
    justifyContent:"center",
    // alignItems:"center"
},
dot: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left:-25,
    borderRadius:100
},
dot1: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top:25,
    left:-25,
    borderRadius:100
},
dot2: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top:125,
    left:-25,
    borderRadius:100
},
text: {
    color: '#fff',
},
});
