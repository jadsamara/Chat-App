import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  console.log(name);
  return (
    <View style={styles.container}>
      <View style={styles.circle} />

      <View style={styles.header}>
        <Text style={styles.headertext}>Username</Text>
        <TextInput
          placeholder="Username"
          style={styles.textinput}
          onChangeText={setName}
          value={name}
        />
        <View style={{ marginTop: 64, alignItems: "flex-end" }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ChatScreen", { name: name })}
          >
            <Ionicons name="md-arrow-forward" size={25} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f5f7",
  },

  circle: {
    width: 550,
    height: 550,
    borderRadius: 500 / 2,
    backgroundColor: "#FFF",
    position: "absolute",
    left: -120,
    top: -20,
  },
  header: {
    marginHorizontal: 32,
    marginTop: 200,
  },
  headertext: {
    fontWeight: "800",
    fontSize: 30,
    color: "#514e5a",
  },

  textinput: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bab7c3",
    borderRadius: 30,
    paddingHorizontal: 16,
    fontWeight: "600",
  },

  button: {
    width: 90,
    height: 90,
    borderRadius: 90 / 2,
    backgroundColor: "#9075e3",
    alignItems: "center",
    justifyContent: "center",
  },
});
