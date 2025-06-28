import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";

interface NavigationForTeamsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function NavigationForTeamsModal({
  visible,
  onClose,
}: NavigationForTeamsModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        {/* Modal Header */}
        <View style={styles.modalHeader}>
          <View style={styles.headerSpacer} />
          <Text style={styles.modalHeaderTitle}>Navigation for Teams</Text>
          <TouchableOpacity onPress={onClose} style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Content */}
        <ScrollView style={styles.modalContent}>
          <View style={styles.contentContainer}>
            <View style={styles.contentSection}>
              <Text style={styles.sectionTitle}>Team Management Guide</Text>

              <View style={styles.guideItem}>
                <Text style={styles.stepNumber}>1.</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Team Registration</Text>
                  <Text style={styles.stepDescription}>
                    Start by registering your team in the "Team registration"
                    section. Complete all required information including team
                    name, division, and player roster.
                  </Text>
                </View>
              </View>

              <View style={styles.guideItem}>
                <Text style={styles.stepNumber}>2.</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>View Leagues</Text>
                  <Text style={styles.stepDescription}>
                    Navigate to the "Leagues" tab to see all available leagues,
                    standings, and your team's current position in the division.
                  </Text>
                </View>
              </View>

              <View style={styles.guideItem}>
                <Text style={styles.stepNumber}>3.</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Tournament Participation</Text>
                  <Text style={styles.stepDescription}>
                    Check the "Tournaments" section regularly for upcoming
                    tournaments. Register early as spots fill up quickly.
                  </Text>
                </View>
              </View>

              <View style={styles.guideItem}>
                <Text style={styles.stepNumber}>4.</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Team Profile</Text>
                  <Text style={styles.stepDescription}>
                    Manage your team profile by going to "Teams" and selecting
                    your team. Update player information, statistics, and team
                    photos.
                  </Text>
                </View>
              </View>

              <View style={styles.guideItem}>
                <Text style={styles.stepNumber}>5.</Text>
                <View style={styles.stepContent}>
                  <Text style={styles.stepTitle}>Education Resources</Text>
                  <Text style={styles.stepDescription}>
                    Access training materials, coaching tips, and skill
                    development resources in the "Education" section.
                  </Text>
                </View>
              </View>

              <Text style={styles.sectionTitle}>Quick Tips</Text>
              <Text style={styles.description}>
                • Keep your team roster updated throughout the season{"\n"}•
                Check notifications regularly for schedule changes{"\n"}• Use
                the annual report feature to track team progress{"\n"}• Contact
                support if you need help with any features
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: "#F7F7F7",
  },
  headerSpacer: {
    width: 50,
  },
  modalHeaderTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flex: 1,
    textAlign: "center",
    marginBottom: 10,
  },
  doneButton: {
    paddingBottom: 5,
    paddingHorizontal: 8,
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#D62828",
  },
  modalContent: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 7,
  },
  contentSection: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 16,
    marginTop: 8,
  },
  guideItem: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#D62828",
    marginRight: 12,
    marginTop: 2,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
  },
  stepDescription: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
});
