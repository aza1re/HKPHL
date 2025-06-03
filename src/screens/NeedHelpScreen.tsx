import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default function NeedHelpScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>FAQ</Text>
      <Text style={styles.item}>Q: How do I register? A: Go to More → Team Registration.</Text>
      <Text style={styles.header}>AI Chatbot</Text>
      <Text style={styles.item}>(Coming soon…)</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 18, fontWeight: '700', marginTop: 12 },
  item: { marginTop: 8, fontSize: 14 },
})