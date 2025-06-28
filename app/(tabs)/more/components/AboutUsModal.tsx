import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  SafeAreaView,
} from "react-native";

interface AboutUsModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function AboutUsModal({ visible, onClose }: AboutUsModalProps) {
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
          <Text style={styles.modalHeaderTitle}>What do we do?</Text>
          <TouchableOpacity onPress={onClose} style={styles.doneButton}>
            <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Content */}
        <ScrollView style={styles.modalContent}>
          <View style={styles.contentContainer}>
            <View style={styles.contentSection}>
              <Text style={styles.description}>
                Achieve Hockey & Education – lorem ipsum 15 dolor sit amet
                consectetur. Tortor dictum iaculis massa suscipit eget 350
                gravida malesuada. Et accumsan nunc semper orci. Sodales rhoncus
                vel.
              </Text>

              <Text style={styles.description}>
                Lorem ipsum dolor sit amet consectetur. Hac ut nec dignissim
                hendrerit lorem. Quam quam elementum hac morbi laous. Dictumst
                pellentesque 450 id dolor nibh at id et imperdiet. Facilisi in
                tempor in sed habitant ut. Id sagittis massa amet a.
              </Text>

              <Text style={styles.description}>
                Amet lacus adipiscing dolor consequat accumsan aenean leo
                aliquet viverra. Blandit quisque etiam aliquam sem aliquet.
                Aliquam 93 id tempor et bibendum. Sed quis id viverra arcu.
              </Text>
            </View>
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
  contentContainer: {
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
    marginTop: 10,
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
