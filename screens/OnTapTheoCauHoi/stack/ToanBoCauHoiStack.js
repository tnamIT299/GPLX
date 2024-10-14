import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import ToanBoCauHoiTab from "../tab/ToanBoCauHoiTab";

const Stack = createStackNavigator();

const ToanBoCauHoiStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="ToanBoCauHoiTab"
          component={ToanBoCauHoiTab}
          options={({ navigation }) => ({
            headerTitle: "Tất cả câu hỏi",
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
  
  export default ToanBoCauHoiStack;
  