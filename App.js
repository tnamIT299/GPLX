import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigation/navigation';
import DeNgauNhien from './screens/OnTapTheoCauHoi/DeNgauNhien';

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
