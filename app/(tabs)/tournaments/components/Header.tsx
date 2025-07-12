import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderProps {
  title: string;
  onFilterPress?: () => void;
  showFilter?: boolean;
}

export default function Header({
  title,
  onFilterPress,
  showFilter = true,
}: HeaderProps) {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#D52B1E" />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {showFilter && (
          <TouchableOpacity
            style={styles.filterButton}
            onPress={onFilterPress}
            activeOpacity={0.7}
          >
            <Ionicons name="filter" size={26} color="#FFFFFF" />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#D52B1E",
    paddingHorizontal: 20,
    paddingVertical: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  filterButton: {
    marginTop: 3,
  },
});
