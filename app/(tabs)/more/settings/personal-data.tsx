import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function PersonalDataScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Personal Data</Text>
        <Text style={styles.placeholder}>
          Personal data management and privacy settings will be available here
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 16,
    textAlign: "center",
  },
  placeholder: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
  },
});
