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

export default function ContactInfoScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header with Exit Button */}
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <Text style={styles.headerTitle}>Contact Information</Text>
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
              For urgent matters outside office hours, please email us and we'll
              get back to you as soon as possible.
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
  contactItem: {
    marginBottom: 16,
  },
  contactLabel: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});
