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

interface ContactInfoModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function ContactInfoModal({
  visible,
  onClose,
}: ContactInfoModalProps) {
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
          <Text style={styles.modalHeaderTitle}>Contact Information</Text>
          <TouchableOpacity onPress={onClose} style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Content */}
        <ScrollView style={styles.modalContent}>
          <View style={styles.contentContainer}>
            <View style={styles.contentSection}>
              <Text style={styles.sectionTitle}>Get in Touch</Text>
              <Text style={styles.description}>
                We're here to help! Reach out to us through any of the following
                channels:
              </Text>

              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Email:</Text>
                <Text style={styles.contactValue}>info@hkphl.com</Text>
              </View>

              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Phone:</Text>
                <Text style={styles.contactValue}>+852 1234 5678</Text>
              </View>

              <View style={styles.contactItem}>
                <Text style={styles.contactLabel}>Address:</Text>
                <Text style={styles.contactValue}>
                  HKPHL Headquarters{"\n"}
                  123 Hockey Street{"\n"}
                  Central, Hong Kong
                </Text>
              </View>

              <Text style={styles.sectionTitle}>Office Hours</Text>
              <Text style={styles.description}>
                Monday - Friday: 9:00 AM - 6:00 PM{"\n"}
                Saturday: 10:00 AM - 4:00 PM{"\n"}
                Sunday: Closed
              </Text>

              <Text style={styles.description}>
                For urgent matters outside office hours, please email us and
                we'll get back to you as soon as possible.
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
    marginBottom: 8,
    marginTop: 8,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
  contactItem: {
    marginBottom: 12,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: "#333",
    lineHeight: 20,
  },
});
