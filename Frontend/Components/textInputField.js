//modules
import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const TextInputField = (props) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{props.text}</Text>
      <TextInput
        keyboardType={props.keyboard}
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor={"#aaa"}
        secureTextEntry={props.secure}
        onChangeText={props.setValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ebeaf4",
    fontSize: 20,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    backgroundColor: "#5f5f7a",
    paddingLeft: 10,
    color: "#ebeaf4",
    width: "100%",
    height: 50,
    alignItems: "center",
    borderRadius: 5,
    margin: 5,
  },
  view: {
    backgroundColor: "transparent",
    width: "70%",
    alignItems: "center",
  },
});

export default TextInputField;
