import React, { useState } from 'react';
import { View, Text, FlatList, SectionList, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';

const licenseTypes = [
    {
        title: 'Xe máy',
        data: [
            { id: 'A1', name: 'Bằng A1', question_count: 200, description: 'Xe mô tô 2 bánh có dung tích xi lanh dưới 175cm3.' },
            { id: 'A2', name: 'Bằng A2', question_count: 240, description: 'Xe mô tô 2 bánh có dung tích xi lanh từ 175cm3 trở lên.' },
            { id: 'A3', name: 'Bằng A3', question_count: 300, description: 'Xe mô tô 3 bánh.' },
            { id: 'A4', name: 'Bằng A4', question_count: 400, description: 'Xe máy kéo nhỏ có trọng tải đến 1000kg.' }
        ]
    },
    {
        title: 'Ô tô',
        data: [
            { id: 'B1', name: 'Bằng B1', question_count: 200, description: 'Xe ôtô KHÔNG hành nghề lái xe, tối đa 9 chỗ ngồi, xe trọng tải dưới 3,5 tấn.' },
            { id: 'B2', name: 'Bằng B2', question_count: 100, description: 'Xe ôtô tối đa 9 chỗ ngồi, xe trọng tải dưới 3,5 tấn.' }
        ]
    },
    {
        title: 'Xe lớn',
        data: [
            { id: 'C', name: 'Bằng C', question_count: 260, description: 'Xe ôtô tối đa 9 chỗ ngồi, xe trọng tải trên 3,5 tấn.' },
            { id: 'D', name: 'Bằng D', question_count: 290, description: 'Xe ôtô tối đa 30 chỗ ngồi.' },
            { id: 'E', name: 'Bằng E', question_count: 400, description: 'Xe ôtô trên 30 chỗ ngồi.' },
            { id: 'F', name: 'Bằng F', question_count: 500, description: 'Các loại xe rơ moóc có trọng tải thiết kế trên 750kg, sơ mi rơ moóc, ô tô khách nối toa.' }
        ]
    }
];

const ManhinhChinh = ({ navigation }) => {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? '#E0E0E0' : '#FFFFFF';
        const checkmark = item.id === selectedId ? '🎯' : '';

        const handlePress = () => {
            if (['A2', 'A3', 'A4', 'B1','B2','C','D','E','F'].includes(item.id)) {
                Alert.alert('Thông báo', 'Tính năng này đang được phát triển!');
            } else {
                setSelectedId(item.id);
            }
        };

        return (
            <TouchableOpacity onPress={handlePress} style={[styles.item, { backgroundColor }]}>
                <Text style={styles.name}>{item.name} <Text style={styles.checkmark}>{checkmark}</Text></Text>
                <Text style={styles.description}>{item.description}</Text>
            </TouchableOpacity>
        );
    };

    const handleBackPress = () => {
        Alert.alert('Back Pressed', 'back');
    };

    const handleDonePress = () => {
        if (selectedId) {
            const selectedLicense = licenseTypes.flatMap(section => section.data).find(item => item.id === selectedId);
            navigation.navigate('ManhinhChonOption', { licenseName: selectedLicense.name, question_count: selectedLicense.question_count });
        } else {
            Alert.alert('Chưa chọn loại bằng', 'Vui lòng chọn một loại bằng để tiếp tục.');
        }
    };

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
                <TouchableOpacity onPress={handleBackPress}>
                    <Text style={styles.backButton}>{'Back'}</Text>
                </TouchableOpacity>
                <Text style={styles.title_bar}>Thiết lập</Text>
                <TouchableOpacity onPress={handleDonePress}>
                    <Text style={styles.doneButton}>Done</Text>
                </TouchableOpacity>
            </View>
            <SectionList
                sections={licenseTypes}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: '#2F95DC',
    },

    backButton: {
        paddingTop: 10,
        fontSize: 16,
        color: '#FFFFFF',
    },

    doneButton: {
        fontSize: 16,
        paddingTop: 10,
        color: '#FFFFFF',
    },
    title: {
        marginTop: 20,
        fontSize: 20,
        marginBottom: 10,
        fontWeight: 'bold',
    },

    title_bar: {
        paddingTop: 5,
        fontSize: 20,
        color: '#FFFFFF',
    },
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#707070',
    },
    checkmark: {
        fontSize: 18,
        color: '#2F95DC',
    },
    sectionHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 10,
    },
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemDescription: {
        fontSize: 14,
        color: '#555',
    },
    itemQuestionCount: {
        fontSize: 12,
        color: '#999',
    },
});

export default ManhinhChinh;
