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
    type: "Vạch kẻ đường 1.1",
    name: "",
    content:
      "Vạch liền, nét màu trắng, rộng 10 cm, dùng để phân chia 2 dòng phương tiện giao thông đi ngược chiều nhau, xác định ranh giới phần đường cấm, ranh giới nơi đỗ xe, ranh giới của làn xe ở vị trí nguy hiểm. Đối với vạch này xe không được đè lên vạch.",
    image: require("../../assets/Vachkeduong/v11.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.2",
    name: "",
    content:
      "Vạch liền, màu trắng, rộng 20 cm, dùng để xác định mép phần xe chạy trên các trục đường. Xe chạy được phép cắt ngang hoặc đè lên vạch khi cần thiết.",
    image: require("../../assets/Vachkeduong/v12.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.3",
    name: "",
    content:
      "Là vạch kép (2 vạch liên tục) màu trắng, có chiều rộng bằng nhau và bằng 10 cm, cách nhau là 10 cm, dùng để phân chia 2 dòng phương tiện giao thông từ 2 hướng ngược chiều nhau trên những đường có từ 4 làn đường trở lên. Xe chạy không được đè qua vạch.",
    image: require("../../assets/Vachkeduong/v13.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.4",
    name: "",
    content:
      "Là vạch liên tục màu vàng có chiều rộng 10 cm, để xác định nơi cấm dừng và cấm đỗ xe.",
    image: require("../../assets/Vachkeduong/v14.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.5",
    name: "",
    content:
      "Là vạch đứt quãng, màu trắng, rộng 10 cm, tỷ lệ L1:L2 = 1:3. Vạch dùng để phân chia 2 dòng phương tiện giao thông từ 2 hướng ngược chiều nhau trên các đường có 2 hoặc 3 làn xe chạy. Xác định ranh giới làn xe khi có 2 hoặc trên 2 làn xe chạy theo một hướng.",
    image: require("../../assets/Vachkeduong/v15.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.6",
    name: "",
    content:
      "Là vạch đứt quãng màu trắng, rộng 10 cm. Tỷ lệ L1:L2 = 3:1, dùng để báo hiệu gần đến vạch 1-1 hay 1-11, để phân chia dòng xe ngược chiều hay cùng chiều.",
    image: require("../../assets/Vachkeduong/v16.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.7",
    name: "",
    content:
      "Là vạch đứt quãng màu trắng rộng 0,1m, khoảng cách giữa hai vạch là 0,5m. Vạch được kẻ Theo đường cong Theo chiều xe chạy ở chỗ giao nhau khi lái xe cần định hướng chung để đảm bảo an toàn khi qua chỗ giao nhau",
    image: require("../../assets/Vachkeduong/v17.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.8",
    name: "",
    content:
      "Là vạch đứt quãng màu trắng rộng 0,4m. Vạch dùng để quay định danh giới làn xe tăng tốc độ hoặc giảm tốc độ (gọi là chuyển tới làn đường) và làn xe chính của phần xe chạy.",
    image: require("../../assets/Vachkeduong/v18.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.9",
    name: "",
    content:
      "Là loại vạch kép (hai vạch) đứt quãng, song song, màu trắng rộng 0,1m và cách nhau 0,1 m.Vạch quay định danh giới làn xe dự trữ mà trên làn này chiều xe chạy có thể thay đổi hoặc hoặc chiều thuận hoặc chiều đi ngược lại. Sự thay đổi hướng xe được điều khiển bằng tín hiệu đèn xanh và đỏ đặt trên làn xe.",
    image: require("../../assets/Vachkeduong/v19.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.10",
    name: "",
    content:
      "Là vạch đứt quãng màu vàng. Vạch xác định vị trí hay khu vực cấm đỗ xe.",
    image: require("../../assets/Vachkeduong/v110.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.11",
    name: "",
    content:
      "Là hai vạch song song (vạch kép) màu trắng, một vạch đứt quãng và một vạch liền liền nét. Vạch dùng để phân chia dòng phương tiện hai hướng ngược chiều nhau trên các đường có hai hoặc ba làn xe chạy. Lái xe được phép cắt ngang qua vạch từ phía có vạch đứt quãng.",
    image: require("../../assets/Vachkeduong/v111.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.12",
    name: "",
    content:
      "Vạch chỉ rõ vị trí xe phải dừng lại khi có biển báo số 122 “Stop” hoặc khi có tín hiệu đèn đỏ. Vạch này kẻ ngang toàn bộ đường của hướng xe chạy. Trong trường hợp không có biển 122 hoặc không có đèn hay người điều khiển thì vạch 1.12 không có hiệu lực.",
    image: require("../../assets/Vachkeduong/v112.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.13",
    name: "",
    content:
      "Là vạch hình tam giác cân màu trắng vạch chỉ rõ vị trí mà lái xe phải dừng để nhường cho các phương tiện khác ở đường ưu tiên.",
    image: require("../../assets/Vachkeduong/v113.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.14",
    name: "",
    content:
      "Là vạch sọc ngựa vằn gồm các đường màu trắng song song với tim đường, rộng 40 cm, cách nhau 60 cm. Vạch quy định nơi người đi bộ qua đường.",
    image: require("../../assets/Vachkeduong/v114.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.15:",
    name: "",
    content:
      "Vạch gồm 2 vạch đứt quãng chạy song song, cách nhau 1.8 mét, chiều dài, chiều rộng và khỏng cách giữa các vạch của vạch đứt quãng bằng nhau và bằng 40 cm. Vạch xác định vị trí chỗ xe đạp đi ngang qua xe đường của xe cơ giới. Xe đạp phải nhường đường cho phương tiện cơ giới chạy trên tuyến đường cắt ngang đường xe đạp.",
    image: require("../../assets/Vachkeduong/v115.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.16.1",
    name: "",
    content:
      " “Ngựa vằn” màu trắng, xác định đảo phân chia dòng phương tiện ngược chiều nhau.",
    image: require("../../assets/Vachkeduong/v1161.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.16.2:",
    name: "",
    content:
      "Vạch xác định đảo phân chia dòng phương tiện Theo cùng một hướng. Tại đó dòng phương tiện chạy cùng hướng được phân chia ra nhiều dòng (làn ) khác nhau.",
    image: require("../../assets/Vachkeduong/v1162.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.16.3",
    name: "",
    content:
      "Đảo nhập dòng phương tiện. Tại đó dòng phương tiện chạy cùng hướng nhập với nhau",
    image: require("../../assets/Vachkeduong/v1163.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.17",
    name: "",
    content:
      "Vạch sơn sóng màu vàng quay định vị trí dừng của xe các phương tiện vận tải Theo tuyến quay định hoặc nơi tập kết của tắc xi, cấm dừng hoặc đỗ của bất kì một lọai phương tiện nào về cả hai phía và cách vạch 15cm.",
    image: require("../../assets/Vachkeduong/v117.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.18",
    name: "",
    content:
      "Màu trắng chỉ dẫn các hướng đi cho phép của các làn xe ở nơi giao nhau. Lái xe khi gặp biển này bắt buộc phải tuân theo mũi tên chỉ hướng đi.",
    image: require("../../assets/Vachkeduong/v118.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.19",
    name: "",
    content:
      "Vạch màu trắng, vạch xác định sắp đến vị trí thắt hẹp của phần xe chạy, báo cho người lái xe biết rằng số làn xe Theo hướng mũi tên bị giảm và lái xe phải từ từ chuyển làn Theo hướng mũi tên",
    image: require("../../assets/Vachkeduong/v119.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.20",
    name: "",
    content:
      "Màu trắng, xác định sắp đến gần vạch 113 và biển báo số 108, khoảng cách đến vạch 1.13 Theo tim đường từ 2-2,5m (đường cao tốc có thể lớn hơn), lái xe được phép chạy đè lên vạch 1.13 không cần dừng lại.",
    image: require("../../assets/Vachkeduong/v120.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.21",
    name: "",
    content:
      "Là chữ “Stop” (dừng lại) màu trắng, xác định gần đến vị trí dừng lại vạch 1.12 và biển báo số 122. Vạch 1.21 cách vạch dừng xe từ 2-2,5m.",
    image: require("../../assets/Vachkeduong/v121.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.22",
    name: "",
    content:
      "Là vạch chỉ số hiệu đường, được kẻ trên đường quốc lộ và được kẻ trực tiếp trên mặt đường xe chạy.",
    image: require("../../assets/Vachkeduong/v122.jpg"),
  },
  {
    type: "Vạch kẻ đường 1.23",
    name: "",
    content:
      "Là vạch chỉ làn xe dành cho ô tô khách chạy Theo tuyến quay định.",
    image: require("../../assets/Vachkeduong/v123.jpg"),
  },
];

const VachKeDuong = () => {
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

export default VachKeDuong;
