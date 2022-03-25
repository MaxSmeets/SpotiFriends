//modules
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
//components
import TextInputField from "./textInputField";
import MainButton from "./mainButton";

function Login({ navigation }) {
  function LoginButtonHandler() {
    navigation.navigate("dashboard");
  }

  return (
    <View style={styles.body}>
      <TextInputField text={"Username"} placeholder={null} secure={false} />
      <TextInputField text={"Password"} placeholder={null} secure={true} />
      <MainButton onPressFunction={LoginButtonHandler} title={"Login"} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#211e36",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#ebeaf4",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
});

export default Login;
