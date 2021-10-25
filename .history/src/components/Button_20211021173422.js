import React from 'react';
import {View, Text, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import StyleGuide from '../theme/StyleGuide';
const {width, height} = Dimensions.get('window');

const Button = ({label, onPress, primary}) => {
  const color = primary ? 'white' : undefined;
  const backgroundColor = primary ? StyleGuide.palette.primary : undefined;

  return (
    <View style={styles.containerButton}>
      <TouchableOpacity style={[styles.button,{backgroundColor}]} onPress={onPress}>
        <Text style={{color, textAlign: "center"}}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
const styles = StyleSheet.create({
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 50,
  },
  button: {
    padding: StyleGuide.spacing * 2,
    borderRadius: 5,
  },
});
