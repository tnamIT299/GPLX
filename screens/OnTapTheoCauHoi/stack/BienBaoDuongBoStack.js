import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import BienBaoDuongBoTab from "../../OnTapTheoCauHoi/tab/BienBaoDuongBoTab"


const Stack = createStackNavigator();

const BienBaoDuongBoStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="BienBaoDuongBoTab"
          component={BienBaoDuongBoTab}
          options={({ navigation }) => ({
            headerTitle: "Biển báo đường bộ",
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
  
  export default BienBaoDuongBoStack;
