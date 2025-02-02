import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const AccountTab = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("ChangePassword")}
        >
          <Image
            source={require("../../assets/icon/reset-password.png")}
            style={styles.icon}
          />
          <Text style={styles.buttonText}>Thay đổi mật khẩu</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AccountTab"
        component={AccountTab}
        options={({ navigation }) => ({
          title: "Tài Khoản",
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

export default AccountStack;

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 25,
    top: 10,
    marginVertical: 10,
    marginHorizontal: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 16,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
};
