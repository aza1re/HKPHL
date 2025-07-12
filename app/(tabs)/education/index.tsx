import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "./components/Header";
import EducationTabs from "./components/EducationTabs";

function HockeyCampsContent() {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Hockey Camps</Text>
        <Text style={styles.contentDescription}>
          Professional hockey training camps for all skill levels
        </Text>
        <Text style={styles.placeholder}>
          Hockey camp schedules, registration, and training programs will be
          displayed here
        </Text>
      </View>
    </ScrollView>
  );
}

function ShowcasesContent() {
  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.content}>
        <Text style={styles.contentTitle}>Showcases</Text>
        <Text style={styles.contentDescription}>
          Talent showcase events and competitions
        </Text>
        <Text style={styles.placeholder}>
          Showcase events, schedules, and registration information will be
          displayed here
        </Text>
      </View>
    </ScrollView>
  );
}

export default function EducationScreen() {
  const [activeTab, setActiveTab] = useState("camps");

  const handleFilterPress = () => {
    // Filter functionality can be implemented here
    console.log("Filter pressed in Education tab");
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "camps":
        return <HockeyCampsContent />;
      case "showcases":
        return <ShowcasesContent />;
      default:
        return <HockeyCampsContent />;
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Education" onFilterPress={handleFilterPress} />
      <EducationTabs activeTab={activeTab} onTabPress={handleTabPress} />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 24,
  },
  contentTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
  },
  contentDescription: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    lineHeight: 22,
  },
  placeholder: {
    fontSize: 16,
    color: "#8E8E93",
    textAlign: "center",
    lineHeight: 24,
  },
});
