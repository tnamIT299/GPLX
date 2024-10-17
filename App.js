import {TextDecoder,TextEncoder} from 'text-encoding'; // Import the polyfill
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Navigation from './navigation/navigation';

// Khởi tạo polyfill
if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = require('text-encoding').TextEncoder;
}
if (typeof TextDecoder === 'undefined') {
  global.TextDecoder = require('text-encoding').TextDecoder;
}

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