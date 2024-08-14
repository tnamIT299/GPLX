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
import HieulenhchidanXM from '../screens/LuatGiaoThong/LuatXeMay/Hieulenhchidan';
import ChuyenhuongXM from '../screens/LuatGiaoThong/LuatXeMay/Chuyenhuong';
import DungxeXM from '../screens/LuatGiaoThong/LuatXeMay/Dungxe';
import ThietbiuutienXM from '../screens/LuatGiaoThong/LuatXeMay/Thietbiuutien';
import TocdoXM from '../screens/LuatGiaoThong/LuatXeMay/Tocdo';
import VanchuyenXM from '../screens/LuatGiaoThong/LuatXeMay/Vanchuyen';
import TrangthietbiXM from '../screens/LuatGiaoThong/LuatXeMay/Trangthietbi';
import DuongcamXM from '../screens/LuatGiaoThong/LuatXeMay/Duongcam';
import NongdoconXM from '../screens/LuatGiaoThong/LuatXeMay/Nongdocon';
import GiaytoxeXM from '../screens/LuatGiaoThong/LuatXeMay/Giaytoxe';
import KhacXM from '../screens/LuatGiaoThong/LuatXeMay/Khac';

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
        <Stack.Screen name="Hieulenhchidan" component={HieulenhchidanXM} />
        <Stack.Screen name="Chuyenhuong" component={ChuyenhuongXM} />
        <Stack.Screen name="Dungxe" component={DungxeXM} />
        <Stack.Screen name="Thietbiuutien" component={ThietbiuutienXM} />
        <Stack.Screen name="Tocdo" component={TocdoXM} />
        <Stack.Screen name="Vanchuyen" component={VanchuyenXM} />
        <Stack.Screen name="Trangthietbi" component={TrangthietbiXM} />
        <Stack.Screen name="Duongcam" component={DuongcamXM} />
        <Stack.Screen name="Nongdocon" component={NongdoconXM} />
        <Stack.Screen name="Giaytoxe" component={GiaytoxeXM} />
        <Stack.Screen name="Khac" component={KhacXM} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
