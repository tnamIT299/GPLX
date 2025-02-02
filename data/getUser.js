import AsyncStorage from "@react-native-async-storage/async-storage";

export const getUserId = async () => {
  try {
    const userId = await AsyncStorage.getItem("userId");
    return userId !== null ? userId : null; // Trả về null nếu không có
  } catch (error) {
    console.error("Error retrieving user ID:", error);
    return null; // Trả về null nếu có lỗi
  }
};

export const getUserName = async () => {
  try {
    const userName = await AsyncStorage.getItem("userName");
    return userName !== null ? userName : "Anonymous"; // Trả về giá trị mặc định nếu không có
  } catch (error) {
    console.error("Error retrieving user name:", error);
    return "Anonymous"; // Trả về giá trị mặc định nếu có lỗi
  }
};