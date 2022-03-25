//modules
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
  Modal,
  Image,
  StatusBar,
} from "react-native";
//components
import MainButton from "./mainButton";

function UnauthHome({ navigation }) {
  //button handlers
  const toLoginHandler = () => {
    navigation.navigate("login");
  };

  const toRegisterHandler = () => {
    navigation.navigate("register");
  };

  return (
    <View style={styles.body}>
      <StatusBar animated={true} backgroundColor="#000" hidden={false} />
      <Text style={styles.title}>SpotiFriends</Text>
      <Text style={styles.text}>Friendship through music</Text>
      <View style={styles.row}>
        <MainButton onPressFunction={toRegisterHandler} title={"Register"} />
        <MainButton onPressFunction={toLoginHandler} title={"Login"} />
      </View>
      <Image
        style={styles.MainPageLogo}
        source={require("../LogoFinal.png")}
      ></Image>
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
  row: {
    flexDirection: "row",
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
  title: {
    color: "#ebeaf4",
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
    textAlign: "center",
  },
  MainPageLogo: {
    height: 150,
    width: 150,
  },
});

export default UnauthHome;
