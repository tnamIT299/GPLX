import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './navigation/navigation';


export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});