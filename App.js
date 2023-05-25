import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Bio } from "./pages/Bio";
import Home from "./pages/Home";
import { Orgs } from "./pages/Orgs";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Bio" component={Bio} />
        <Stack.Screen name="Orgs" component={Orgs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
