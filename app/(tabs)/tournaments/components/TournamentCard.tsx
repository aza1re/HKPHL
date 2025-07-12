import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useRouter } from "expo-router";
import { Tournament } from "../data/tournaments";
import { useFonts, BakbakOne_400Regular } from "@expo-google-fonts/bakbak-one";

const { width } = Dimensions.get("window");

interface TournamentCardProps {
  tournament: Tournament;
}

export default function TournamentCard({ tournament }: TournamentCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/tournaments/${tournament.id}`)}
      activeOpacity={0.7}
    >
      <View style={styles.mainContent}>
        <Image source={{ uri: tournament.image }} style={styles.image} />
        <View style={styles.textContent}>
          <Text style={styles.title} numberOfLines={1}>
            {tournament.title}
          </Text>
          <Text style={styles.subtitle} numberOfLines={2}>
            {tournament.subtitle}
          </Text>
          <Text style={styles.date}>{tournament.date}</Text>
        </View>
      </View>
      <View style={styles.tagsContainer}>
        {tournament.tags.map((tag, index) => (
          <View key={index} style={styles.tag}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    marginBottom: 16,
    flexDirection: "column",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: "hidden",
  },
  mainContent: {
    flexDirection: "row",
    padding: 16,
  },
  image: {
    width: 120,
    height: 90,
    borderRadius: 6,
    backgroundColor: "#8B8B8B",
    marginRight: 16,
  },
  textContent: {
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 21,
    color: "#D52B1E",
    marginTop: 2,
    lineHeight: 22,
    fontFamily: "BakbakOne_400Regular",
  },
  subtitle: {
    fontSize: 15,
    color: "#231716",
    fontWeight: "700",
    marginBottom: 10,
  },
  date: {
    fontSize: 15,
    color: "#231716",
    fontWeight: "500",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 6,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  tag: {
    backgroundColor: "#231716",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
