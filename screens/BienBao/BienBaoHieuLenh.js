import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Dialog, Portal, Button, Paragraph, Provider as PaperProvider } from 'react-native-paper';

const rawData = [
  {
    type: "R.122",
    name: "Dừng lại",
    content:
      "Biển báo hiệu buộc các xe cơ giới và thô sơ kể cả xe được ưu tiên theo quy định phải dừng lại. Chỉ được phép đi nếu có người điều khiển giao thông hoặc đèn cờ cho phép đi. Nếu không thì chỉ được phép đi khi trên đường không còn nguy cơ gây mất an toàn giao thông.",
    image: require('../../assets/Bienbaohieulenh/signR122.png'),
  },
  {
    type: "R.301a",
    name: "Các xe chỉ được đi thẳng",
    content:
      "Được đặt trước ngã ba, ngã tư. Các xe chỉ được đi thẳng ở khu vực ngã ba, ngã tư.",
    image: require('../../assets/Bienbaohieulenh/signR301a.png'),
  },
  {
    type: "R.301b",
    name: "Các xe chỉ được rẽ phải",
    content:
      "Được đặt sau ngã ba, ngã tư. Các xe chỉ được rẽ phải ở khu vực trước mặt biển.",
    image: require('../../assets/Bienbaohieulenh/signR301b.png'),
  },
  {
    type: "R.301c",
    name: "Các xe chỉ được rẽ trái",
    content:
      "Được đặt sau ngã ba, ngã tư. Các xe chỉ được rẽ trái ở khu vực trước mặt biển.",
    image: require('../../assets/Bienbaohieulenh/signR301c.png'),
  },
  {
    type: "R.301d",
    name: "Các xe chỉ được rẽ phải",
    content:
      "Được đặt trước ngã ba, ngã tư. Các xe chỉ được rẽ phải ở phạm vi ngã ba, ngã tư đằng sau mặt biển.",
    image: require('../../assets/Bienbaohieulenh/signR301d.png'),
  },
  {
    type: "R.301e",
    name: "Các xe chỉ được rẽ trái",
    content:
      "Được đặt trước ngã ba, ngã tư. Các xe chỉ được rẽ trái ở phạm vi ngã ba, ngã tư đằng sau mặt biển.",
    image: require('../../assets/Bienbaohieulenh/signR301e.png'),
  },
  {
    type: "R.301f",
    name: "Các xe chỉ được đi thẳng và rẽ phải",
    content:
      "Được đặt trước ngã ba, ngã tư. Các xe chỉ được phép đi thẳng hay rẽ phải ở khu vực sau mặt biển.",
    image: require('../../assets/Bienbaohieulenh/signR301f.png'),
  },
  {
    type: "R.301g",
    name: "Các xe chỉ được đi thẳng và rẽ trái",
    content:
      "Được đặt trước ngã ba, ngã tư. Các xe chỉ được phép đi thẳng hay rẽ trái ở khu vực sau mặt biển và được phép quay đầu xe để đi theo hướng ngược lại.",
    image: require('../../assets/Bienbaohieulenh/signR301g.png'),
  },
  {
    type: "R.301h",
    name: "Các xe chỉ được rẽ trái và phải",
    content:
      "Được đặt sau ngã ba, ngã tư. Các xe chỉ được phép rẽ trái, quay đầu hoặc rẽ phải ở khu vực ngã ba, ngã tư trước mặt biển.",
    image: require('../../assets/Bienbaohieulenh/signR301h.png'),
  },
  {
    type: "R.302a",
    name: "Hướng phải đi vòng chướng ngại vật",
    content:
      "Để báo các loại xe (cơ giới và thô sơ) hướng đi để qua một chướng ngại vật.",
    image: require('../../assets/Bienbaohieulenh/signR302a.png'),
  },
  {
    type: "R.302b",
    name: "Hướng phải đi vòng chướng ngại vật",
    content:
      "Để báo các loại xe (cơ giới và thô sơ) hướng đi để qua một chướng ngại vật.",
    image: require('../../assets/Bienbaohieulenh/signR302b.png'),
  },
  {
    type: "R.302c",
    name: "Hướng phải đi vòng chướng ngại vật",
    content:
      "Để báo các loại xe (cơ giới và thô sơ) hướng đi để qua một chướng ngại vật.",
    image: require('../../assets/Bienbaohieulenh/signR302c.png'),
  },
  {
    type: "R.303",
    name: "Nơi giao nhau chạy theo vòng xuyến",
    content:
      "Biển có hiệu lực bắt buộc các xe muốn chuyển hướng phải chạy vòng theo đảo an toàn theo hướng mũi tên tại nơi đường giao nhau (ngã ba, ngã tư).",
    image: require('../../assets/Bienbaohieulenh/signR303.png'),
  },
  {
    type: "R.304",
    name: "Đường dành cho xe thô sơ",
    content:
      "Biển báo đường dành cho xe thô sơ (kể cả xe của người khuyết tật) và người đi bộ, bắt buộc phải đi theo đường dành riêng này, cấm phương tiện giao thông cơ giới kể cả các xe được ưu tiên theo Luật Giao thông đường bộ đi vào đường đã đặt biển này, trừ trường hợp đi cắt ngang qua nhưng phải bảo đảm tuyệt đối an toàn cho người đi bộ.",
    image: require('../../assets/Bienbaohieulenh/signR304.png'),
  },
  {
    type: "R.305",
    name: "Đường dành cho người đi bộ",
    content:
      "Biển báo đường dành riêng cho người đi bộ.Các phương tiện giao thông đường bộ kể cả xe được ưu tiên theo Luật Giao thông đường bộ không được phép đi vào, trừ trường hợp đi cắt ngang qua, nhưng phải bảo đảm tuyệt đối an toàn cho người đi bộ.",
    image: require('../../assets/Bienbaohieulenh/signR305.png'),
  },
  {
    type: "R.306",
    name: "Tốc độ tối thiểu cho phép",
    content:
      "Biển báo tốc độ tối thiểu cho phép. Biển có hiệu lực bắt buộc các loại xe cơ giới chạy với tốc độ không nhỏ hơn trị số ghi trên biển trong điều kiện giao thông thuận lợi và an toàn. Các loại xe có tốc độ tối đa theo quy định của nhà sản xuất không đạt tốc độ tối thiểu đã ghi trên biển không được phép đi vào đường này.",
      image: require('../../assets/Bienbaohieulenh/signR306.png'),
  },
  {
    type: "R.307",
    name: "Hết hạn chế tốc độ tối thiểu",
    content:
      "Biển báo hết đoạn đường hạn chế tốc độ tối thiểu. Kể từ biển này các xe được phép chạy chậm hơn trị số ghi trên biển nhưng không được gây cản trở các xe khác.",
      image: require('../../assets/Bienbaohieulenh/signR307.png'),
  },
  {
    type: "R.308a",
    name: "Tuyến đường cầu vượt cắt qua",
    content:
      "Biển số R.308a báo cho người lái xe chỉ được đi thẳng hoặc rẽ trái trên cầu vượt.",
      image: require('../../assets/Bienbaohieulenh/signR308a.png'),
  },
  {
    type: "R.308b",
    name: "Tuyến đường cầu vượt cắt qua",
    content:
      "Biển số R.308b báo cho người lái xe chỉ được đi thẳng hoặc rẽ phải trên cầu vượt.",
      image: require('../../assets/Bienbaohieulenh/signR308b.png'),
  },
  {
    type: "R.309",
    name: "Ấn còi",
    content:
      "Biển báo lệnh cho người lái xe phải bấm còi.",
      image: require('../../assets/Bienbaohieulenh/signR309.png'),
  },
  {
    type: "R.310a",
    name: "Hướng đi phải theo cho xe chở hàng nguy hiểm",
    content:
      "Để báo cho các loại xe chở hàng nguy hiểm phải đi theo hướng quy định",
      image: require('../../assets/Bienbaohieulenh/signR310a.png'),
  },
  {
    type: "R.310b",
    name: "Hướng đi phải theo cho xe chở hàng nguy hiểm",
    content:
      "Để báo cho các loại xe chở hàng nguy hiểm phải đi theo hướng quy định",
      image: require('../../assets/Bienbaohieulenh/signR310b.png'),
  },
  {
    type: "R.310c",
    name: "Hướng đi phải theo cho xe chở hàng nguy hiểm",
    content:
      "Để báo cho các loại xe chở hàng nguy hiểm phải đi theo hướng quy định",
      image: require('../../assets/Bienbaohieulenh/signR310c.png'),
  },
  {
    type: "R.403a",
    name: "Đường dành cho ôtô",
    content:
      "Biển báo hiệu bắt đầu đường dành cho các loại ôtô đi lại.",
      image: require('../../assets/Bienbaohieulenh/signR403a.png'),
  },
  {
    type: "R.403b",
    name: "Đường dành cho ôtô, xe máy",
    content:
      "Biển báo hiệu bắt đầu đường dành cho các loại ôtô, xe máy (kể cả xe gắn máy).",
      image: require('../../assets/Bienbaohieulenh/signR403b.png'),
  },
  {
    type: "R.404a",
    name: "Hết đoạn đường dành cho ôtô",
    content:
      "Đến hết đoạn đường dành cho ôtô đi lại",
      image: require('../../assets/Bienbaohieulenh/signR404a.png'),
  },
  {
    type: "R.404b",
    name: "Hết đoạn đường dành cho ôtô và xe máy",
    content:
      "Đến hết đoạn đường dành cho ôtô, xe máy đi lại",
      image: require('../../assets/Bienbaohieulenh/signR404b.png'),
  },
  {
    type: "R.411",
    name: "Hướng đi trên mỗi làn đường phải theo",
    content:
      "Biển báo hiệu cho người tham gia giao thông biết số lượng làn đường trên mặt đường và hướng đi trên mỗi làn đường theo vạch kẻ đường.",
      image: require('../../assets/Bienbaohieulenh/signR411.png'),
  },
  {
    type: "R.412a",
    name: "Làn đường dành cho xe khách",
    content:
      "Biển báo hiệu làn đường dành riêng cho ôtô khách (kể cả ôtô buýt).",
      image: require('../../assets/Bienbaohieulenh/signR412a.png'),
  },
  {
    type: "R.412b",
    name: "Làn đường dành cho xe con",
    content:
      "",
      image: require('../../assets/Bienbaohieulenh/signR412b.png'),
  },
  {
    type: "R.412c",
    name: "Làn đường dành cho xe tải",
    content:
      "",
      image: require('../../assets/Bienbaohieulenh/signR412c.png'),
  },
  {
    type: "R.412d",
    name: "Làn đường dành cho xe mô tô",
    content:
      "",
      image: require('../../assets/Bienbaohieulenh/signR412d.png'),
  },
  {
    type: "R.412f",
    name: "Làn đường dành cho xe ô tô",
    content:
      "",
      image: require('../../assets/Bienbaohieulenh/signR412f.png'),
  },
  {
    type: "R.413i",
    name: "Kết thúc làn đường dành cho xe khách",
    content:
      "",
      image: require('../../assets/Bienbaohieulenh/signR413i.png'),
  },
  {
    type: "R.413j",
    name: "Kết thúc làn đường dành cho xe con",
    content:
      "",
    image: require('../../assets/Bienbaohieulenh/signR413j.png'),
  },
  {
    type: "R.413k",
    name: "Kết thúc làn đường dành cho xe tải",
    content:
      "",
    image: require('../../assets/Bienbaohieulenh/signR413k.png'),
  },
  {
    type: "R.413l",
    name: "Kết thúc làn đường dành cho xe mô tô",
    content:
      "",
    image: require('../../assets/Bienbaohieulenh/signR413l.png'),
  },
  {
    type: "R.413n",
    name: "Kết thúc làn đường dành cho xe ô tô",
    content:
      "",
    image: require('../../assets/Bienbaohieulenh/signR413n.png'),
  },
  {
    type: "R.415",
    name: "Biển gộp làn đường theo phương tiện",
    content:
      "",
    image: require('../../assets/Bienbaohieulenh/signR415.png'),
  },
  {
    type: "R.420",
    name: "Bắt đầu khu dân cư",
    content:
      "Biển báo hiệu bắt đầu đoạn đường vào phạm vi khu đông dân cư. Biển có tác dụng báo cho người tham gia giao thông biết phạm vi phải tuân theo những quy định đi đường được áp dụng ở khu đông dân cư.",
    image: require('../../assets/Bienbaohieulenh/signR420.png'),
  },
  {
    type: "R.421",
    name: "Hết khu đông dân cư",
    content:
      "Biển báo hiệu hết đoạn đường qua phạm vi khu đông dân cư. Biển có tác dụng báo cho người tham gia giao thông biết phạm vi phải tuân theo những quy định đi đường được áp dụng ở khu đông dân cư đã hết hiệu lực.",
    image: require('../../assets/Bienbaohieulenh/signR421.png'),
  },
  {
    type: "R.E,9a",
    name: "Cấm đỗ xe trong khu vực",
    content:
      "Biển báo Cấm đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    image: require('../../assets/Bienbaohieulenh/signRE9a.png'),
  },
  {
    type: "R.E,9b",
    name: "Cấm đỗ xe theo giờ trong khu vực",
    content:
      "Biển báo Cấm đỗ xe theo giờ trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    image: require('../../assets/Bienbaohieulenh/signRE9b.png'),
  },
  {
    type: "R.E,9c",
    name: "Khu vực đỗ xe",
    content:
      "Biển báo khu vực đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    image: require('../../assets/Bienbaohieulenh/signRE9c.png'),
  },
  {
    type: "R.E,9d",
    name: "Hạn chế tốc độ tối đa trong khu vực",
    content:
      "Để quy định hạn chế tốc độ tối đa trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    image: require('../../assets/Bienbaohieulenh/signRE9d.png'),
  },
  {
    type: "R.E,10a",
    name: "Hết cấm đỗ xe trong khu vực",
    content:
      "Để báo hiệu hết cấm đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    image: require('../../assets/Bienbaohieulenh/signRE10a.png'),
  },
  {
    type: "R.E,10c",
    name: "Hết khu vực đỗ xe",
    content:
      "Để quy định hết khu vực đỗ xe trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    image: require('../../assets/Bienbaohieulenh/signRE10c.png'),
  },
  {
    type: "R.E,10d",
    name: "Hết hạn chế tốc độ tối đa trong khu vực",
    content:
      "Để quy định hết hạn chế tốc độ tối đa trong khu vực có hiệu lực cho tất cả các tuyến đường trong một khu vực (hiệu lực cho cả khu vực).",
    image: require('../../assets/Bienbaohieulenh/signRE10d.png'),
  },
  {
    type: "R.E,11a",
    name: "Báo hiệu có hầm chui",
    content:
      "Chỉ dẫn đoạn đường qua hầm có áp dụng quy định giao thông riêng.",
    image: require('../../assets/Bienbaohieulenh/signRE11a.png'),
  },
  {
    type: "R.E,11b",
    name: "Kết thúc hầm chui",
    content:
      "Chỉ dẫn hết đoạn đường qua hầm, các quy định giao thông riêng không còn áp dụng.",
    image: require('../../assets/Bienbaohieulenh/signRE11b.png'),
  },
  
];

const BienBaoHieuLenh = () => {
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

export default BienBaoHieuLenh;
