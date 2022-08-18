import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes/Router";

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Router />
      </TailwindProvider>
    </NavigationContainer>
  );
}
