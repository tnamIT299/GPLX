import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import KyThuatLaiXeTab from "../tab/KyThuatLaiXeTab";

const Stack = createStackNavigator();


const KyThuatLaiXeStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="KyThuatLaiXeTab"
          component={KyThuatLaiXeTab}
          options={({ navigation }) => ({
            headerTitle: "Kỹ thuật lái xe",
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
  
  export default KyThuatLaiXeStack;