import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import DeThiKhaiNiemQuyTacTab from "../../OnTapTheoCauHoi/tab/DeThiKhaiNiemQuyTacTab";

const Stack = createStackNavigator();


const DeThiKhaiNiemQuyTacStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="DeThiKhaiNiemQuyTacTab"
          component={DeThiKhaiNiemQuyTacTab}
          options={({ navigation }) => ({
            headerTitle: "Khái niệm Quy tắc",
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
  
  export default DeThiKhaiNiemQuyTacStack;