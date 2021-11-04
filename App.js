import { StatusBar } from "expo-status-bar";
import React from "react";
import Main from "./src/navigation/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import {
  Inter_500Medium,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import { setCustomText } from "react-native-global-props";
import { navigationRef } from "./src/navigation/navigation";

export default function App() {
  const [loaded] = useFonts({
    medium: Inter_500Medium,
    normal: Inter_600SemiBold,
    bold: Inter_700Bold,
  });

  if (!loaded) {
    return null;
  }
  setCustomText({ style: { fontFamily: "medium" } });

  return (
    <NavigationContainer ref={navigationRef}>
      <Main />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
