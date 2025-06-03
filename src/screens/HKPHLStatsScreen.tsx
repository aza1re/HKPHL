import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const stats = [
  { id: '1', team: 'Team A', wins: 8, losses: 2 },
]

export default function HKPHLStatsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={stats}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.team}>{item.team}</Text>
            <Text style={styles.record}>W{item.wins}-L{item.losses}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, borderBottomWidth: 1, borderColor: '#ddd' },
  team: { fontSize: 16 },
  record: { fontSize: 14, color: '#555' },
})