import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F3F4F6", // bg-gray-100
  },
  title: {
    color: "#3B82F6", // text-blue-500
    fontSize: 20, // text-xl
    fontWeight: "600", // font-semibold
  },
});

