import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../pages/home-page/index';
import DetailPage from '../pages/detail-page/detail';
import Splash from '../components/Splash'
import About from '../pages/home-page/about'

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="MovGa">
    <Stack.Screen name="Home Page" component={HomePage} />
    <Stack.Screen name="Detail Page" component={DetailPage} />
    <Stack.Screen name="MovGa" component={Splash} />
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);
