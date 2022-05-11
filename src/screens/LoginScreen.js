import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Fire";
import { Button } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success"))
        .catch((err) => console.log(`Login err: ${err}`));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.header}>
        <Text style={styles.headertext}>Username</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.textinput}
            onChangeText={setEmail}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={true}
            value={email}
          />
          <TextInput
            style={styles.textinput}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={setPassword}
          />
          <View style={{ marginTop: 10 }}>
            <Button
              icon="camera"
              mode="contained"
              onPress={() => console.log("Pressed")}
            >
              Press me
            </Button>
          </View>
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

  inputcontainer: {
    marginTop: 32,
  },

  textinput: {
    marginTop: 20,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#bab7c3",
    borderRadius: 10,
    paddingHorizontal: 16,
    fontWeight: "800",
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
