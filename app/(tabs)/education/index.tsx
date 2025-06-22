import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function HockeyCampsTab() {
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.content}>
        <Text style={styles.tabTitle}>Hockey Camps</Text>
        <Text style={styles.tabDescription}>
          Professional hockey training camps for all skill levels
        </Text>
        <Text style={styles.placeholder}>
          Hockey camp schedules, registration, and training programs will be
          displayed here
        </Text>
      </View>
    </ScrollView>
  );
}

function ShowcasesTab() {
  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.content}>
        <Text style={styles.tabTitle}>Showcases</Text>
        <Text style={styles.tabDescription}>
          Talent showcase events and competitions
        </Text>
        <Text style={styles.placeholder}>
          Showcase events, schedules, and registration information will be
          displayed here
        </Text>
      </View>
    </ScrollView>
  );
}

export default function EducationScreen() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarIndicatorStyle: { backgroundColor: "#007AFF" },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen name="Hockey Camps" component={HockeyCampsTab} />
        <Tab.Screen name="Showcases" component={ShowcasesTab} />
      </Tab.Navigator>
    </View>
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
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e7",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
  },
  tabContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 24,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  tabDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    lineHeight: 22,
  },
  placeholder: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 24,
  },
});
