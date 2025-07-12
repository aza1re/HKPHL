import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

interface EducationTabsProps {
  activeTab: string;
  onTabPress: (tab: string) => void;
}

const tabs = [
  { id: "camps", label: "Hockey Camps" },
  { id: "showcases", label: "Showcases" },
];

export default function EducationTabs({
  activeTab,
  onTabPress,
}: EducationTabsProps) {
  const tabWidth = width / tabs.length;

  return (
    <View style={styles.container}>
      <View style={styles.topBorder} />
      <View style={styles.tabsWrapper}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, { width: tabWidth }]}
            onPress={() => onTabPress(tab.id)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab.id && styles.activeTabText,
              ]}
            >
              {tab.label}
            </Text>
            {activeTab === tab.id && <View style={styles.underline} />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D52B1E",
    position: "relative",
  },
  topBorder: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 0.5,
    backgroundColor: "#F0F1F5",
  },
  tabsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    position: "relative",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#FFFFFF",
    textAlign: "center",
  },
  activeTabText: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  underline: {
    position: "absolute",
    bottom: 6,
    width: "55%",
    height: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 1,
    alignSelf: "center",
  },
});
