import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const items = [
    { id: '1', name: 'Đề ngẫu nhiên', icon: 'random', color: '#FFB74D' },
    { id: '2', name: 'Thi theo bộ đề', icon: 'file-text', color: '#FF3333' },
    { id: '3', name: 'Các câu bị sai', icon: 'times-circle', color: '#81C784' },
    { id: '4', name: 'Ôn tập câu hỏi', icon: 'book', color: '#4FC3F7' },
    { id: '5', name: '20 câu điểm liệt', icon: 'exclamation-triangle', color: '#8D6E63' },
    { id: '6', name: 'Top 50 câu sai', icon: 'bar-chart', color: '#90A4AE' },
    { id: '7', name: 'Lịch sử thi', icon: 'history', color: '#00C5CD' },
    { id: '8', name: 'Tra cứu', icon: 'search', color: '#FF6633' },
];

const ManhinhChonOption = ({ navigation, route }) => {
    const { licenseName } = route.params;
    const { question_count } = route.params;

    const handleOption = (item) => {
        switch (item.id) {
            case '8':
                navigation.navigate('Tracuu');
                break;
            default:
                Alert.alert('Thông báo', 'Tính năng này đang được phát triển!');
        }
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title_bar}> {question_count} câu GPLX {licenseName}</Text>
                <Icon style={styles.icon}
                    onPress={() => {
                        navigation.navigate('ManhinhChinh');
                    }}
                    size={30} name='gear' />
            </View>


            <ScrollView>
                <View style={styles.content}>
                    {items.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.item, { backgroundColor: item.color }]}
                            onPress={() => handleOption(item)}>
                            <Icon name={item.icon} size={30} color="#FFF" />
                            <Text style={styles.itemText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: '#2F95DC',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    title_bar: {
        flex: 1,
        textAlign: 'center',
        fontSize: 18,
        color: '#fff',
        marginTop: 10,
    },
    icon: {
        marginLeft: 'auto',
        marginTop: 10,
        color: "#fff",
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 12,
    },
    item: {
        width: '48%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
    },
    itemText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        marginTop: 8,
    },
});

export default ManhinhChonOption;
