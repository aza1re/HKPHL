import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { gamesCol, onSnapshot, orderBy, query } from '../firebase/firebase'

export default function ScheduleScreen() {
  const [games, setGames] = useState<any[]>([])

  useEffect(() => {
    const q = query(gamesCol, orderBy("time", "asc"))
    const unsubscribe = onSnapshot(q, snap =>
      setGames(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    )
    return unsubscribe
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={g => g.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.team}>{item.home}</Text>
            <Text>{item.score}</Text>
            <Text style={styles.team}>{item.away}</Text>
            <Text style={styles.info}>{item.time} · P{item.period}</Text>
          </View>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { marginBottom: 12, borderBottomWidth: 1, borderColor: '#ddd', paddingBottom: 8 },
  team: { fontWeight: '600' },
  info: { color: '#666', fontSize: 12, marginTop: 4 },
})