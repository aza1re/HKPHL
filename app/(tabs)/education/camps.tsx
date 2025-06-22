import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function CampsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Hockey Camps</Text>
        <Text style={styles.subtitle}>
          Professional training programs for all skill levels
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>
          Hockey camp information and registration will be available here
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
  header: {
    padding: 24,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  content: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  placeholder: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
  },
});
