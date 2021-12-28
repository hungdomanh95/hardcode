import { Dimensions } from 'react-native'
const {width, height} = Dimensions.get('window');
const WIDTH_DEVICE_DS = 375
const HEIGHT_DEVICE_DS = 812
export default size = {
  SIZE_ICON_IG:width*24/WIDTH_DEVICE_DS,
  SIZE_STORY_IG:62,
  HEIGHT_DEVICE_DS,
  WIDTH_DEVICE_DS,
  width, height
}