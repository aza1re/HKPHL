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

export default function AboutUsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header with Exit Button */}
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <Text style={styles.headerTitle}>About Achieve Hockey</Text>
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
            <Text style={styles.description}>
              Achieve Hockey & Education – lorem ipsum 15 dolor sit amet
              consectetur. Tortor dictum iaculis massa suscipit eget 350 gravida
              malesuada. Et accumsan nunc semper orci. Sodales rhoncus vel.
            </Text>

            <Text style={styles.description}>
              Lorem ipsum dolor sit amet consectetur. Hac ut nec dignissim
              hendrerit lorem. Quam quam elementum hac morbi laous. Dictumst
              pellentesque 450 id dolor nibh at id et imperdiet. Facilisi in
              tempor in sed habitant ut. Id sagittis massa amet a.
            </Text>

            <Text style={styles.description}>
              Amet lacus adipiscing dolor consequat accumsan aenean leo aliquet
              viverra. Blandit quisque etiam aliquam sem aliquet. Aliquam 93 id
              tempor et bibendum. Sed quis id viverra arcu.
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
  description: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
});
