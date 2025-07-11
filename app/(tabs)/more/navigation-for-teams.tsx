import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function NavigationForTeamsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header with Exit Button */}
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <Text style={styles.headerTitle}>Navigation for Teams</Text>
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => router.back()}
        >
          <View style={styles.roundXButton}>
            <Ionicons name="close" size={17} color="#000" />
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Team Management Guide</Text>

            <View style={styles.guideItem}>
              <Text style={styles.stepNumber}>1.</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Team Registration</Text>
                <Text style={styles.stepDescription}>
                  Navigate to More {"->"} Team Registration to fill out the team
                  registration form. You'll need basic information for all
                  players, coach contacts, and team details.
                </Text>
              </View>
            </View>

            <View style={styles.guideItem}>
              <Text style={styles.stepNumber}>2.</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>League Selection</Text>
                <Text style={styles.stepDescription}>
                  Browse available leagues under the Leagues tab. Filter by age
                  group, skill level, and location to find the right fit for
                  your team.
                </Text>
              </View>
            </View>

            <View style={styles.guideItem}>
              <Text style={styles.stepNumber}>3.</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Schedule Management</Text>
                <Text style={styles.stepDescription}>
                  Once registered, your team schedule will appear in the team
                  profile. Add games to your calendar and set reminders.
                </Text>
              </View>
            </View>

            <View style={styles.guideItem}>
              <Text style={styles.stepNumber}>4.</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Player Management</Text>
                <Text style={styles.stepDescription}>
                  Team managers can view player stats, attendance, and
                  performance metrics through their team dashboard.
                </Text>
              </View>
            </View>

            <View style={styles.guideItem}>
              <Text style={styles.stepNumber}>5.</Text>
              <View style={styles.stepContent}>
                <Text style={styles.stepTitle}>Tournament Entry</Text>
                <Text style={styles.stepDescription}>
                  Browse upcoming tournaments in the Tournaments tab. Register
                  your team directly through the app for special events.
                </Text>
              </View>
            </View>

            <Text style={styles.noteText}>
              For additional help, contact our support team using the
              information in the Contact Information section.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 5,
    backgroundColor: "#F7F7F7",
  },
  headerSpacer: {
    width: 28,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flex: 1,
    textAlign: "center",
  },
  exitButton: {
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  roundXButton: {
    width: 25,
    height: 25,
    borderRadius: 14,
    backgroundColor: "#EEEEEE",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  scrollContent: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 7,
  },
  contentSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 16,
  },
  guideItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: "600",
    color: "#D62828",
    width: 24,
    marginRight: 12,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 15,
    color: "#333",
    lineHeight: 21,
  },
  noteText: {
    fontSize: 15,
    color: "#666",
    lineHeight: 20,
    fontStyle: "italic",
    marginTop: 16,
  },
});
