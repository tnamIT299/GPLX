import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const Stack = createStackNavigator();

const items = [
  { id: "1", name: "Đề Thi Số 1", icon: "book-open", color: "#66CCCC" },
  { id: "2", name: "Đề Thi Số 2", icon: "book-open", color: "#66CCCC" },
  { id: "3", name: "Đề Thi Số 3", icon: "book-open", color: "#66CCCC" },
  { id: "4", name: "Đề Thi Số 4", icon: "book-open", color: "#66CCCC" },
  { id: "5", name: "Đề Thi Số 5", icon: "book-open", color: "#66CCCC" },
  { id: "6", name: "Đề Thi Số 6", icon: "book-open", color: "#66CCCC" },
  { id: "7", name: "Đề Thi Số 7", icon: "book-open", color: "#66CCCC" },
  { id: "8", name: "Đề Thi Số 8", icon: "book-open", color: "#66CCCC" },
];

const BoDeThiTab = ({ navigation }) => {
  const handleOption = (item) => {
    switch (item.id) {
      case "1":
        navigation.navigate("BoDe1");
        break;
      case "2":
        alert("Đề thi số 2");
        break;
      case "3":
        alert("Đề thi số 3");
        break;
      case "4":
        alert("Đề thi số 4");
        break;
      case "5":
        alert("Đề thi số 5");
        break;
      case "6":
        alert("Đề thi số 6");
        break;
      case "7":
        alert("Đề thi số 7");
        break;
      case "8":
        alert("Đề thi số 8");
        break;
      default:
        Alert.alert("Thông báo", "Tính năng này đang được phát triển!");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[styles.item, { backgroundColor: item.color }]}
            onPress={() => handleOption(item)}
          >
            <Icon name={item.icon} size={30} color="#FFF" />
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const BoDeThiStack = () => {
  return (
    <Stack.Navigator initialRouteName="ManhinhChonOption">
      <Stack.Screen
        name="BoDeThiTab"
        component={BoDeThiTab}
        options={{
          title: "Đề thi bằng A1",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#2F95DC" },
          headerTintColor: "#FFFFFF",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#2F95DC",
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  title_bar: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
    marginTop: 10,
  },
  icon: {
    marginLeft: "auto",
    marginTop: 10,
    color: "#fff",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 12,
  },
  item: {
    width: "48%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
  },
  itemText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
    marginTop: 8,
  },
});

export default BoDeThiStack;
