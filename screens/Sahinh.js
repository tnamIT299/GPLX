import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
const Stack = createStackNavigator();

const SahinhTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            Các bước thi thực hành lái xe máy A1
          </Text>
          <Text style={styles.contentText}>
            Phần này có các mục: Đi vòng số 8 , đường thẳng, zích zắc và đường
            mấp mô
          </Text>
          <Text style={styles.contentText}>
            * Lưu ý: Bạn nên nổ sẵng xe máy và để số 3, xong xếp hàng đợi đến
            lượt mình thi nhé
          </Text>
        </View>

        <Image
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").width / 2,
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={{
            uri: "https://i.imgur.com/jCEVUYJ.jpg",
          }}
        />

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            {" "}
            – Hình 01: Xuất phát đi hình số 8
          </Text>
          <Text style={styles.contentText}>
            Trên hình bạn cũng thấy rất rõ ràng điểm xuất phát và hướng mui tên
            hướng dẫn bạn đi đủ thành hình số 08. Phần bài thi này yêu cầu bạn
            đi tốc độ vừa phải, vòng tay lái dẻo, cà phanh cho tốt để không đi
            ra ngoài vạch.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}> – Hình 02: Đi đường thẳng</Text>
          <Text style={styles.contentText}> Cứ giữ thẳng lái và đi qua</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            {" "}
            – Hình 03: Đường đi vòng vèo
          </Text>
          <Text style={styles.contentText}>
            {" "}
            Gọi là đường vòng vèo nhưng nó không quanh co chút nào, ứng viên chỉ
            cần hơi lượn tay lái theo vạch vẽ sẵn là được. Hình này khi đi bạn
            cần chú ý về tốc độ.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionHeader}>
            {" "}
            – Hình 04: Đường thẳng gồ gề
          </Text>
          <Text style={styles.contentText}>
            Đi xong hình một các bạn đi tiếp luôn hình 02, là đường thẳng ghồ
            ghề. Hình này thì dễ hơn, chỉ cần giữ vững tay lái thẳng lái là đi
            qua dễ dàng.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const SahinhStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SahinhTab"
        component={SahinhTab}
        options={({ navigation }) => ({
          title: "Sa hình",
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#2F95DC" },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: { fontWeight: "bold" },
          headerLeft: () => (
            <Icon
              name="chevron-left"
              size={15}
              onPress={() => navigation.goBack()}
              style={{ color: "#FFFFFF", marginLeft: 10 }}
            >
              Back
            </Icon>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    marginRight: 70,
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginBottom: 8,
  },
  contentText: {
    fontSize: 15,
    color: "#333",
    padding: 5,
  },
  contentSmall: {
    marginLeft: 20,
    padding: 5,
  },
});
export default SahinhStack;
