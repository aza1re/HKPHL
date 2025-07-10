import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  tournamentDetails,
  getStatusColor,
  TournamentDetails,
} from "./data/tournaments";

const Tab = createMaterialTopTabNavigator();

function OverviewTab({ tournament }: { tournament: TournamentDetails }) {
  return (
    <ScrollView style={styles.tabContainer}>
      <Image
        source={{ uri: tournament.image }}
        style={styles.tournamentImage}
      />

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Tournament Information</Text>

        <View style={styles.infoRow}>
          <Ionicons name="calendar" size={20} color="#D62828" />
          <Text style={styles.infoText}>{tournament.date}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="location" size={20} color="#D62828" />
          <Text style={styles.infoText}>{tournament.location}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="people" size={20} color="#D62828" />
          <Text style={styles.infoText}>{tournament.participants} teams</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="trophy" size={20} color="#D62828" />
          <Text
            style={[
              styles.infoText,
              { color: getStatusColor(tournament.status) },
            ]}
          >
            {tournament.status}
          </Text>
        </View>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.description}>{tournament.description}</Text>
      </View>

      <View style={styles.infoSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.tagsContainer}>
          {tournament.tags.map((tag, index) => (
            <View key={index} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

function StandingsTab() {
  const standings = [
    { rank: 1, team: "Hong Kong Dragons", points: 15, wins: 5, losses: 0 },
    { rank: 2, team: "Seoul Warriors", points: 12, wins: 4, losses: 1 },
    { rank: 3, team: "Tokyo Ice", points: 9, wins: 3, losses: 2 },
    { rank: 4, team: "Beijing Blades", points: 6, wins: 2, losses: 3 },
  ];

  return (
    <ScrollView style={styles.tabContainer}>
      <View style={styles.standingsHeader}>
        <Text style={styles.standingsHeaderText}>Rank</Text>
        <Text style={styles.standingsHeaderText}>Team</Text>
        <Text style={styles.standingsHeaderText}>Pts</Text>
        <Text style={styles.standingsHeaderText}>W</Text>
        <Text style={styles.standingsHeaderText}>L</Text>
      </View>
      {standings.map((team, index) => (
        <View key={index} style={styles.standingsRow}>
          <Text style={styles.standingsRank}>{team.rank}</Text>
          <Text style={styles.standingsTeam}>{team.team}</Text>
          <Text style={styles.standingsPoints}>{team.points}</Text>
          <Text style={styles.standingsWins}>{team.wins}</Text>
          <Text style={styles.standingsLosses}>{team.losses}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function ScheduleTab() {
  const matches = [
    {
      date: "Apr 28",
      time: "10:00",
      team1: "Hong Kong Dragons",
      team2: "Seoul Warriors",
      venue: "Rink A",
    },
    {
      date: "Apr 28",
      time: "14:00",
      team1: "Tokyo Ice",
      team2: "Beijing Blades",
      venue: "Rink B",
    },
    {
      date: "Apr 29",
      time: "10:00",
      team1: "Hong Kong Dragons",
      team2: "Tokyo Ice",
      venue: "Rink A",
    },
    {
      date: "Apr 29",
      time: "14:00",
      team1: "Seoul Warriors",
      team2: "Beijing Blades",
      venue: "Rink B",
    },
  ];

  return (
    <ScrollView style={styles.tabContainer}>
      {matches.map((match, index) => (
        <View key={index} style={styles.matchCard}>
          <View style={styles.matchHeader}>
            <Text style={styles.matchDate}>{match.date}</Text>
            <Text style={styles.matchTime}>{match.time}</Text>
          </View>
          <View style={styles.matchTeams}>
            <Text style={styles.teamName}>{match.team1}</Text>
            <Text style={styles.vs}>vs</Text>
            <Text style={styles.teamName}>{match.team2}</Text>
          </View>
          <Text style={styles.matchVenue}>{match.venue}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function TeamsTab() {
  const teams = [
    { name: "Hong Kong Dragons", country: "Hong Kong", players: 18 },
    { name: "Seoul Warriors", country: "Korea", players: 20 },
    { name: "Tokyo Ice", country: "Japan", players: 19 },
    { name: "Beijing Blades", country: "China", players: 17 },
  ];

  return (
    <ScrollView style={styles.tabContainer}>
      {teams.map((team, index) => (
        <TouchableOpacity key={index} style={styles.teamCard}>
          <View style={styles.teamInfo}>
            <Text style={styles.teamName}>{team.name}</Text>
            <Text style={styles.teamCountry}>{team.country}</Text>
          </View>
          <Text style={styles.teamPlayers}>{team.players} players</Text>
          <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default function TournamentDetailsScreen() {
  const { id } = useLocalSearchParams();
  const tournament = tournamentDetails[id as string];

  if (!tournament) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Tournament not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#D62828",
          tabBarInactiveTintColor: "#8E8E93",
          tabBarIndicatorStyle: { backgroundColor: "#D62828" },
          tabBarLabelStyle: { fontSize: 14, fontWeight: "600" },
          tabBarStyle: { backgroundColor: "#fff" },
        }}
      >
        <Tab.Screen
          name="Overview"
          children={() => <OverviewTab tournament={tournament} />}
        />
        <Tab.Screen name="Standings" component={StandingsTab} />
        <Tab.Screen name="Schedule" component={ScheduleTab} />
        <Tab.Screen name="Teams" component={TeamsTab} />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  errorText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginTop: 50,
  },
  tabContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  tournamentImage: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  infoSection: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    color: "#666",
    marginLeft: 12,
  },
  description: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "#333",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
  standingsHeader: {
    flexDirection: "row",
    backgroundColor: "#f8f9fa",
    padding: 16,
    marginHorizontal: 16,
    marginTop: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  standingsHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    textAlign: "center",
  },
  standingsRow: {
    flexDirection: "row",
    padding: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    backgroundColor: "#fff",
  },
  standingsRank: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D62828",
    flex: 1,
    textAlign: "center",
  },
  standingsTeam: {
    fontSize: 16,
    color: "#333",
    flex: 1,
    textAlign: "center",
  },
  standingsPoints: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    textAlign: "center",
  },
  standingsWins: {
    fontSize: 16,
    color: "#28a745",
    flex: 1,
    textAlign: "center",
  },
  standingsLosses: {
    fontSize: 16,
    color: "#dc3545",
    flex: 1,
    textAlign: "center",
  },
  matchCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  matchHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  matchDate: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#D62828",
  },
  matchTime: {
    fontSize: 16,
    color: "#666",
  },
  matchTeams: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  teamName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    flex: 1,
  },
  vs: {
    fontSize: 14,
    color: "#666",
    marginHorizontal: 8,
  },
  matchVenue: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
  teamCard: {
    backgroundColor: "#fff",
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  teamInfo: {
    flex: 1,
  },
  teamCountry: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  teamPlayers: {
    fontSize: 14,
    color: "#666",
    marginRight: 8,
  },
});
