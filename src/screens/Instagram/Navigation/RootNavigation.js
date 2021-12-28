import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIG from '../screens/home';
import MessengerIG from '../screens/messenger';
import ReelsIG from '../screens/reels';
import SearchIG from '../screens/search';
import TabBottom from '../TabBottom';
import UserIG from '../screens/userIG';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootTab = () => {
  return (
     <Tab.Navigator tabBar={props => <TabBottom {...props} />} >
      <Tab.Screen name="HomeIG" component={HomeIG} />
      <Tab.Screen name="MessengerIG" component={MessengerIG} />
      <Tab.Screen name="ReelsIG" component={ReelsIG} />
      <Tab.Screen name="SearchIG" component={SearchIG} />
      <Tab.Screen name="UserIG" component={UserIG} />
    </Tab.Navigator>
  )
}

const RootNavigation = () => {
  const screenOptions = {
    headerShown: false,
  };
  return (
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="RootTab" component={RootTab} />
      </Stack.Navigator>
  )
}
export default RootNavigation