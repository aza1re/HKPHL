import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

function StandingsTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Standings</Text>
      <Text style={styles.placeholder}>
        Tournament standings will be displayed here
      </Text>
    </View>
  );
}

function ScheduleTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Schedule</Text>
      <Text style={styles.placeholder}>
        Tournament schedule will be displayed here
      </Text>
    </View>
  );
}

function TeamsTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Teams</Text>
      <Text style={styles.placeholder}>
        Tournament teams will be displayed here
      </Text>
    </View>
  );
}

function PlayersTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Players</Text>
      <Text style={styles.placeholder}>
        Tournament players will be displayed here
      </Text>
    </View>
  );
}

export default function TournamentDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Tournament #{id}</Text>
        <Text style={styles.subtitle}>Tournament details and information</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarIndicatorStyle: { backgroundColor: "#007AFF" },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen name="Standings" component={StandingsTab} />
        <Tab.Screen name="Schedule" component={ScheduleTab} />
        <Tab.Screen name="Teams" component={TeamsTab} />
        <Tab.Screen name="Players" component={PlayersTab} />
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
    fontSize: 24,
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
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  tabTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  placeholder: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
  },
});
