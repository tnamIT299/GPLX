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
import History from '../screens/History';
import {HieulenhchidanXM,ChuyenhuongXM,DungxeXM,ThietbiuutienXM,TocdoXM,VanchuyenXM,TrangthietbiXM,DuongcamXM,NongdoconXM,GiaytoxeXM,KhacXM,} 
from '../screens/LuatGiaoThong/LuatXeMay/index';
import {HieulenhchidanOT,ChuyenhuongOT,DungxeOT,ThietbiuutienOT,TocdoOT,VanchuyenOT,TrangthietbiOT,DuongcamOT,NongdoconOT,GiaytoxeOT,KhacOT,} 
from '../screens/LuatGiaoThong/LuatOto/index';
import {HieulenhchidanK,ChuyenhuongK,DungxeK,ThietbiuutienK,TocdoK,VanchuyenK,TrangthietbiK,DuongcamK,NongdoconK,GiaytoxeK,KhacK,} 
from '../screens/LuatGiaoThong/LuatKhac/index';
import { Splash1, Splash2, Splash3 } from '../screens/SplashScreen/index';
import {
  BienBaoDuongBo, SaHinh, ToanBoCauHoi, VanHoaDaoDuc, KyThuatLaiXe, DeThiKhaiNiemQuyTac, OnTapTheoCauHoi,CauLiet,DeNgauNhien,CacCauBiSai,CauHoiTimKiem
} from '../screens/OnTapTheoCauHoi/index';
import { BoDeThi,BoDe1,BoDe2,BoDe3,BoDe4,BoDe5,BoDe6,BoDe7,BoDe8 } from '../screens/BoDe';
import {Login, Register, RecoverPassword, Account, ChangePassword} from '../screens/Account';



const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash1" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Splash1" component={Splash1} />
        <Stack.Screen name="Splash2" component={Splash2} />
        <Stack.Screen name="Splash3" component={Splash3} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="ManhinhChinh" component={ManhinhChinh} />
        <Stack.Screen name="ManhinhChonOption" component={ManhinhChonOption} />
        <Stack.Screen name="BoDeThi" component={BoDeThi} />
        <Stack.Screen name="OnTapTheoCauHoi" component={OnTapTheoCauHoi} />
        <Stack.Screen name="BienBaoTab" component={BienBaoTab} />
        <Stack.Screen name="LuatGiaoThongTab" component={LuatGiaoThongTab} />
        <Stack.Screen name="Meoghinho" component={Meoghinho} />
        <Stack.Screen name="Sahinh" component={Sahinh} />
        <Stack.Screen name="Tracuu" component={Tracuu} />
        <Stack.Screen name="History" component={History} />

        {/*Screen Luật giao thông cho Xe máy*/}
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


        {/*Screen Luật giao thông cho Ô tô*/}
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

        {/*Screen Luật giao thông cho Khác*/}
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

         {/*Screen Ôn Tập câu hỏi*/}
         <Stack.Screen name="DeThiKhaiNiemQuyTac" component={DeThiKhaiNiemQuyTac} />
         <Stack.Screen name="VanHoaDaoDuc" component={VanHoaDaoDuc} />
         <Stack.Screen name="KyThuatLaiXe" component={KyThuatLaiXe} />
         <Stack.Screen name="BienBaoDuongBo" component={BienBaoDuongBo} />
         <Stack.Screen name="SaHinh" component={SaHinh} />
         <Stack.Screen name="ToanBoCauHoi" component={ToanBoCauHoi} />
         <Stack.Screen name="CauLiet" component={CauLiet} />
         <Stack.Screen name="DeNgauNhien" component={DeNgauNhien} />
         <Stack.Screen name="CacCauBiSai" component={CacCauBiSai} />
         <Stack.Screen name="CauHoiTimKiem" component={CauHoiTimKiem} />

         {/*Screen Ôn Tập theo bộ đề*/}
         <Stack.Screen name="BoDe1" component={BoDe1} />
         <Stack.Screen name="BoDe2" component={BoDe2} />
         <Stack.Screen name="BoDe3" component={BoDe3} />
         <Stack.Screen name="BoDe4" component={BoDe4} />
         <Stack.Screen name="BoDe5" component={BoDe5} />
         <Stack.Screen name="BoDe6" component={BoDe6} />
         <Stack.Screen name="BoDe7" component={BoDe7} />
         <Stack.Screen name="BoDe8" component={BoDe8} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation
