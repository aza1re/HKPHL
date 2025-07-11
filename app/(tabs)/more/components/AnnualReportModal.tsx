// TODO: have an option to choose the player and year.

import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AnnualReportModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AnnualReportModal({
  visible,
  onClose,
}: AnnualReportModalProps) {
  useEffect(() => {
    if (visible) {
      // Set status bar to dark content when modal is visible
      StatusBar.setBarStyle("dark-content", true);
    } else {
      // Reset status bar to light content when modal is closed
      StatusBar.setBarStyle("light-content", true);
    }
  }, [visible]);

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
          <Text style={styles.modalHeaderTitle}>Annual Report Request</Text>
          <TouchableOpacity onPress={onClose} style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Content */}
        <ScrollView style={styles.modalContent}>
          <View style={styles.contentContainer}>
            <View style={styles.contentSection}>
              <View style={styles.titleContainer}>
                <Ionicons name="document-text" size={28} color="#D62828" />
                <Text style={styles.title}>Full Annual Report</Text>
              </View>
              <Text style={styles.subtitle}>Comprehensive Team Analytics</Text>

              <Text style={styles.description}>
                Our annual report provides detailed insights into your team's
                performance throughout the season. Get access to comprehensive
                statistics, player development metrics, and strategic
                recommendations.
              </Text>

              <View style={styles.featuresList}>
                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                  <Text style={styles.featureText}>
                    Individual player statistics and progress tracking
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                  <Text style={styles.featureText}>
                    Team performance analysis and trends
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                  <Text style={styles.featureText}>
                    Comparative league standings and benchmarks
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                  <Text style={styles.featureText}>
                    Strategic recommendations for improvement
                  </Text>
                </View>

                <View style={styles.featureItem}>
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                  <Text style={styles.featureText}>
                    Professional PDF format for easy sharing
                  </Text>
                </View>
              </View>

              <View style={styles.processingInfo}>
                <Text style={styles.processingTitle}>Report Processing</Text>
                <Text style={styles.processingText}>
                  • Reports are generated within 3-5 business days{"\n"}• You
                  will receive an email notification when ready{"\n"}• Reports
                  cover the current season's complete data{"\n"}• Additional
                  customization options available upon request
                </Text>
              </View>

              <TouchableOpacity style={styles.requestButton}>
                <Text style={styles.requestButtonText}>Submit Request</Text>
              </TouchableOpacity>

              <Text style={styles.footerNote}>
                For questions about the annual report, please contact our
                support team.
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
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: "#CACDD4",
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
    paddingBottom: 10,
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
    marginHorizontal: 10,
    borderRadius: 7,
  },
  contentSection: {
    marginHorizontal: 10,
    marginTop: 15,
    alignItems: "center",
  },
  iconContainer: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginLeft: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 24,
    textAlign: "center",
  },
  featuresList: {
    width: "100%",
    marginBottom: 24,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  featureText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 12,
    flex: 1,
    lineHeight: 20,
  },
  processingInfo: {
    width: "100%",
    backgroundColor: "#F8F9FA",
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  processingTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 8,
  },
  processingText: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  requestButton: {
    backgroundColor: "#F5EF34",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 16,
  },
  requestButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "black",
    textAlign: "center",
  },
  footerNote: {
    fontSize: 12,
    color: "#888",
    textAlign: "center",
    fontStyle: "italic",
  },
});
