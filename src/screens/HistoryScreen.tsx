import React from 'react'
import { View, Text, StyleSheet, SectionList } from 'react-native'

const sections = [
  { title: 'Tournaments', data: ['Winter Classic 2023', 'Spring Cup 2024'] },
  { title: 'Summer Camps', data: ['Elite Skills Camp 2022'] },
]

export default function HistoryScreen() {
  return (
    <SectionList
      sections={sections}
      keyExtractor={(item, i) => item + i}
      renderSectionHeader={({ section }) => <Text style={styles.header}>{section.title}</Text>}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { fontSize: 18, fontWeight: '700', marginTop: 16 },
  item: { fontSize: 14, paddingVertical: 4 },
})