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

const favouriteTeams = [
  {
    id: "1",
    name: "Hong Kong Dragons",
    league: "HKPHL",
    division: "Division A",
  },
  { id: "2", name: "Kowloon Knights", league: "HKPHL", division: "Division B" },
  { id: "3", name: "Island Wolves", league: "HKPHL", division: "Division A" },
];

export default function FavouritesScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Favourite Teams</Text>

        {favouriteTeams.map((team) => (
          <TouchableOpacity
            key={team.id}
            style={styles.teamCard}
            onPress={() => router.push(`/teams/${team.id}`)}
          >
            <View style={styles.teamIcon}>
              <Ionicons name="shield" size={24} color="#007AFF" />
            </View>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>{team.name}</Text>
              <Text style={styles.teamDetails}>
                {team.league} • {team.division}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>
        ))}

        {favouriteTeams.length === 0 && (
          <View style={styles.emptyState}>
            <Ionicons name="heart-outline" size={48} color="#8E8E93" />
            <Text style={styles.emptyText}>No favourite teams yet</Text>
            <Text style={styles.emptySubtext}>
              Add teams to your favourites to see them here
            </Text>
          </View>
        )}
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
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 16,
  },
  teamCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e5e7",
    flexDirection: "row",
    alignItems: "center",
  },
  teamIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f0f8ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  teamInfo: {
    flex: 1,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 4,
  },
  teamDetails: {
    fontSize: 14,
    color: "#666",
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 48,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#8E8E93",
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: "#8E8E93",
    textAlign: "center",
  },
});
