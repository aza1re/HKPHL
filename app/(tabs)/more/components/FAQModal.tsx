import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FAQModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function FAQModal({ visible, onClose }: FAQModalProps) {
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
      question: "Do I need my own equipment?",
      answer:
        "Yes, players are required to have their own hockey equipment including helmet, pads, skates, and stick. Rental equipment may be available for beginners.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach us through the contact information section, use our AI chatbot for quick questions, or email us directly at info@hkphl.com.",
    },
  ];
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}
    >
      <SafeAreaView style={styles.modalContainer}>
        {/* Modal Header */}
        <View style={styles.modalHeader}>
          <View style={styles.headerSpacer} />
          <Text style={styles.modalHeaderTitle}>FAQ</Text>
          <TouchableOpacity onPress={onClose} style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Content */}
        <ScrollView style={styles.modalContent}>
          <View style={styles.faqContainer}>
            {faqData.map((item, index) => (
              <View key={index}>
                <TouchableOpacity
                  style={styles.faqHeader}
                  onPress={() => toggleExpansion(index)}
                >
                  <Text style={styles.question}>{item.question}</Text>
                  <Ionicons
                    name={
                      expandedItems[index] ? "chevron-down" : "chevron-forward"
                    }
                    size={20}
                    color="#8E8E93"
                  />
                </TouchableOpacity>

                {expandedItems[index] && (
                  <View style={styles.answerContainer}>
                    <Text style={styles.answer}>{item.answer}</Text>
                  </View>
                )}

                {index < faqData.length - 1 && <View style={styles.divider} />}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 10,
    backgroundColor: "#F7F7F7",
  },
  headerSpacer: {
    width: 50,
  },
  modalHeaderTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    flex: 1,
    textAlign: "center",
    marginBottom: 10,
  },
  doneButton: {
    paddingBottom: 5,
    paddingHorizontal: 8,
  },
  doneButtonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#D62828",
  },
  modalContent: {
    flex: 1,
  },
  faqContainer: {
    backgroundColor: "white",
    borderRadius: 7,
    marginHorizontal: 16,
    marginTop: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
    shadowOffset: { width: 0, height: 0 },
  },
  faqHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 48,
  },
  question: {
    fontSize: 16,
    fontWeight: "400",
    color: "#000",
    flex: 1,
    marginRight: 12,
  },
  answerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E5E7",
    marginLeft: 16,
  },
  answer: {
    fontSize: 16,
    color: "#333",
    lineHeight: 22,
  },
});
