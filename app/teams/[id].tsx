import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TeamDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.teamIcon}>
          <Ionicons name="shield" size={48} color="#007AFF" />
        </View>
        <Text style={styles.title}>Team Details</Text>
        <Text style={styles.subtitle}>Team #{id}</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.placeholder}>
          Detailed team information, roster, and statistics will be available
          here
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
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e7",
  },
  teamIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#f0f8ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
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
