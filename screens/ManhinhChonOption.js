import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Stack = createStackNavigator();

const items = [
  { id: "1", name: "Đề ngẫu nhiên", icon: require("../assets/images/random.png"), color: "#FFB74D" },
  { id: "2", name: "Thi theo bộ đề", icon: require("../assets/images/exam.png"), color: "#81C784" },
  { id: "3", name: "Các câu bị sai", icon: require("../assets/images/wrong.png"), color: "#FF3333" },
  { id: "4", name: "Ôn tập câu hỏi", icon: require("../assets/images/revise.png"), color: "#4FC3F7" },
  {
    id: "5",
    name: "20 câu điểm liệt",
    icon: require("../assets/images/warning.png"),
    color: "#8D6E63",
  },
  { id: "6", name: "Lịch sử thi", icon: require("../assets/images/history.png"), color: "#00C5CD" },
  { id: "7", name: "Tra cứu", icon: require("../assets/images/search.png"), color: "#FF6633" },
];

const ManhinhChonOptionTab = ({ navigation }) => {
  const handleOption = (item) => {
    switch (item.id) {
      case "1":
        navigation.navigate("DeNgauNhien");
        break;
      case "2":
        navigation.navigate("BoDeThi");
        break;
      case "3":
        navigation.navigate("CacCauBiSai");
        break;
      case "4":
        navigation.navigate("OnTapTheoCauHoi");
        break;
      case "5":
        navigation.navigate("CauLiet");
        break;
      case "6":
        navigation.navigate("History");
        break;
      case "7":
        navigation.navigate("Tracuu");
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
            <Image source={item.icon} style={styles.icon}/>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const ManhinhChonOptionStack = ({ navigation, route }) => {
  const { licenseName = "N/A", question_count = 0 } = route.params || {};
  return (
    <Stack.Navigator initialRouteName="ManhinhChonOption">
      <Stack.Screen
        name="ManhinhChonOptionTab"
        component={ManhinhChonOptionTab}
        options={{
          title: `${question_count} câu hỏi ${licenseName}`,
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#2F95DC" },
          headerTintColor: "#FFFFFF",
          headerRight: () => (
            <Icon
              name="cog"
              size={30}
              onPress={() => navigation.goBack()}
              style={{ color: "#FFFFFF", marginRight: 10 }}
            ></Icon>
          ),
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
    width: 55,
    height: 55,
    resizeMode: "contain",
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

export default ManhinhChonOptionStack;
