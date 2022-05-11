import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Fire";
import { Button } from "react-native-paper";

export const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const onHandleSignup = () => {
    if (email !== "" && password !== "") {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Signup success"))
        .catch((err) => {
          setError(true);
        });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.header}>
        <Text style={styles.headertext}>Create Account!</Text>
        <View style={styles.inputcontainer}>
          <TextInput
            style={styles.textinput}
            onChangeText={setEmail}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
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
          <View style={{ alignItems: "center", marginTop: 10 }}>
            <Text style={{ color: "red" }}>
              {error ? "Use valid Email Address" : ""}
            </Text>
          </View>
          <View style={{ marginTop: 10, alignItems: "center" }}>
            <Button
              icon="lock"
              mode="contained"
              color="#03a9f4"
              onPress={onHandleSignup}
              style={styles.button}
            >
              Sign Up
            </Button>
            <Button
              icon="lock"
              mode="contained"
              color="#03a9f4"
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              Go to log in page
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
    width: 750,
    height: 750,
    borderRadius: 750 / 2,
    borderColor: "#fff",
    backgroundColor: "#bab7c3",
    position: "absolute",
    left: -120,
    top: -100,
  },

  header: {
    marginHorizontal: 32,
    marginTop: 200,
  },

  headertext: {
    fontWeight: "800",
    fontSize: 30,
    color: "#fff",
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
    fontWeight: "600",
    backgroundColor: "#fff",
    opacity: 0.7,
  },

  button: {
    width: "70%",
    marginTop: 10,
  },
});
