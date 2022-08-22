import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./src/routes/Router";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <NavigationContainer>
      <ReduxProvider store={store}>
        <TailwindProvider>
          <Router />
        </TailwindProvider>
      </ReduxProvider>
    </NavigationContainer>
  );
}
