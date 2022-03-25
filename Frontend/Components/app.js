//modules
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//components
import UnauthHome from "./unauthHome";
import AuthHome from "./authHome";
import Login from "./login";
import Register from "./register";

const Stack = createNativeStackNavigator();

//Navigation stack definition
function AppBase() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="unauthHome"
          component={UnauthHome}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="dashboard"
          component={AuthHome}
          options={{ header: () => null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppBase;
