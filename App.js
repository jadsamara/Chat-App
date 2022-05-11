import React, { useState, useContext, useEffect } from "react";
import { Navigator } from "./src/navigation/navigator";
import { AuthenticatedUserProvider } from "./src/service/Authenticated";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  return (
    <AuthenticatedUserProvider>
      <Navigator />
    </AuthenticatedUserProvider>
  );
}
