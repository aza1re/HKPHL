import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

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
  const tabWidth = width / countries.length;

  return (
    <View style={styles.container}>
      <View style={styles.topBorder} />
      <View style={styles.tabsWrapper}>
        {countries.map((country) => (
          <TouchableOpacity
            key={country}
            style={[styles.tab, { width: tabWidth }]}
            onPress={() => onCountrySelect(country)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.tabText,
                selectedCountry === country && styles.activeTabText,
              ]}
            >
              {country}
            </Text>
            {selectedCountry === country && <View style={styles.underline} />}
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
    width: "50%",
    height: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 1,
    alignSelf: "center",
  },
});
