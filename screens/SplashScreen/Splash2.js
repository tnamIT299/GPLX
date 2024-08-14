import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Splash2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/splash/town.webp')} style={styles.image} />
      <Text style={styles.text}>Cho Cộng Đồng</Text>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={() => navigation.navigate('Splash3')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
  },
  image: {
    width: 450,
    height: 450,
    resizeMode:'contain',
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
});

export default Splash2;
