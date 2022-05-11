import { LoginScreen } from "./src/screens/LoginScreen";
import { ChatScreen } from "./src/screens/ChatScreen";
import { Signup } from "./src/screens/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Chat"
          component={ChatScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name="Signup"
          component={Signup}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
