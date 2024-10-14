import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import { supabase } from "../data/supabaseClient";
import dayjs from "dayjs";
import { useFocusEffect } from "@react-navigation/native";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/vi"; // Import ngôn ngữ tiếng Việt
import { getUserId } from "../data/getUser";

dayjs.extend(relativeTime);
dayjs.locale("vi");

const Stack = createStackNavigator();

const HistoryTab = ({ navigation }) => {
  const [uid, setUserUid] = useState("");
  const [historyData, setHistoryData] = useState([]);
  const [noHistoryMessage, setNoHistoryMessage] = useState("");

  useEffect(() => {
    const fetchUserId = async () => {
      const uid = await getUserId();
      setUserUid(uid);
      console.log("UID:", uid);
    };
    fetchUserId();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  useEffect(() => {
    fetchHistory();
  }, [uid]);
  

  const fetchHistory = async () => {
    if (!uid) {
      // If uid is not yet set, skip fetching history
      return;
    }
  
    const { data, error } = await supabase
      .from("HistoryExam")
      .select("*, Exam(name)")
      .eq("uid", uid)
      .order("timestamp", { ascending: false });
  
    if (error) {
      console.error(error);
    } else {
      if (data.length === 0) {
        setNoHistoryMessage("Chưa có lịch sử thi");
      } else {
        setNoHistoryMessage(""); // Clear message if data is available
        setHistoryData(
          data.map((item) => ({
            ...item,
            examName: item.Exam.name,
            formattedTimestamp: dayjs(item.timestamp).format("DD/MM/YYYY HH:mm"),
          }))
        );
      }
    }
  };

  const handleDeleteAllHistory = async () => {
    Alert.alert(
      "Xác nhận xóa",
      "Bạn có chắc chắn muốn xóa toàn bộ lịch sử làm đề thi?",
      [
        {
          text: "Hủy",
          style: "cancel",
        },
        {
          text: "Xóa",
          onPress: async () => {
            const { data, error: fetchError } = await supabase
              .from("HistoryExam")
              .select("id")
              .eq("uid", uid);

            if (fetchError) {
              console.error("Error fetching history IDs:", fetchError);
              return;
            }

            const idsToDelete = data.map((item) => item.id);

            const { error } = await supabase
              .from("HistoryExam")
              .delete()
              .in("id", idsToDelete);

            if (error) {
              console.error("Error deleting history:", error);
            } else {
              Alert.alert("Thành công", "Đã xóa toàn bộ lịch sử làm đề thi.");
              await fetchHistory();
            }
          },
        },
      ]
    );
  };

  const renderItem = ({ item }) => {
    const resultColor = item.result === "Trượt" ? "red" : "green"; // Màu chữ dựa trên kết quả

    return (
      <View style={styles.itemContainer}>
        <Text style={styles.title}>{item.examName}</Text>
        <Text style={{fontSize:15}}>Điểm: {item.score} / 25</Text>
        <Text style={{fontSize:15}}>Thời gian: {item.formattedTimestamp}</Text>
        <Text style={{ color: resultColor, fontWeight:'bold', fontSize:15 }}>Kết quả: {item.result}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={handleDeleteAllHistory}
      >
        <Icon
          name="trash"
          size={30}
          onPress={handleDeleteAllHistory}
          style={{ color: "red" }}
        />
      </TouchableOpacity>

      {noHistoryMessage ? (
        <Text style={styles.noHistoryText}>{noHistoryMessage}</Text>
      ) : (
        <FlatList
          data={historyData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const HistoryStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={({ navigation }) => ({
          title: "Lịch sử thi",
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
            >Back</Icon>
          ),
        })}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HistoryStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  deleteContainer: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  noHistoryText: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
    marginTop: 20,
  },
});