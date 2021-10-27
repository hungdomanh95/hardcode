import { Dimensions, StyleSheet } from 'react-native';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const globalStyle = StyleSheet.create({
  widthScreen,
  heightScreen,
  h2:{
    fontSize:32,
    fontWeight:"700",
  },
  h3:{
    fontSize:16,
    fontWeight:"700",
    marginBottom:5
  },
});

export default globalStyle;
