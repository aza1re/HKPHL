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
import { Ionicons } from "@expo/vector-icons";

export default function FAQScreen() {
  const router = useRouter();
  const [expandedItems, setExpandedItems] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpansion = (index: number) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const faqData = [
    {
      question: "How do I register my team?",
      answer:
        'You can register your team through the "Team registration" section in the app. Navigate to More → Team registration and follow the step-by-step process.',
    },
    {
      question: "What age groups can participate?",
      answer:
        "HKPHL welcomes players of all ages, from youth leagues (6-18 years) to adult recreational and competitive leagues (18+ years).",
    },
    {
      question: "How much does it cost to join?",
      answer:
        "Registration fees vary by league and age group. Youth leagues start at HK$500 per season, while adult leagues range from HK$800-1500 depending on the division.",
    },
    {
      question: "When is the hockey season?",
      answer:
        "Our main season runs from September to May, with summer leagues available June through August. Tournament schedules are posted in the tournaments section.",
    },
    {
      question: "Where are games played?",
      answer:
        "Games are played at various hockey facilities across Hong Kong. Main venues include the Hong Kong Sports Centre, Kowloon Bay Hockey Arena, and Sha Tin Ice Palace.",
    },
    {
      question: "Is equipment provided?",
      answer:
        "Players must provide their own equipment. For beginners, we offer equipment rental programs in partnership with local sporting goods stores.",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Custom Header with Exit Button */}
      <View style={styles.headerContainer}>
        <View style={styles.headerSpacer} />
        <Text style={styles.headerTitle}>FAQ</Text>
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
          {faqData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.faqItem,
                index !== faqData.length - 1 && styles.itemWithBorder,
              ]}
              onPress={() => toggleExpansion(index)}
              activeOpacity={0.7}
            >
              <View style={styles.questionRow}>
                <Text style={styles.question}>{item.question}</Text>
                <Ionicons
                  name={expandedItems[index] ? "chevron-up" : "chevron-down"}
                  size={20}
                  color="#8E8E93"
                />
              </View>
              {expandedItems[index] && (
                <Text style={styles.answer}>{item.answer}</Text>
              )}
            </TouchableOpacity>
          ))}
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
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 7,
  },
  faqItem: {
    padding: 16,
  },
  itemWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E7",
  },
  questionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000",
    flex: 1,
    paddingRight: 10,
  },
  answer: {
    fontSize: 15,
    color: "#666",
    lineHeight: 22,
    marginTop: 10,
  },
});
