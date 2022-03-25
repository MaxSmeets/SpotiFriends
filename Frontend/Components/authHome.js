//modules
import { View, Text, ScrollView, StyleSheet } from "react-native";

function AuthHome() {
  return (
    <ScrollView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.text}>Dashboard</Text>
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

export default AuthHome;
