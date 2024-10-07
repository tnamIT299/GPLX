import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BoDe3Tab from "../../BoDe/tab/BoDe3Tab";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createStackNavigator();

const BoDe3Stack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BoDe3Tab"
        component={BoDe3Tab}
        options={{
          headerTitle: "Đề thi số 3",
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

export default BoDe3Stack;
