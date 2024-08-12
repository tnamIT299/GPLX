import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManhinhChinh from '../screens/ManhinhChinh';
import ManhinhChonOption from '../screens/ManhinhChonOption';
import BienBaoTab from '../screens/BienBao/BienBaoTab';
import Meoghinho from '../screens/Meoghinho';
import Tracuu from '../screens/Tracuu';
import Sahinh from '../screens/Sahinh';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManhinhChinh" screenOptions={{headerShown:false}}>
        <Stack.Screen name="ManhinhChinh" component={ManhinhChinh} />
        <Stack.Screen name="ManhinhChonOption" component={ManhinhChonOption} />
        <Stack.Screen name="BienBaoTab" component={BienBaoTab} />
        <Stack.Screen name="Meoghinho" component={Meoghinho} />
        <Stack.Screen name="Sahinh" component={Sahinh} />
        <Stack.Screen name="Tracuu" component={Tracuu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
