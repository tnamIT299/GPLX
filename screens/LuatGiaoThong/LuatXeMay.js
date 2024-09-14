import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import IconCard from "../../component/IconCard";

const LuatXeMay = ({ navigation }) => {
  const data = [
    {
      id: "1",
      iconName: "traffic-light",
      label: "Hiệu lệnh, chỉ dẫn",
      color: "#4CAF50",
    },
    { id: "2", iconName: "map-signs", label: "Chuyển hướng", color: "#2196F3" },
    { id: "3", iconName: "parking", label: "Dừng xe, đỗ xe", color: "#FFB74D" },
    {
      id: "4",
      iconName: "ambulance",
      label: "Thiết bị ưu tiên, còi",
      color: "#FF3333",
    },
    {
      id: "5",
      iconName: "tachometer-alt",
      label: "Tốc độ khoảng cách",
      color: "#FF6699",
    },
    {
      id: "6",
      iconName: "motorcycle",
      label: "Vận chuyển người, hàng",
      color: "#4FC3F7",
    },
    {
      id: "7",
      iconName: "tools",
      label: "Trang thiết bị phương tiện",
      color: "#8D6E63",
    },
    {
      id: "8",
      iconName: "ban",
      label: "Đường cấm, đường một",
      color: "#90A4AE",
    },
    {
      id: "9",
      iconName: "wine-bottle",
      label: "Nồng độ cồn, chất kích thích",
      color: "#00C5CD",
    },
    { id: "10", iconName: "id-card", label: "Giấy tờ xe", color: "#FF6633" },
    { id: "11", iconName: "exclamation", label: "Khác", color: "#FF9900" },
  ];

  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }

  const handleOption = (item) => {
    switch (item.id) {
      case "1":
        navigation.navigate("HieulenhchidanXM");
        break;
      case "2":
        navigation.navigate("ChuyenhuongXM");
        break;
      case "3":
        navigation.navigate("DungxeXM");
        break;
      case "4":
        navigation.navigate("ThietbiuutienXM");
        break;
      case "5":
        navigation.navigate("TocdoXM");
        break;
      case "6":
        navigation.navigate("VanchuyenXM");
        break;
      case "7":
        navigation.navigate("TrangthietbiXM");
        break;
      case "8":
        navigation.navigate("DuongcamXM");
        break;
      case "9":
        navigation.navigate("NongdoconXM");
        break;
      case "10":
        navigation.navigate("GiaytoxeXM");
        break;
      case "11":
        navigation.navigate("KhacXM");
        break;
      default:
        Alert.alert("Thông báo", "Tính năng này đang được phát triển!");
    }
  };

  return (
    <View style={styles.container}>
      {rows.map((row, index) => (
        <View style={styles.row} key={index}>
          {row.map((item, itemIndex) => (
            <IconCard
              key={itemIndex}
              iconName={item.iconName}
              label={item.label}
              color={item.color}
              onPress={() => handleOption(item)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});

export default LuatXeMay;
