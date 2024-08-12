import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Dialog, Portal, Button, Paragraph, Provider as PaperProvider } from 'react-native-paper';

const rawData = [
  {
    type: "P.101",
    name: "Đường cấm",
    content:
      "Dùng để báo đường cấm các loại phương tiện đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định",
    image: require('../../assets/Bienbaocam/p101.png'),
  },
  {
    type: "P.102",
    name: "Cấm đi ngược chiều",
    content:
      "Dùng để báo đường cấm các loại xe (cơ giới và thô sơ) đi vào theo chiều đặt biển, trừ các xe được ưu tiên theo quy định; người đi bộ được phép đi trên vỉa hè hoặc lề đường.",
    image: require('../../assets/Bienbaocam/p102.png'),
  },
  {
    type: "P.103a",
    name: "Cấm xe ô tô",
    content:
      "Dùng để báo đường cấm các loại xe cơ giới kể cả xe máy 3 bánh có thùng đi qua, trừ xe máy 2 bánh, xe gắn máy và các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p103a.png'),
  },
  {
    type: "P.103b",
    name: "Cấm xe ô tô rẽ phải",
    content:
      "Dùng để báo đường cấm các loại xe cơ giới kể cả xe máy 3 bánh có thùng rẽ phải, trừ xe máy 2 bánh, xe gắn máy và các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p103b.png'),
  },
  {
    type: "P.103c",
    name: "Cấm xe ô tô rẽ trái",
    content:
      "Dùng để báo đường cấm các loại xe cơ giới kể cả xe máy 3 bánh có thùng rẽ trái, trừ xe máy 2 bánh, xe gắn máy và các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p103c.png'),
  },
  {
    type: "P.104",
    name: "Cấm xe máy",
    content:
      "Dùng để báo đường cấm các loại xe máy, trừ các xe được ưu tiên theo quy định.Biển không có giá trị cấm những người dắt xe máy.",
    image: require('../../assets/Bienbaocam/p104.png'),
  },
  {
    type: "P.105",
    name: "Cấm xe ô tô và xe máy",
    content:
      "Dùng để báo đường cấm các loại xe cơ giới và xe máy đi qua trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p105.png'),
  },
  {
    type: "P.106a",
    name: "Cấm xe ô tô tải",
    content:
      "Dùng để báo đường cấm các loại xe ô tô tải trừ các xe được ưu tiên theo quy định.Biển có hiệu lực cấm đối với cả máy kéo và các xe máy chuyên dùng đi vào đoạn đường đặt biển.",
    image: require('../../assets/Bienbaocam/p106a.png'),
  },
  {
    type: "P.106b",
    name: "Cấm xe ô tô tải",
    content:
      "Dùng để báo đường cấm các loại xe ô tô tải có khối lượng chuyên chở (theo Giấy chứng nhận kiểm định an toàn kỹ thuật và bảo vệ môi trường) lớn hơn một giá trị nhất định.",
    image: require('../../assets/Bienbaocam/p106b.png'),
  },
  {
    type: "P.106c",
    name: "Cấm các xe chở hàng nguy hiểm",
    content:
      "Dùng để báo đường cấm các xe chở hàng nguy hiểm.",
    image: require('../../assets/Bienbaocam/p106c.png'),
  },
  {
    type: "P.107",
    name: "Cấm xe ôtô khách và xe ô tô tải",
    content:
      "Dùng để báo đường cấm xe ô tô chở khách và các loại xe ô tô tải kể cả các loại máy kéo và xe máy chuyên dùng đi qua trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p107.png'),
  },
  {
    type: "P.107a",
    name: "Cấm xe ô tô khách",
    content:
      "Dùng để báo đường cấm ô tô chở khách đi qua trừ các xe ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p107a.png'),
  },
  {
    type: "P.107b",
    name: "Cấm xe ô tô taxi",
    content:
      "Dùng để báo đường cấm xe ô tô taxi đi lại.",
    image: require('../../assets/Bienbaocam/p107b.png'),
  },
  {
    type: "P.108",
    name: "Cấm xe kéo rơ-moóc",
    content:
      "Dùng để báo đường cấm các loại xe cơ giới kéo theo rơ-moóc kể cả xe máy, máy kéo, ô tô khách kéo theo rơ-moóc đi lại, trừ loại ô tô sơ-mi-rơ-moóc và các xe được ưu tiên (có kéo theo rơ-moóc) theo quy định.",
    image: require('../../assets/Bienbaocam/p108.png'),
  },
  {
    type: "P.108a",
    name: "Cấm xe sơ-mi rơ-moóc",
    content:
      "Dùng để báo đường cấm các loại xe sơ-mi rơ-moóc và các xe kéo rơ- moóc trừ các xe được ưu tiên (có dạng xe sơ-mi rơ-moóc hoặc có kéo theo rơ-moóc) theo quy định.",
    image: require('../../assets/Bienbaocam/p108a.png'),
  },
  {
    type: "P.109",
    name: "Cấm máy kéo",
    content:
      "Dùng để báo đường cấm các loại máy kéo, kể cả máy kéo bánh hơi và bánh xích đi qua.",
    image: require('../../assets/Bienbaocam/p109.png'),
  },
  {
    type: "P.110a",
    name: "Cấm xe đạp",
    content:
      "Dùng để báo đường cấm xe đạp đi qua.Biển không có giá trị cấm những người dắt xe đạp.",
    image: require('../../assets/Bienbaocam/p110a.png'),
  },
  {
    type: "P.110b",
    name: "Cấm xe đạp thồ",
    content:
      "Dùng để báo đường cấm xe đạp thồ đi qua.Biển này không cấm người dắt loại xe này.",
    image: require('../../assets/Bienbaocam/p110b.png'),
  },
  {
    type: "P.111a",
    name: "Cấm xe gắn máy",
    content:
      "Dùng để báo đường cấm xe gắn máy đi qua.Biển không có giá trị đối với xe đạp.",
    image: require('../../assets/Bienbaocam/p111a.png'),
  },
  {
    type: "P.111b",
    name: "Cấm xe ba bánh loại có động cơ",
    content:
      "Dùng để báo đường cấm xe ba bánh loại có động cơ như xe lam, xe xích lô máy, xe lôi máy,....",
    image: require('../../assets/Bienbaocam/p111b.png'),
  },
  {
    type: "P.111c",
    name: "Cấm xe ba bánh loại có động cơ",
    content:
      "Dùng để báo đường cấm xe ba bánh loại có động cơ như xe lam, xe xích lô máy, xe lôi máy,....",
    image: require('../../assets/Bienbaocam/p111c.png'),
  },
  {
    type: "P.111d",
    name: "Cấm xe ba bánh loại không có động cơ",
    content:
      "Dùng để báo đường cấm xe ba bánh loại không có động cơ như xe xích lô, xe lôi đạp,...",
    image: require('../../assets/Bienbaocam/p111d.png'),
  },
  {
    type: "P.112",
    name: "Cấm người đi bộ",
    content:
      "Dùng để báo đường cấm người đi bộ qua lại.",
    image: require('../../assets/Bienbaocam/p112.png'),
  },
  {
    type: "P.113",
    name: "Cấm xe người kéo, đẩy",
    content:
      "Dùng để báo đường cấm xe thô sơ, chuyển động do người kéo, đẩy đi qua.Biển không có giá trị cấm những xe nôi của trẻ em và phương tiện chuyên dùng để đi lại của những người tàn tật.",
    image: require('../../assets/Bienbaocam/p113.png'),
  },
  {
    type: "P.114",
    name: "Cấm xe súc vật kéo",
    content:
      "Dùng để báo đường cấm súc vật vận tải hàng hóa hoặc hành khách dù kéo xe hay chở trên lưng đi qua.",
    image: require('../../assets/Bienbaocam/p114.png'),
  },
  {
    type: "P.115",
    name: "Hạn chế trọng tải toàn bộ xe",
    content:
      "Dùng để báo đường cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo quy định, có trọng tải toàn bộ xe (trọng tải bản thân xe cộng với khối lượng người, hành lý và hàng hóa xếp trên xe) vượt quá trị số ghi trên biển đi qua.",
    image: require('../../assets/Bienbaocam/p115.png'),
  },
  {
    type: "P.116",
    name: "Hạn chế tải trọng trên trục xe",
    content:
      "Dùng để báo đường cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo quy định, có trọng tải toàn bộ xe (cả xe và hàng) phân bổ trên một trục bất kỳ của xe (tải trọng trục xe) vượt quá trị số ghi trên biển đi qua.",
    image: require('../../assets/Bienbaocam/p116.png'),
  },
  {
    type: "P.117",
    name: "Hạn chế chiều cao",
    content:
      "Dùng để báo hạn chế chiều cao của xe.Biển có hiệu lực cấm các xe (cơ giới và thô sơ) có chiều cao vượt quá trị số ghi trên biển đi qua, kể cả các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p117.png'),
  },
  {
    type: "P.118",
    name: "Hạn chế chiều ngang xe",
    content:
      "Dùng để báo hạn chế chiều ngang của xe.Biển có hiệu lực cấm các xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo quy định có chiều ngang (kể cả xe và hàng hóa) vượt quá trị số ghi trên biển đi qua.",
    image: require('../../assets/Bienbaocam/p118.png'),
  },
  {
    type: "P.119",
    name: "Hạn chế chiều dài xe",
    content:
      "Dùng để báo đường cấm các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên theo quy định, có độ dài toàn bộ kể cả xe và hàng lớn hơn trị số ghi trên biển đi qua.",
    image: require('../../assets/Bienbaocam/p119.png'),
  },
  {
    type: "P.120",
    name: "Hạn chế chiều dài xe cơ giới kéo theo rơ-moóc hoặc sơ-mi rơ-moóc",
    content:
      "Dùng để báo đường cấm các loại xe cơ giới kéo theo moóc kể cả ô tô sơ-mi-rơ-moóc và các loại xe được ưu tiên kéo moóc theo luật nhà nước quy định, có độ dài toàn bộ kể cả xe, moóc và hàng lớn hơn trị số ghi trên biển đi qua.",
    image: require('../../assets/Bienbaocam/p120.png'),
  },
  {
    type: "P.121",
    name: "Cự ly tối thiểu giữa hai xe",
    content:
      "Dùng để báo xe ô tô phải đi cách nhau một khoảng tối thiểu",
    image: require('../../assets/Bienbaocam/p121.png'),
  },
  {
    type: "P.123a",
    name: "Cấm rẽ trái",
    content:
      "Dùng để báo cấm rẽ trái (theo hướng mũi tên chỉ) ở những vị trí đường giao nhau; biển không cấm quay đầu xe.Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) rẽ sang phía trái trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p123a.png'),
  },
  {
    type: "P.123b",
    name: "Cấm rẽ phải",
    content:
      "Để báo cấm rẽ phải (theo hướng mũi tên chỉ) ở những vị trí đường giao nhau; biển không cấm quay đầu xe.Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) rẽ sang phía phải trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p123b.png'),
  },
  {
    type: "P.124a",
    name: "Cấm quay đầu xe",
    content:
      "Dùng để báo cấm các loại xe quay đầu (theo kiểu chữ); chiều mũi tên phù hợp với chiều cấm quay đầu xe; biển không cấm rẽ trái.Biển có hiệu lực cấm các loại xe (cơ giới và thô sơ) trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p124a.jpg'),
  },
  {
    type: "P.124b",
    name: "Cấm quay đầu xe",
    content:
      "Dùng để báo đường cấm người đi bộ qua lại.Dùng để báo cấm xe ô tô quay đầu (theo kiểu chữ U); chiều mũi tên phù hợp với chiều cấm xe ô tô quay đầu; biển không cấm rẽ trái.Biển có hiệu lực cấm xe ô tô và xe máy 3 bánh (side car) trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p124b.jpg'),
  },
  {
    type: "P.124c",
    name: "Cấm rẽ trái và quay đầu xe",
    content:
      "Dùng để báo cấm các loại xe rẽ trái đồng thời cấm quay đầu.",
    image: require('../../assets/Bienbaocam/p124c.png'),
  },
  {
    type: "P.124d",
    name: "Cấm rẽ phải và quay đầu xe",
    content:
      "Dùng để báo cấm các loại xe rẽ phải đồng thời cấm quay đầu.",
    image: require('../../assets/Bienbaocam/p124d.png'),
  },
  {
    type: "P.124e",
    name: "Cấm ô tô rẽ trái và quay đầu xe",
    content:
      "Dùng để báo đường cấm người đi bộ qua lại.",
    image: require('../../assets/Bienbaocam/p124e.png'),
  },
  {
    type: "P.124f",
    name: "Cấm ô tô rẽ phải và quay đầu xe",
    content:
      "Dùng để báo cấm xe ô tô rẽ phải và đồng thời cấm quay đầu.",
    image: require('../../assets/Bienbaocam/p124f.png'),
  },
  {
    type: "P.125",
    name: "Cấm vượt",
    content:
      "Dùng để báo cấm các loại xe cơ giới vượt nhau.Biển có hiệu lực cấm tất cả các loại xe cơ giới vượt nhau (kể cả xe được ưu tiên theo quy định) nhưng được phép vượt xe máy 2 bánh, xe gắn máy.",
    image: require('../../assets/Bienbaocam/p125.png'),
  },
  {
    type: "P.126",
    name: "Cấm xe ô tô tải vượt",
    content:
      "Dùng để báo cấm các loại ô tô tải vượt xe cơ giới khác; biển không cấm các loại xe cơ giới khác vượt nhau và vượt ô tô tải.Biển có hiệu lực cấm các loại ôtô tải có khối lượng chuyên chở lớn hơn 3.500 kg kể cả các xe được ưu tiên theo quy định vượt xe cơ giới khác. Được phép vượt xe máy 2 bánh, xe gắn máy.",
    image: require('../../assets/Bienbaocam/p126.png'),
  },
  {
    type: "P.127",
    name: "Tốc độ tối đa cho phép",
    content:
      "Dùng để báo tốc độ tối đa cho phép các xe cơ giới chạy.Biển có hiệu lực cấm các loại xe cơ giới chạy với tốc độ tối đa vượt quá trị số ghi trên biển trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p127.png'),
  },
  {
    type: "P.127a",
    name: "Tốc độ tối đa cho phép về ban đêm",
    content:
      "Dùng để quy định tốc độ tối đa về ban đêm cho các phương tiện.",
    image: require('../../assets/Bienbaocam/p127a.png'),
  },
  {
    type: "P.127b",
    name: "Biển ghép tốc độ tối đa cho phép trên từng làn đường",
    content:
      "Dùng để quy định tốc độ tối đa cho phép trên từng làn đường.",
    image: require('../../assets/Bienbaocam/p127b.png'),
  },
  {
    type: "P.127c",
    name: "Biển ghép tốc độ tối đa cho phép theo phương tiện, trên từng làn đường",
    content:
      "Dùng để quy định tốc độ tối đa cho phép theo phương tiện trên từng làn đường.",
    image: require('../../assets/Bienbaocam/p127c.png'),
  },
  {
    type: "P.128",
    name: "Cấm sử dụng còi",
    content:
      "Dùng để báo cấm các loại xe sử dụng còi.",
    image: require('../../assets/Bienbaocam/p128.png'),
  },
  {
    type: "P.129",
    name: "Kiểm tra",
    content:
      "Dùng để báo nơi đặt trạm kiểm tra; các loại phương tiện vận tải qua đó phải dừng lại để làm thủ tục kiểm tra, kiểm soát theo quy định.",
    image: require('../../assets/Bienbaocam/p129.png'),
  },
  {
    type: "P.130",
    name: "Cấm dừng xe và đỗ xe",
    content:
      "Dùng để báo nơi cấm dừng xe và đỗ xe.Biển có hiệu lực cấm các loại xe cơ giới dừng và đỗ ở phía đường có đặt biển trừ các xe được ưu tiên theo quy định.",
    image: require('../../assets/Bienbaocam/p130.png'),
  },
  {
    type: "P.131a",
    name: "Cấm đỗ xe",
    content:
      "Dùng để báo nơi cấm đỗ xe trừ các xe được ưu tiên theo quy định.Biển có hiệu lực cấm các loại xe cơ giới đỗ ở phía đường có đặt biển.",
    image: require('../../assets/Bienbaocam/p131a.png'),
  },
  {
    type: "P.131b",
    name: "Cấm đỗ xe",
    content:
      "Dùng để báo nơi cấm đỗ xe trừ các xe được ưu tiên theo quy định.Biển có hiệu lực cấm các loại xe cơ giới đỗ ở phía đường có đặt biển vào những ngày lẻ.",
    image: require('../../assets/Bienbaocam/p131b.png'),
  },
  {
    type: "P.131c",
    name: "Cấm đỗ xe",
    content:
      "Dùng để báo nơi cấm đỗ xe trừ các xe được ưu tiên theo quy định.Biển có hiệu lực cấm các loại xe cơ giới đỗ ở phía đường có đặt biển vào những ngày chẵn.",
    image: require('../../assets/Bienbaocam/p131c.png'),
  },
  {
    type: "P.132",
    name: "Nhường đường cho xe cơ giới đi ngược chiều qua đường hẹp",
    content:
      "Dùng để báo các loại xe (cơ giới và thô sơ) kể cả các xe được ưu tiên phải nhường đường cho các loại xe cơ giới đang đi theo hướng ngược lại qua các đoạn đường hẹp hoặc cầu hẹp.",
    image: require('../../assets/Bienbaocam/p132.png'),
  },
  {
    type: "DP.133",
    name: "Hết cấm vượt",
    content:
      "Dùng để báo hết đoạn đường cấm vượt.",
    image: require('../../assets/Bienbaocam/dp133.png'),
  },
  {
    type: "DP.134",
    name: "Hết tốc độ tối đa cho phép",
    content:
      "Dùng để báo hết đoạn đường tốc độ tối đa.",
    image: require('../../assets/Bienbaocam/dp134.png'),
  },
  {
    type: "DP.135",
    name: "Hết tất cả các lệnh cấm",
    content:
      "Dùng để báo hết đoạn đường mà nhiều biển báo cấm cùng hết hiệu lực.",
    image: require('../../assets/Bienbaocam/dp135.png'),
  },
  {
    type: "P.136",
    name: "Cấm đi thẳng",
    content:
      "Dùng để báo hết đoạn đường cấm vượt.",
    image: require('../../assets/Bienbaocam/p136.png'),
  },
  {
    type: "P.137",
    name: "Cấm rẽ trái, rẽ phải",
    content:
      "Dùng để báo hết đoạn đường cấm vượt.",
    image: require('../../assets/Bienbaocam/p137.png'),
  },
  {
    type: "P.138",
    name: "Cấm đi thẳng, rẽ trái",
    content:
      "Dùng để báo hết đoạn đường cấm vượt.",
    image: require('../../assets/Bienbaocam/p138.png'),
  },
  {
    type: "P.139",
    name: "Cấm đi thẳng, rẽ phải",
    content:
      "Biểu thị đường qua nút giao cấm tất cả các loại xe (trừ xe ưu tiên theo quy định) đi thẳng, rẽ phải.",
    image: require('../../assets/Bienbaocam/p139.png'),
  },
  {
    type: "P.140",
    name: "Cấm xe công nông và các loại xe tương tự",
    content:
      "Dùng để báo đường cấm xe công nông.",
    image: require('../../assets/Bienbaocam/p140.png'),
  },


];

const BienBaoCam = () => {
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

export default BienBaoCam;
