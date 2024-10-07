import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BoDe7Tab from "../../BoDe/tab/BoDe7Tab";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const BoDe7Stack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoDe7Tab"
        component={BoDe7Tab}
        options={{
          headerTitle: "Đề thi số 7",
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

export default BoDe7Stack;
