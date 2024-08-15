import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import LuatXeMay from '../LuatGiaoThong/LuatXeMay'
import LuatOto from '../LuatGiaoThong/LuatOto'
import LuatKhac from '../LuatGiaoThong/LuatKhac'


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const LuatGiaoThongTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 8, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#FFFFFF' }, 
        tabBarActiveTintColor: '#2F95DC',
        tabBarInactiveTintColor: '#666666', 
        tabBarIndicatorStyle: { backgroundColor: '#FFFFFF' },
        tabBarScrollEnabled: true,
      }}
    >
       <Tab.Screen name="Xe Máy" component={LuatXeMay} />
      <Tab.Screen name="Ô Tô" component={LuatOto} />
      <Tab.Screen name="Khác" component={LuatKhac} />
    </Tab.Navigator>
  );
};
const LuatGiaoThongStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BienBao"
        component={LuatGiaoThongTab}
        options={({ navigation }) => ({
          title: 'Tra cứu luật giao thông',
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: '#2F95DC' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Icon name="chevron-left"
            size={15}
              onPress={() => navigation.goBack()}
              style={{ color: '#FFFFFF', marginLeft: 10 }}
            >Back</Icon>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default LuatGiaoThongStack;
