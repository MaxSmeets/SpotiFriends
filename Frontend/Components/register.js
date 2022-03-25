//modules
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Button,
  Image,
  Pressable,
  Text,
  ScrollView,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
//components
import TextInputField from "./textInputField";
import MainButton from "./mainButton";

function Register({ navigation }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [image, setImage] = useState(null);

  function Register() {
    if (password.text == confirm.text) {
      setPasswordsMatch(true);
    }
    if (passwordsMatch) {
      console.log("e-mail: ", email);
      console.log("username: ", username);
      console.log("password: ", password);
      navigation.navigate("dashboard");
    } else {
      console.log("passwords do not match!");
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <TextInputField
          text={"E-mail"}
          placeholder={"example@example.com"}
          secure={false}
          keyboard={"email-address"}
          setValue={(value) => setEmail(value)}
        />
        <TextInputField
          text={"Username"}
          placeholder={null}
          secure={false}
          keyboard={"default"}
          setValue={(value) => setUsername(value)}
        />
        <TextInputField
          text={"Password"}
          placeholder={null}
          secure={true}
          keyboard={"default"}
          setValue={(value) => setPassword(value)}
        />
        <TextInputField
          text={"Confirm password"}
          placeholder={null}
          secure={true}
          keyboard={"default"}
          setValue={(value) => setConfirm(value)}
        />
        <View style={styles.row}>
          <Pressable style={styles.profileButton} onPress={pickImage}>
            {image == null ? (
              <Image
                source={require("../avatarPlaceholder.png")}
                style={styles.image}
              />
            ) : (
              image && <Image source={{ uri: image }} style={styles.image} />
            )}
          </Pressable>
        </View>

        <MainButton onPressFunction={Register} title={"Register"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#211e36",
    paddingTop: "10%",
  },
  container: {
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
  profileButton: {
    backgroundColor: "transparent",
    margin: 10,
  },
  row: {
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 150,
    width: 150,
    borderColor: "#5f5f7a",
    borderWidth: 1,
    borderRadius: 90,
  },
});

export default Register;
