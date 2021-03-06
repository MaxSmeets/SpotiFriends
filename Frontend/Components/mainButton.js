//modules
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const MainButton = (props) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "#26d4d8", borderRadius: 20 }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? "#dddddd" : "#26d4c2" },
        styles.button,
      ]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ebeaf4",
    fontSize: 20,
    margin: 10,
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    marginTop: 20,
  },
});

export default MainButton;
