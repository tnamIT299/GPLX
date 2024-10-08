import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import SaHinhTab from "../tab/SaHinhTab";

const Stack = createStackNavigator();


const SaHinhStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="SaHinhTab"
          component={SaHinhTab}
          options={({ navigation }) => ({
            headerTitle: "Sa Hình",
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
  
  export default SaHinhStack;