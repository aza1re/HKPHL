import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import AboutUsModal from "./components/AboutUsModal";
import ContactInfoModal from "./components/ContactInfoModal";
import FAQModal from "./components/FAQModal";
import NavigationForTeamsModal from "./components/NavigationForTeamsModal";
import AnnualReportModal from "./components/AnnualReportModal";

export default function MoreScreen() {
  const router = useRouter();
  const [aboutUsModalVisible, setAboutUsModalVisible] = useState(false);
  const [contactInfoModalVisible, setContactInfoModalVisible] = useState(false);
  const [faqModalVisible, setFaqModalVisible] = useState(false);
  const [navigationModalVisible, setNavigationModalVisible] = useState(false);
  const [annualReportModalVisible, setAnnualReportModalVisible] =
    useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Team Registration Section */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => router.push("/more/registration/hkphl" as any)}
          >
            <View style={styles.iconWrapper}>
              <MaterialIcons name="edit-square" size={25} color="black" />
            </View>
            <Text style={styles.rowText}>Team registration</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>

        {/* Chatbot Section */}
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.row}
            onPress={() => router.push("/more/ai-chatbot" as any)}
          >
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name="robot-happy"
                size={25}
                color="black"
              />
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
            onPress={() => setAboutUsModalVisible(true)}
          >
            <Text style={styles.simpleRowText}>What do we do?</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.simpleRow}
            onPress={() => setContactInfoModalVisible(true)}
          >
            <Text style={styles.simpleRowText}>Contact information</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.simpleRow}
            onPress={() => setFaqModalVisible(true)}
          >
            <Text style={styles.simpleRowText}>FAQ</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity
            style={styles.simpleRow}
            onPress={() => setNavigationModalVisible(true)}
          >
            <Text style={styles.simpleRowText}>Navigation for teams</Text>
            <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
          </TouchableOpacity>
        </View>

        {/* Full Annual Report Section */}
        <View style={styles.reportCard}>
          <View style={styles.reportHeader}>
            <Ionicons name="document-lock" size={26} color="black" />
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
            onPress={() => setAnnualReportModalVisible(true)}
          >
            <Text style={styles.requestButtonText}>Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modals */}
      <AboutUsModal
        visible={aboutUsModalVisible}
        onClose={() => setAboutUsModalVisible(false)}
      />
      <ContactInfoModal
        visible={contactInfoModalVisible}
        onClose={() => setContactInfoModalVisible(false)}
      />
      <FAQModal
        visible={faqModalVisible}
        onClose={() => setFaqModalVisible(false)}
      />
      <NavigationForTeamsModal
        visible={navigationModalVisible}
        onClose={() => setNavigationModalVisible(false)}
      />
      <AnnualReportModal
        visible={annualReportModalVisible}
        onClose={() => setAnnualReportModalVisible(false)}
      />
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
    paddingTop: 15,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 7,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    shadowOffset: { width: 0, height: 0 },
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
    fontSize: 18,
    color: "black",
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E7",
    marginLeft: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 5,
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
    fontSize: 18,
    color: "black",
    flex: 1,
  },
  reportCard: {
    backgroundColor: "white",
    borderRadius: 7,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    shadowOffset: { width: 0, height: 0 },
  },
  reportHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  reportTitle: {
    fontSize: 18,
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
    backgroundColor: "#F5EF34",
    borderRadius: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  requestButtonText: {
    fontSize: 16,
    fontWeight: 600,
    color: "black",
  },
});
