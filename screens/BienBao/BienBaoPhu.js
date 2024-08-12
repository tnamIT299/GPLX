import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Dialog, Portal, Button, Paragraph, Provider as PaperProvider } from 'react-native-paper';

const rawData = [
  {
    type: "S.501",
    name: "Phạm vi tác dụng của biển",
    content:
      "Biển được đặt dưới các loại biển báo nguy hiểm, biển báo cấm hoặc hạn chế. Biển thông báo chiều dài đoạn đường nguy hiểm hay đoạn đường phải thi hành lệnh cấm hoặc hạn chế.",
    image: require('../../assets/Bienbaophu/S501.png'),
  },
  {
    type: "S.502",
    name: " Khoảng cách đến đối tượng báo hiệu",
    content:
      "Biển được đặt dưới các loại biển báo nguy hiểm, biển báo cấm hoặc hạn chế, biển hiệu lệnh và biển chỉ dẫn . Biển thông báo khoảng cách thực tế từ vị trí đặt biển đến đối tượng báo hiệu ở phía trước.",
      image: require('../../assets/Bienbaophu/S502.png'),
  },
  {
    type: "s.503a",
    name: "Hướng tác dụng của biển",
    content:
      "",
      image: require('../../assets/Bienbaophu/S503a.png'),
  },
  {
    type: "S.503b",
    name: "Hướng tác dụng của biển",
    content:
      "",
      image: require('../../assets/Bienbaophu/S503b.png'),
  },
  {
    type: "S.503c",
    name: "Hướng tác dụng của biển",
    content:
      "",
      image: require('../../assets/Bienbaophu/S503c.png'),
  },
  {
    type: "S.503d",
    name: "Hướng tác dụng của biển",
    content:
      "",
      image: require('../../assets/Bienbaophu/S503d.png'),
  },
  {
    type: "S.503e",
    name: "Hướng tác dụng của biển",
    content:
      "",
      image: require('../../assets/Bienbaophu/S503e.png'),
  },
  {
    type: "S.503f",
    name: "Hướng tác dụng của biển",
    content:
      "",
      image: require('../../assets/Bienbaophu/S503f.png'),
  },
  {
    type: "S.504",
    name: "Làn đường",
    content:
      "Biển chỉ dẫn những nơi được phép đỗ xe, những bãi đỗ xe, bến xe v.v...",
      image: require('../../assets/Bienbaophu/S504.png'),
  },
  {
    type: "S.506a",
    name: "Hướng đường ưu tiên",
    content:
      "",
      image: require('../../assets/Bienbaophu/S506a.png'),
  },
  {
    type: "S.506b",
    name: "Hướng đường ưu tiên",
    content:
      "",
      image: require('../../assets/Bienbaophu/S506b.png'),
  },
  
];
const BienBaoPhu = () => {
  const [visible, setVisible] = useState(false);
  const [selectedSign, setSelectedSign] = useState(null);

  const showDialog = (sign) => {
    setSelectedSign(sign);
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
    setSelectedSign(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => showDialog(item)}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.type}</Text>
        <Text style={styles.type}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <PaperProvider>
      <FlatList
        data={rawData}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
      />

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog} style={styles.dialog}>
          <Dialog.Title style={styles.dialogTitle}>{selectedSign?.type} : {selectedSign?.name}</Dialog.Title>
          <Dialog.Content style={styles.dialogContent}>
            <Image source={selectedSign?.image} style={styles.dialogImage} />
            <Paragraph>{selectedSign?.content}</Paragraph>
          </Dialog.Content>
          <Dialog.Actions style={styles.dialogActions}>
            <Button onPress={hideDialog}>Đóng</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 120,
    height: 120,
    resizeMode:'contain',
    marginRight: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  type: {
    fontSize: 14,
    color: '#666',
  },
  dialog: {
    backgroundColor: 'white',
    borderRadius: 8,
  },
  dialogContent: {
    alignItems: 'center',
  },
  dialogTitle: {
    marginTop:10,
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize:17,
  },
  dialogImage: {
    width: 120,
    height: 120,
    resizeMode:'contain',
    marginBottom: 10,
  },
  dialogActions: {
    justifyContent: 'center',
  },
});
export default BienBaoPhu