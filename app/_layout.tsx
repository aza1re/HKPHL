import React from "react";
import { View, Platform, StatusBar as RNStatusBar } from "react-native";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function RootLayout() {
  const insets = useSafeAreaInsets();

  return (
    <>
      {/* Status bar component for cross-platform */}
      <StatusBar style="light" backgroundColor="#D62828" />

      {/* Custom status bar background for iOS */}
      {Platform.OS === "ios" && (
        <View
          style={{
            height: insets.top,
            backgroundColor: "#D62828",
          }}
        />
      )}

      {/* Custom status bar background for Android */}
      {Platform.OS === "android" && (
        <View
          style={{
            height: RNStatusBar.currentHeight || 0,
            backgroundColor: "#D62828",
          }}
        />
      )}

      <Slot />
    </>
  );
}
