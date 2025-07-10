import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import Header from "./components/Header";
import CountryTabs from "./components/CountryTabs";
import TournamentCard from "./components/TournamentCard";
import { tournaments, countries } from "./data/tournaments";

export default function TournamentsScreen() {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredTournaments = tournaments.filter(
    (tournament) =>
      selectedCountry === "All" || tournament.country === selectedCountry
  );

  const handleFilterPress = () => {
    Alert.alert(
      "Filter Options",
      "Advanced filtering options will be available here",
      [{ text: "OK", style: "default" }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Tournaments"
        onFilterPress={handleFilterPress}
        showFilter={true}
      />

      <CountryTabs
        countries={countries}
        selectedCountry={selectedCountry}
        onCountrySelect={setSelectedCountry}
      />

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {filteredTournaments.map((tournament) => (
          <TournamentCard key={tournament.id} tournament={tournament} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
});
