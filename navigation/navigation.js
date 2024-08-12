import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManhinhChinh from '../screens/ManhinhChinh';
import ManhinhChonOption from '../screens/ManhinhChonOption';
import BienBaoTab from '../screens/BienBao/BienBaoTab';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManhinhChinh" screenOptions={{headerShown:false}}>
        <Stack.Screen name="ManhinhChinh" component={ManhinhChinh} />
        <Stack.Screen name="ManhinhChonOption" component={ManhinhChonOption} />
        <Stack.Screen name="BienBaoTab" component={BienBaoTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
