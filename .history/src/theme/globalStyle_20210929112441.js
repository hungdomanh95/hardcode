// eslint-disable-next-line prettier/prettier
import { Dimensions, StyleSheet } from 'react-native';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const globalStyle = StyleSheet.create({
  widthScreen,
  heightScreen,
});

export default globalStyle;
