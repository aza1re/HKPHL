import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const games = [
  { id: '1', home: 'Team A', away: 'Team B', time: '18:00' },
]

export default function LeagueScheduleScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.team}>{item.home} vs {item.away}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' },
  team: { fontSize: 16 },
  time: { color: '#666' },
})