import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fullViolations } from '../../../data/full-laws'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const GiaytoxeXMTab = ({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const filteredViolations = fullViolations.filter(item =>
    item.topicCode === 10 &&
    item.entities.includes('xe mô tô')
  );

  const filterData = () => {
    return filteredViolations.filter(item =>
      item.violation.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Icon style={styles.icon} size={30} name='search' />
        <TextInput
          onChangeText={(text) => setSearchText(text)}
          autoCorrect={false}
          style={styles.textInput}
          placeholder="Search"
          value={searchText}
        />
      </View>
      <View  style={{ marginBottom:120}}>
        {filterData().length > 0 ? (
          <ScrollView>
            {filterData().map((item, index) => (
              <View key={index} style={styles.violationContainer}>
                <Text style={styles.violationText}>{item.violation}</Text>
                <Text style={styles.finesText}>{item.fines}</Text>
                
              </View>
            ))}
          </ScrollView>
        ) : (
          <View style={styles.notFoundContainer}>
            <Text style={styles.notFoundText}>
              Không tìm thấy. Vui lòng thử lại.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const GiaytoxeXMStack = () => {
  return (
    <Stack.Navigator>
    <Stack.Screen
      name="GiaytoxeXMTab"
      component={GiaytoxeXMTab}
      options={({ navigation }) => ({
        title: 'Giấy tờ xe',
        headerTitleAlign: 'center',
        headerStyle: { backgroundColor: '#2F95DC' },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: 'bold' },
        headerLeft: () => (
          <Icon name="chevron-left"
          size={15}
            onPress={() => navigation.goBack()}
            style={{ color: '#FFFFFF', marginLeft: 10 }}
          >
            Back
          </Icon>
        ),
      })}
    />
  </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    height: 60,
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  violationContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  violationText: {
    color: '#0066cc',
    fontSize: 16,
    fontWeight: 'bold',
  },
  finesText: {
    color: 'red',
    fontSize: 14,
  },
  detailText: {
    color: '#0066cc',
    fontSize: 14,
    marginTop: 5,
  },
  textInput: {
    height: 40,
    marginTop: 20,
    marginBottom: 20,
    marginRight: 50,
    left: 40,
    flex: 1,
    borderRadius: 20,
    paddingStart: 20,
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
  },
  icon: {
    position: 'absolute',
    width: 30,
    height: 30,
    top: 10,
    left: 5,
  },
  notFoundContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  notFoundText: {
    textAlign: 'center',
    top: 100,
    fontSize: 15,
    width: '80%',
  },
});

export default GiaytoxeXMStack;
