import React, { useState, useContext, useEffect } from "react";
import { Navigator } from "./src/navigation/navigator";
import { AuthenticatedUserProvider } from "./src/service/Authenticated";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs([
    "Warning: Async Storage has been extracted from react-native core",
  ]);
  return (
    <AuthenticatedUserProvider>
      <Navigator />
    </AuthenticatedUserProvider>
  );
}
