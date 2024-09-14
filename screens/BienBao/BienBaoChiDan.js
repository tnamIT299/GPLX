import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import {
  Dialog,
  Portal,
  Button,
  Paragraph,
  Provider as PaperProvider,
} from "react-native-paper";

const rawData = [
  {
    type: "I.401",
    name: "Bắt đầu đường ưu tiên",
    content:
      "Biển chỉ dẫn các phương tiện trên trục đường chính được ưu tiên đi trước ở nơi đường giao nhau, các phương tiện từ đường nhánh ra phải dừng lại nhường đường cho phương tiện trên đường chính đi trước, trừ các xe được ưu tiên theo Luật Giao thông đường bộ.",
    image: require("../../assets/Bienbaochidan/i401.png"),
  },
  {
    type: "I.402",
    name: "Hết đường ưu tiên",
    content:
      "Biển chỉ dẫn đã hết đoạn đường ưu tiên. Trên đoạn đường tiếp theo, các xe đi đúng với tốc độ quy định, qua nơi giao nhau ưu tiên bên phải.",
    image: require("../../assets/Bienbaochidan/i402.png"),
  },
  {
    type: "I.405a",
    name: "Đường cụt",
    content: "",
    image: require("../../assets/Bienbaochidan/i405a.png"),
  },
  {
    type: "I.405b",
    name: "Đường cụt",
    content: "",
    image: require("../../assets/Bienbaochidan/i405b.png"),
  },
  {
    type: "I.405c",
    name: "Đường cụt",
    content: "",
    image: require("../../assets/Bienbaochidan/i405c.png"),
  },
  {
    type: "I.406",
    name: "Được ưu tiên qua đường hẹp",
    content:
      "Biển chỉ dẫn có quyền được ưu tiên đi trước trên đoạn đường hẹp khi gặp xe đi ngược chiều, trừ trường hợp trên hướng đi ngược chiều có phương tiện đã đi vào phạm vi đường hẹp thì xe đi theo chiều ưu tiên cũng phải nhường đường.",
    image: require("../../assets/Bienbaochidan/i406.png"),
  },
  {
    type: "I.407a",
    name: "Đường một chiều",
    content:
      "Chỉ cho phép các loại phương tiệngiao thông đi vào theo chiều mũi tên chỉ, cấm quay đầu ngược lại (trừ các xe được quyền ưu tiên theo Luật Giao thông đường bộ).",
    image: require("../../assets/Bienbaochidan/i407a.png"),
  },
  {
    type: "I.407b",
    name: "Đường một chiều",
    content: "",
    image: require("../../assets/Bienbaochidan/i407b.png"),
  },
  {
    type: "I.408",
    name: "Nơi đỗ xe",
    content:
      "Biển chỉ dẫn những nơi được phép đỗ xe, những bãi đỗ xe, bến xe v.v...",
    image: require("../../assets/Bienbaochidan/i408.png"),
  },
  {
    type: "I.408a",
    name: " Nơi đỗ xe một phần trên hè phố",
    content:
      "Biển chỉ dẫn những nơi được phép đỗ xe một phần trên hè phố rộng, phải đặt biển số. Xe phải đổ từ 1⁄2 thân xe trở lên trên hè phố.",
    image: require("../../assets/Bienbaochidan/i408a.png"),
  },
  {
    type: "I.409",
    name: "Chỗ quay xe",
    content:
      "Biển chỉ dẫn vị trí được phép quay đầu xe kiểu chữ U. Biển không cấm rẽ trái",
    image: require("../../assets/Bienbaochidan/i409.png"),
  },
  {
    type: "I.410",
    name: "Khu vực quay xe",
    content:
      "Biển chỉ dẫn khu vực được phép quay đầu xe kiểu chữ U. Biển không cấm rẽ trái.",
    image: require("../../assets/Bienbaochidan/i410.png"),
  },
  {
    type: "I.413a",
    name: "Đường phía trước có làn đường dành cho ô tô khách",
    content:
      "Biển chỉ dẫn đường có làn đường dành riêng cho xe ô tô khách theo chiều ngược lại. Biển được đặt ở ngã ba, ngã tư đầu đường một chiều mà hướng ngược chiều có xe ô tô khách được phép chạy.",
    image: require("../../assets/Bienbaochidan/i413a.png"),
  },
  {
    type: "I.413b",
    name: "Rẽ ra đường có làn dành cho xe khách",
    content:
      "Biển chỉ dẫn ở ngã ba, ngã tư rẽ phải hoặc rẽ trái là rẽ ra đường có làn đường dành cho xe ô tô khách.",
    image: require("../../assets/Bienbaochidan/i413b.png"),
  },
  {
    type: "I.413c",
    name: "Rẽ ra đường có làn dành cho xe khách",
    content:
      "Biển chỉ dẫn ở ngã ba, ngã tư rẽ phải hoặc rẽ trái là rẽ ra đường có làn đường dành cho xe ô tô khách.",
    image: require("../../assets/Bienbaochidan/i413c.png"),
  },
  {
    type: "I.418",
    name: "Lối đi ở những chỗ cấm rẽ",
    content: "",
    image: require("../../assets/Bienbaochidan/i418.png"),
  },
  {
    type: "I.423a",
    name: "Đường người đi bộ sang ngang",
    content: "",
    image: require("../../assets/Bienbaochidan/i423a.png"),
  },
  {
    type: "I.444",
    name: "Xe kéo moóc",
    content: "Biển này đặt trên nóc buồng lái của xe kéo moóc",
    image: require("../../assets/Bienbaochidan/i444.png"),
  },
  {
    type: "I.446",
    name: "Nơi đỗ xe dành cho người tàn tật",
    content: "Biển chỉ dẫn vị trí thiết bị chuyên dùng cho người tàn tật.",
    image: require("../../assets/Bienbaochidan/i446.png"),
  },
  {
    type: "I.447a",
    name: "Cầu vượt liên thông",
    content:
      "Biển được đặt trước khi vào cầu vượt . Biển chỉ dẫn tại cầu vượt liên thông xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái hay rẽ phải.",
    image: require("../../assets/Bienbaochidan/i447a.png"),
  },
  {
    type: "I.447b",
    name: "Cầu vượt liên thông",
    content:
      "Biển được đặt trước khi vào cầu vượt . Biển chỉ dẫn tại cầu vượt liên thông xe có thể đi thẳng hoặc theo chỉ dẫn trên hình vẽ để rẽ trái hay rẽ phải.",
    image: require("../../assets/Bienbaochidan/i447b.png"),
  },
  {
    type: "I.448",
    name: "Làn đường cứu nạn hay làn thoát xe khẩn cấp",
    content:
      "Biển chỉ dẫn gồm 3 cặp biển ở các cự ly 2 km, 1 km và 300 m nhằm chỉ dẫn cho ngƣời tham gia giao thông biết vị trí và khoảng cách có làn cứu nạn.",
    image: require("../../assets/Bienbaochidan/i448.png"),
  },
  {
    type: "I.449",
    name: "Biển tên đường",
    content: "Biển báo tên đường cho các tuyến đường đối ngoại.",
    image: require("../../assets/Bienbaochidan/i449.png"),
  },
];
const BienBaoChiDan = () => {
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
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => showDialog(item)}
    >
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
          <Dialog.Title style={styles.dialogTitle}>
            {selectedSign?.type} : {selectedSign?.name}
          </Dialog.Title>
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
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginRight: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  type: {
    fontSize: 14,
    color: "#666",
  },
  dialog: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  dialogContent: {
    alignItems: "center",
  },
  dialogTitle: {
    marginTop: 10,
    alignSelf: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  dialogImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginBottom: 10,
  },
  dialogActions: {
    justifyContent: "center",
  },
});
export default BienBaoChiDan;
