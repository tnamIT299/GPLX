import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome";
import CauLietTab from "../../OnTapTheoCauHoi/tab/CauLietTab"


const Stack = createStackNavigator();

const CauLietStack = ({ navigation }) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="CauLietTab"
          component={CauLietTab}
          options={({ navigation }) => ({
            headerTitle: "Câu hỏi liệt",
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
  
  export default CauLietStack;
