import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import BienBaoCam from '../BienBao/BienBaoCam';
import BienBaoHieuLenh from '../BienBao/BienBaoHieuLenh';
import BienBaoNguyHiem from '../BienBao/BienBaoNguyHiem';
import BienBaoChiDan from '../BienBao/BienBaoChiDan';
import BienBaoPhu from '../BienBao/BienBaoPhu';
import VachKeDuong from '../BienBao/VachKeDuong';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const BienBaoTab = () => {
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
      <Tab.Screen name="Biển báo cấm" component={BienBaoCam} />
      <Tab.Screen name="Biển báo nguy hiểm" component={BienBaoNguyHiem} />
      <Tab.Screen name="Biển báo hiệu lệnh" component={BienBaoHieuLenh} />
      <Tab.Screen name="Biển báo chỉ dẫn" component={BienBaoChiDan} />
      <Tab.Screen name="Biển báo phụ" component={BienBaoPhu} />
      <Tab.Screen name="Vạch kẻ đường" component={VachKeDuong} />
    </Tab.Navigator>
  );
};
const BienBaoStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BienBao"
        component={BienBaoTab}
        options={({ navigation }) => ({
          title: 'Biển báo đường bộ',
          headerStyle: { backgroundColor: '#2F95DC' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerLeft: () => (
            <Text
              onPress={() => navigation.goBack()}
              style={{ color: '#FFFFFF', marginLeft: 10 }}
            >
              Back
            </Text>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default BienBaoStack;
