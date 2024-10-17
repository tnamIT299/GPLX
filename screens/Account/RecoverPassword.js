import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";
import { useFonts } from "expo-font";
import { sendEmail } from "../Account/mail/MailConfig"; // Custom email sending function
import { TextEncoder, TextDecoder } from "text-encoding";
import { supabase } from "../../data/supabaseClient";

// Khởi tạo polyfill
if (typeof TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder;
}
if (typeof TextDecoder === "undefined") {
  global.TextDecoder = TextDecoder;
}

const RecoverPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [recoveryCode, setRecoveryCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmNewPasswordVisible, setConfirmNewPasswordVisible] =
    useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");

  let [fontsLoaded] = useFonts({
    "Montserrat-Regular": require("../../assets/font/Montserrat-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const sendotp = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: "tronghuy0077@gmail.com",
      options: {
        shouldCreateUser: false,
      },
    });

    setIsCodeSent(true);
  };

  const confirmotp = async (token) => {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      email,
      token: `${token}`,
      type: "email",
    });
    console.log(session);
  };

  const handleSendRecoveryCode = async () => {
    const generatedCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString(); // Tạo mã OTP 6 chữ số

    try {
      // Tạo nội dung email chứa mã OTP
      const subject = "Mã khôi phục mật khẩu";
      const message = `Mã khôi phục của bạn là: ${generatedCode}. Vui lòng nhập mã này để thay đổi mật khẩu của bạn.`;

      await sendEmail(email, subject, message); // Gửi email chứa mã OTP
      setGeneratedCode(generatedCode); // Lưu mã OTP để xác minh
      Alert.alert("Thông báo", "Mã khôi phục đã được gửi đến email của bạn.");
      setIsCodeSent(true);
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Không thể gửi mã khôi phục. Vui lòng thử lại sau.");
    }
  };

  const handleResetPassword = async () => {
    if (newPassword !== confirmNewPassword) {
      Alert.alert("Thông báo", "Mật khẩu không khớp");
      return;
    }

    // Xác minh mã OTP trước khi đặt lại mật khẩu
    if (recoveryCode !== generatedCode) {
      Alert.alert("Thông báo", "Mã khôi phục không chính xác");
      return;
    }

    try {
      // Nếu mã OTP khớp, gọi resetPasswordForEmail để yêu cầu đặt lại mật khẩu
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        email
      );

      if (resetError) {
        console.error(resetError);
        Alert.alert("Error", resetError.message);
        return;
      }

      // Cập nhật mật khẩu trực tiếp sau khi gửi yêu cầu đặt lại mật khẩu
      const { error: updateError } = await supabase.auth.updateUser({
        password: newPassword,
      });

      if (updateError) {
        console.error(updateError);
        Alert.alert("Error", updateError.message);
      } else {
        Alert.alert(
          "Thông báo",
          "Mật khẩu của bạn đã được cập nhật thành công!"
        );
        navigation.navigate("Login");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <ImageBackground
      source={require("../../assets/images/background/appbackground19.webp")}
      style={styles.background}
    >
      <KeyboardAvoidingView
        style={{ flex: 0.7 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={10}
      >
        <View style={styles.container}>
          <Text style={styles.title}>WELCOME TO GPLX</Text>

          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Email"
              inputMode="email"
              style={styles.input}
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {isCodeSent ? (
            <>
              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Mã khôi phục"
                  value={recoveryCode}
                  onChangeText={setRecoveryCode}
                  style={styles.input}
                />
              </View>

              {/* <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Mật khẩu mới"
                  value={newPassword}
                  onChangeText={setNewPassword}
                  secureTextEntry={!passwordVisible}
                  style={styles.input}
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!passwordVisible)}
                >
                  <Icon
                    name={passwordVisible ? "eye-slash" : "eye"}
                    size={20}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.passwordContainer}>
                <TextInput
                  placeholder="Xác thực mật khẩu mới"
                  value={confirmNewPassword}
                  onChangeText={setConfirmNewPassword}
                  secureTextEntry={!confirmNewPasswordVisible}
                  style={styles.input}
                />
                <TouchableOpacity
                  onPress={() =>
                    setConfirmNewPasswordVisible(!confirmNewPasswordVisible)
                  }
                >
                  <Icon
                    name={confirmNewPasswordVisible ? "eye-slash" : "eye"}
                    size={20}
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View> */}

              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => confirmotp(recoveryCode)}
              >
                <Text style={styles.submitButtonText}>Khôi Phục</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity style={styles.submitButton} onPress={sendotp}>
              <Text style={styles.submitButtonText}>Gửi mã khôi phục</Text>
            </TouchableOpacity>
          )}

          <View style={styles.signUpContainer}>
            <Text>Đã có tài khoản ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.signUpText}>Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontFamily: "Montserrat-Regular",
    marginBottom: 40,
    color: "#000",
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
  },
  submitButton: {
    width: "100%",
    backgroundColor: "#6672A0",
    padding: 10,
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 20,
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  signUpText: {
    color: "red",
    marginLeft: 5,
  },
  icon: {
    position: "absolute",
    right: 10,
    bottom: 8,
  },
});

export default RecoverPassword;

//trinhthanhnam2003@gmail.com
//mk hiện tại : 123456
