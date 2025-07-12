import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import Header from "./components/Header";
import EducationTabs from "./components/EducationTabs";
import EducationCard from "./components/EducationCard";
import { educationData, EducationItem } from "./data/education";

function HockeyCampsContent() {
  const campData = educationData.filter((item) => item.type === "camp");

  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.content}>
        {campData.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}

function ShowcasesContent() {
  const showcaseData = educationData.filter((item) => item.type === "showcase");

  return (
    <ScrollView style={styles.contentContainer}>
      <View style={styles.content}>
        {showcaseData.map((item) => (
          <EducationCard key={item.id} item={item} />
        ))}
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
    padding: 16,
  },
});
