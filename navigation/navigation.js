import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ManhinhChinh from '../screens/ManhinhChinh';
import ManhinhChonOption from '../screens/ManhinhChonOption';
import BienBaoTab from '../screens/BienBao/BienBaoTab';
import LuatGiaoThongTab from '../screens/LuatGiaoThong/LuatGiaoThongTab';
import Meoghinho from '../screens/Meoghinho';
import Tracuu from '../screens/Tracuu';
import Sahinh from '../screens/Sahinh';
import {HieulenhchidanXM,ChuyenhuongXM,DungxeXM,ThietbiuutienXM,TocdoXM,VanchuyenXM,TrangthietbiXM,DuongcamXM,NongdoconXM,GiaytoxeXM,KhacXM,} 
from '../screens/LuatGiaoThong/LuatXeMay/index';
import {HieulenhchidanOT,ChuyenhuongOT,DungxeOT,ThietbiuutienOT,TocdoOT,VanchuyenOT,TrangthietbiOT,DuongcamOT,NongdoconOT,GiaytoxeOT,KhacOT,} 
from '../screens/LuatGiaoThong/LuatOto/index';
import {HieulenhchidanK,ChuyenhuongK,DungxeK,ThietbiuutienK,TocdoK,VanchuyenK,TrangthietbiK,DuongcamK,NongdoconK,GiaytoxeK,KhacK,} 
from '../screens/LuatGiaoThong/LuatKhac/index';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManhinhChinh" screenOptions={{headerShown:false}}>
        <Stack.Screen name="ManhinhChinh" component={ManhinhChinh} />
        <Stack.Screen name="ManhinhChonOption" component={ManhinhChonOption} />
        <Stack.Screen name="BienBaoTab" component={BienBaoTab} />
        <Stack.Screen name="LuatGiaoThongTab" component={LuatGiaoThongTab} />
        <Stack.Screen name="Meoghinho" component={Meoghinho} />
        <Stack.Screen name="Sahinh" component={Sahinh} />
        <Stack.Screen name="Tracuu" component={Tracuu} />

        <Stack.Screen name="HieulenhchidanXM" component={HieulenhchidanXM} />
        <Stack.Screen name="ChuyenhuongXM" component={ChuyenhuongXM} />
        <Stack.Screen name="DungxeXM" component={DungxeXM} />
        <Stack.Screen name="ThietbiuutienXM" component={ThietbiuutienXM} />
        <Stack.Screen name="TocdoXM" component={TocdoXM} />
        <Stack.Screen name="VanchuyenXM" component={VanchuyenXM} />
        <Stack.Screen name="TrangthietbiXM" component={TrangthietbiXM} />
        <Stack.Screen name="DuongcamXM" component={DuongcamXM} />
        <Stack.Screen name="NongdoconXM" component={NongdoconXM} />
        <Stack.Screen name="GiaytoxeXM" component={GiaytoxeXM} />
        <Stack.Screen name="KhacXM" component={KhacXM} />

        <Stack.Screen name="HieulenhchidanOT" component={HieulenhchidanOT} />
        <Stack.Screen name="ChuyenhuongOT" component={ChuyenhuongOT} />
        <Stack.Screen name="DungxeOT" component={DungxeOT} />
        <Stack.Screen name="ThietbiuutienOT" component={ThietbiuutienOT} />
        <Stack.Screen name="TocdoOT" component={TocdoOT} />
        <Stack.Screen name="VanchuyenOT" component={VanchuyenOT} />
        <Stack.Screen name="TrangthietbiOT" component={TrangthietbiOT} />
        <Stack.Screen name="DuongcamOT" component={DuongcamOT} />
        <Stack.Screen name="NongdoconOT" component={NongdoconOT} />
        <Stack.Screen name="GiaytoxeOT" component={GiaytoxeOT} />
        <Stack.Screen name="KhacOT" component={KhacOT} />

        <Stack.Screen name="HieulenhchidanK" component={HieulenhchidanK} />
        <Stack.Screen name="ChuyenhuongK" component={ChuyenhuongK} />
        <Stack.Screen name="DungxeK" component={DungxeK} />
        <Stack.Screen name="ThietbiuutienK" component={ThietbiuutienK} />
        <Stack.Screen name="TocdoK" component={TocdoK} />
        <Stack.Screen name="VanchuyenK" component={VanchuyenK} />
        <Stack.Screen name="TrangthietbiK" component={TrangthietbiK} />
        <Stack.Screen name="DuongcamK" component={DuongcamK} />
        <Stack.Screen name="NongdoconK" component={NongdoconK} />
        <Stack.Screen name="GiaytoxeK" component={GiaytoxeK} />
        <Stack.Screen name="KhacK" component={KhacK} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
