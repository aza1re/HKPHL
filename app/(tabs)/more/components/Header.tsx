import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useFonts, BakbakOne_400Regular } from "@expo-google-fonts/bakbak-one";

interface HeaderProps {
  title: string;
  onFilterPress?: () => void;
  showFilter?: boolean;
  showSettings?: boolean;
}

export default function Header({
  title,
  onFilterPress,
  showFilter = false,
  showSettings = true,
}: HeaderProps) {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    BakbakOne_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#D52B1E" />
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.rightContainer}>
          {showFilter && (
            <TouchableOpacity
              style={styles.filterButton}
              onPress={onFilterPress}
              activeOpacity={0.7}
            >
              <Ionicons name="filter" size={26} color="#FFFFFF" />
            </TouchableOpacity>
          )}
          {showSettings && (
            <TouchableOpacity
              style={styles.settingsButton}
              onPress={() => router.push("/more/settings")}
              activeOpacity={0.7}
            >
              <MaterialIcons name="settings" size={27} color="#FFFFFF" />
            </TouchableOpacity>
          )}
        </View>
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
    paddingVertical: 8,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontFamily: "BakbakOne_400Regular",
    letterSpacing: 0.5,
  },
  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterButton: {
    marginTop: 3,
    marginRight: 10,
  },
  settingsButton: {
    marginTop: 3,
  },
});
