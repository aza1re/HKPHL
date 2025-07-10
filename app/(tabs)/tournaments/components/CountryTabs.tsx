import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

interface CountryTabsProps {
  countries: string[];
  selectedCountry: string;
  onCountrySelect: (country: string) => void;
}

export default function CountryTabs({
  countries,
  selectedCountry,
  onCountrySelect,
}: CountryTabsProps) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {countries.map((country) => (
          <TouchableOpacity
            key={country}
            style={[
              styles.tab,
              selectedCountry === country && styles.activeTab,
            ]}
            onPress={() => onCountrySelect(country)}
            activeOpacity={0.7}
          >
            <Text
              style={[
                styles.tabText,
                selectedCountry === country && styles.activeTabText,
              ]}
            >
              {country}
            </Text>
            {selectedCountry === country && <View style={styles.indicator} />}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#D62828",
    paddingBottom: 16,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 8,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTab: {
    backgroundColor: "#FFFFFF",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },
  activeTabText: {
    color: "#D62828",
  },
  indicator: {
    position: "absolute",
    bottom: -8,
    width: 6,
    height: 6,
    backgroundColor: "#D62828",
    borderRadius: 3,
  },
});
