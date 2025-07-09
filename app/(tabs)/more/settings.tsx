import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function SettingsScreen() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const renderNotificationsSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Notification Settings</Text>
      <Text style={styles.sectionDescription}>
        Notification preferences and settings will be available here
      </Text>
    </View>
  );

  const renderPersonalDataSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Personal Data</Text>
      <Text style={styles.sectionDescription}>
        Personal data management and privacy settings will be available here
      </Text>
    </View>
  );

  const renderPreferencesSection = () => (
    <View style={styles.sectionContent}>
      <Text style={styles.sectionTitle}>Preferences</Text>
      <Text style={styles.sectionDescription}>
        App preferences and customization settings will be available here
      </Text>
    </View>
  );

  const renderMainSettings = () => (
    <View style={styles.contentContainer}>
      <TouchableOpacity
        style={styles.settingsRow}
        onPress={() => setActiveSection("notifications")}
      >
        <View style={styles.iconWrapper}>
          <Ionicons name="notifications" size={20} color="#000" />
        </View>
        <Text style={styles.settingsText}>Notifications</Text>
        <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.settingsRow}
        onPress={() => setActiveSection("personal-data")}
      >
        <View style={styles.iconWrapper}>
          <MaterialIcons name="person" size={20} color="#000" />
        </View>
        <Text style={styles.settingsText}>Personal Data</Text>
        <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
      </TouchableOpacity>

      <View style={styles.divider} />

      <TouchableOpacity
        style={styles.settingsRow}
        onPress={() => setActiveSection("preferences")}
      >
        <View style={styles.iconWrapper}>
          <MaterialIcons name="tune" size={20} color="#000" />
        </View>
        <Text style={styles.settingsText}>Preferences</Text>
        <Ionicons name="chevron-forward" size={20} color="#8E8E93" />
      </TouchableOpacity>
    </View>
  );

  const renderBackButton = () => (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => setActiveSection(null)}
    >
      <Ionicons name="chevron-back" size={20} color="#000" />
      <Text style={styles.backButtonText}>Back to Settings</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header with Exit Button */}
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <Text style={styles.headerTitle}>
          {activeSection === "notifications"
            ? "Notifications"
            : activeSection === "personal-data"
            ? "Personal Data"
            : activeSection === "preferences"
            ? "Preferences"
            : "Settings"}
        </Text>
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
        {activeSection && renderBackButton()}

        {activeSection === null && renderMainSettings()}
        {activeSection === "notifications" && renderNotificationsSection()}
        {activeSection === "personal-data" && renderPersonalDataSection()}
        {activeSection === "preferences" && renderPreferencesSection()}
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
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 7,
  },
  settingsRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  settingsText: {
    fontSize: 16,
    color: "black",
    flex: 1,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E7",
    marginLeft: 20,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 10,
    marginBottom: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: "#D62828",
    marginLeft: 5,
  },
  sectionContent: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 7,
    padding: 24,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 16,
    textAlign: "center",
  },
  sectionDescription: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 22,
  },
});
