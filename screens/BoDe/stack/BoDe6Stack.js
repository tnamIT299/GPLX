import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BoDe6Tab from "../../BoDe/tab/BoDe6Tab";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const BoDe6Stack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoDe6Tab"
        component={BoDe6Tab}
        options={{
          headerTitle: "Đề thi số 6",
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
        }}
        
      />
    </Stack.Navigator>
  );
};

export default BoDe6Stack;
