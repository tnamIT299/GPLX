import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { supabase } from "../../data/supabaseClient";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
const Stack = createStackNavigator();

const ChangePasswordTab = () => {
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [CurrentpasswordVisible, setCurrentPasswordVisible] = useState(false);
  const [NewpasswordVisible, setNewPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  const handleChangePassword = async () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
      Alert.alert("Thông báo", "Email không hợp lệ");
      return;
    }
    if (newPassword !== confirmPassword) {
      Alert.alert("Thông báo", "Mật khẩu không khớp");
      return;
    }
    const { data, error: resetError } =
      await supabase.auth.resetPasswordForEmail(email);

    if (resetError) {
      Alert.alert("Error", resetError.message);
      return;
    }

    const { error: updateError } = await supabase.auth.updateUser({
      password: newPassword,
    });

    if (updateError) {
      Alert.alert("Error", updateError.message);
    } else {
      Alert.alert("Thông báo", "Thay đổi mật khẩu thành công!");
      setEmail("");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 0.8 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            style={styles.input}
          />
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Mật khẩu hiện tại"
            onChangeText={setCurrentPassword}
            value={currentPassword}
            secureTextEntry={!CurrentpasswordVisible}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setCurrentPasswordVisible(!CurrentpasswordVisible)}
          >
            <Icon
              name={CurrentpasswordVisible ? "eye-slash" : "eye"}
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Mật khẩu mới"
            onChangeText={setNewPassword}
            value={newPassword}
            secureTextEntry={!NewpasswordVisible}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setNewPasswordVisible(!NewpasswordVisible)}
          >
            <Icon
              name={NewpasswordVisible ? "eye-slash" : "eye"}
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Xác nhận mật khẩu mới"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry={!passwordConfirmVisible}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setPasswordConfirmVisible(!passwordConfirmVisible)}
          >
            <Icon
              name={passwordConfirmVisible ? "eye-slash" : "eye"}
              size={20}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.changPassButton} onPress={handleChangePassword}>
          <Text style={styles.changPassButtonText}>Thay đổi mật khẩu</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const ChangePasswordStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChangePasswordTab"
        component={ChangePasswordTab}
        options={({ navigation }) => ({
          title: "Thay đổi mật khẩu",
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

export default ChangePasswordStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    fontSize: 16,
    borderColor: "#000",
    borderBottomWidth: 1,
    marginBottom: 40,
    paddingLeft: 10,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  icon: {
    position: "absolute",
    right: 10,
    bottom: 8,
  },
  changPassButton: {
    width: "100%",
    backgroundColor: "#6672A0",
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
  },
  changPassButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
});
