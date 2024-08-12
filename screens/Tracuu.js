import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tracuu = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
      <Icon name="chevron-left"
            size={18}
              onPress={() => navigation.goBack()}
              style={{ color: '#FFFFFF', marginRight: 20, marginTop:6 }}
            >
              Back
            </Icon>
        <Text style={styles.header}>Tra cứu</Text>
      </View>
        <ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sahinh')}>
        <Image 
          source={require('../assets/icon/icons8-road1.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Thực hành Sa hình A1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('BienBaoTab')}>
        <Image 
          source={require('../assets/icon/icons8-traffic.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Biển báo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Meoghinho')}>
        <Image 
          source={require('../assets/icon/idea.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Mẹo 600 câu thi GPLX</Text>
      </TouchableOpacity>

        </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    padding: 16,
    backgroundColor: '#2F95DC',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    marginRight: 70,
    fontSize: 18,
    marginTop: 5,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  button: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 120,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  icon: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: 10,
  },
});

export default Tracuu;
