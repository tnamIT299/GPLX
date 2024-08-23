import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import * as Progress from 'react-native-progress';

const Stack = createStackNavigator();

const items = [
    { id: '1', name: 'Toàn bộ câu hỏi', title: '200 câu hỏi bao gồm 20 câu điểm liệt', progress: 200 },
    { id: '2', name: 'Khái niệm và quy tắc giao thông', title: '83 câu: Từ câu 1 đến câu 83, có 18 câu điểm liệt', progress: 65 },
    { id: '3', name: 'Văn hoá và đạo đức', title: '5 câu: Từ câu 84 đến câu 88', progress: 5 },
    { id: '4', name: 'Kỹ thuật lái xe', title: '12 câu: Từ câu 89 đến câu 100, có 2 câu điểm liệt', progress: 12 },
    { id: '5', name: 'Biển báo đường bộ', title: '65 câu: Từ câu 101 đến câu 165', progress: 65 },
    { id: '6', name: 'Sa hình', title: '35 câu: Từ câu 166 đến câu 200', progress: 35 },
];

const OnTapTheoCauHoiTab = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');

    const handleOption = (item) => {
        switch (item.id) {
            case '2':
                navigation.navigate('DeThiKhaiNiemQuyTac');
                break;
            default:
                Alert.alert('Thông báo', 'Tính năng này đang được phát triển!');
        }
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
            <View style={{ marginBottom: 70 }}>
                <ScrollView>
                    {items.map((item, index) => (
                        <View key={index} style={styles.violationContainer}>
                            <TouchableOpacity
                             onPress={() => handleOption(item)}>
                                <Text style={styles.violationText}>{item.name}</Text>
                                <Text style={styles.finesText}>{item.title}</Text>
                                
                                <View style={styles.progressBar}>
                                <Progress.Bar 
                                    progress={item.progress / 200}
                                    width={250}
                                    height={9}
                                    color="#3b5998" 
                                    borderRadius={5} 
                                    borderWidth={2} 
                                    style={{ marginTop: 10 }}
                                />
                                <Text style={{marginLeft:20, color:'#0099FF'}}>{item.progress}/200</Text>
                                </View>
                                
                            </TouchableOpacity>
                        </View>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
};

const OnTapTheoCauHoiStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="OnTapTheoCauHoiTab"
                component={OnTapTheoCauHoiTab}
                options={({ navigation }) => ({
                    title: 'Ôn tập câu hỏi',
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
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    violationText: {
        color: '#0066cc',
        fontSize: 18,
        fontWeight: 'bold',
    },
    finesText: {
        color: 'red',
        fontSize: 15,
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
    progressBar:{
        flexDirection:'row',
        justifyContent:'space-between',
    }
});

export default OnTapTheoCauHoiStack;
