import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ManhinhChinh from'./screens/ManhinhChinh';
import ManhinhChonOption from './screens/ManhinhChonOption';
import Navigation from './navigation/navigation';
import BienBaoTab from './screens/BienBao/BienBaoTab';
import Meoghinho from './screens/Meoghinho';
import Tracuu from './screens/Tracuu';
import Sahinh from './screens/Sahinh';
import Hieulenhchidan from './screens/LuatGiaoThong/LuatXeMay/HieulenhchidanXM'
import BoDeThi from './screens/BoDe/BoDeThi';
export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
