import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import VanHoaDaoDucTab from "../tab/VanHoaDaoDucTab";


const Stack = createStackNavigator();


const VanHoaDaoDucStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="VanHoaDaoDucTab"
          component={VanHoaDaoDucTab}
          options={({ navigation }) => ({
            headerTitle: "Văn Hóa và Đạo Đức",
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
  
  export default VanHoaDaoDucStack;