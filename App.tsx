import "react-native-gesture-handler";
import React from "react";
import { Slot } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { AdminProvider } from "./context/AdminContext";

// Prevent the splash screen from auto-hiding
SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <AdminProvider>
      <Slot />
    </AdminProvider>
  );
}
