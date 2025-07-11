import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const tournaments = [
  {
    id: "1",
    name: "Winter Championship 2025",
    status: "Active",
    participants: 16,
  },
  { id: "2", name: "Spring Classic", status: "Upcoming", participants: 12 },
  {
    id: "3",
    name: "Summer League",
    status: "Registration Open",
    participants: 8,
  },
];

export default function TournamentsScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {tournaments.map((tournament) => (
          <TouchableOpacity
            key={tournament.id}
            style={styles.tournamentCard}
            onPress={() => router.push(`/tournaments/${tournament.id}`)}
          >
            <View style={styles.cardHeader}>
              <Text style={styles.tournamentName}>{tournament.name}</Text>
              <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
            </View>
            <View style={styles.cardInfo}>
              <Text style={styles.status}>{tournament.status}</Text>
              <Text style={styles.participants}>
                {tournament.participants} teams
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 5,
  },
  header: {
    padding: 24,
    backgroundColor: "#f8f9fa",
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
  content: {
    padding: 16,
  },
  tournamentCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e5e7",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  tournamentName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    flex: 1,
  },
  cardInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  status: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "500",
  },
  participants: {
    fontSize: 14,
    color: "#8E8E93",
  },
});
