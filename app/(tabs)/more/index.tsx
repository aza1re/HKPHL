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

export default function MoreScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Team Registration + Chatbot Section */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => router.push("/more/registration/hkphl" as any)}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name="create" size={20} color="black" />
            </View>
            <Text style={styles.rowText}>Team registration</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.row}
            onPress={() => router.push("/more/ai-chatbot" as any)}
          >
            <View style={styles.iconWrapper}>
              <Ionicons name="sparkles" size={20} color="black" />
            </View>
            <Text style={styles.rowText}>Chatbot – ultimate guide</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>

        {/* About Us Section */}
        <Text style={styles.sectionTitle}>About Us</Text>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.simpleRow}
            onPress={() => router.push("/more/about-us" as any)}
          >
            <Text style={styles.simpleRowText}>What do we do?</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.simpleRow}
            onPress={() => router.push("/more/about-us" as any)}
          >
            <Text style={styles.simpleRowText}>Contact information</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.simpleRow}
            onPress={() => router.push("/more/about-us" as any)}
          >
            <Text style={styles.simpleRowText}>FAQ</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.simpleRow}
            onPress={() => router.push("/more/about-us" as any)}
          >
            <Text style={styles.simpleRowText}>Navigation for teams</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>

        {/* Full Annual Report Section */}
        <View style={styles.reportCard}>
          <View style={styles.reportHeader}>
            <Ionicons name="document-text" size={24} color="black" />
            <Text style={styles.reportTitle}>
              Full annual report for HKPHL players
            </Text>
          </View>

          <Text style={styles.reportDescription}>
            Get an ordered, full report for your players. Gain valuable insights
            into your team play. All important metrics are present.
          </Text>

          <TouchableOpacity
            style={styles.requestButton}
            onPress={() => router.push("/more/annual-report" as any)}
          >
            <Text style={styles.requestButtonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  rowText: {
    fontSize: 16,
    fontWeight: "500",
    color: "black",
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E7",
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 20,
    marginTop: 30,
    marginBottom: 10,
  },
  simpleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 48,
  },
  simpleRowText: {
    fontSize: 16,
    color: "black",
    flex: 1,
  },
  reportCard: {
    backgroundColor: "white",
    borderRadius: 12,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reportHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginLeft: 8,
    flex: 1,
  },
  reportDescription: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
    marginBottom: 16,
  },
  requestButton: {
    backgroundColor: "#FFD600",
    borderRadius: 12,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  requestButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});
