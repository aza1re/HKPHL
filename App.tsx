import "react-native-gesture-handler";
import React from "react";
import { Slot } from "expo-router";
import { AdminProvider } from "./context/AdminContext";

export default function App() {
  return (
    <AdminProvider>
      <Slot />
    </AdminProvider>
  );
}
