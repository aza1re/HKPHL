import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const players = [
  { id: '1', name: 'Alice', gp: 12, g: 8, a: 5 },
]

export default function HKPHLPlayersScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={players}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.stat}>G {item.g} · A {item.a} · GP {item.gp}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { marginBottom: 12 },
  name: { fontSize: 16, fontWeight: '600' },
  stat: { fontSize: 14, color: '#666' },
})