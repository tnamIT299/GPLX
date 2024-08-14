import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; 

const IconCard = ({ iconName, label, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: color }]} onPress={onPress}>
      <Icon name={iconName} size={30} color="#fff" />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 8,
    height: 100,
  },
  label: {
    marginTop: 10,
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default IconCard;
