import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "./components/Header";

const Tab = createMaterialTopTabNavigator();

function StandingsTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>HKPHL Standings</Text>
      <Text style={styles.placeholder}>
        League standings will be displayed here
      </Text>
    </View>
  );
}

function ScheduleTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Game Schedule</Text>
      <Text style={styles.placeholder}>
        League schedule will be displayed here
      </Text>
    </View>
  );
}

function TeamsTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>Teams</Text>
      <Text style={styles.placeholder}>
        League teams will be displayed here
      </Text>
    </View>
  );
}

function NewsTab() {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.tabTitle}>League News</Text>
      <Text style={styles.placeholder}>
        Latest league news will be displayed here
      </Text>
    </View>
  );
}

export default function LeaguesScreen() {
  return (
    <View style={styles.container}>
      <Header title="Leagues" />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#D52B1E",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarIndicatorStyle: { backgroundColor: "#D52B1E" },
          tabBarLabelStyle: { fontSize: 12, fontWeight: "600" },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen name="Standings" component={StandingsTab} />
        <Tab.Screen name="Schedule" component={ScheduleTab} />
        <Tab.Screen name="Teams" component={TeamsTab} />
        <Tab.Screen name="News" component={NewsTab} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
