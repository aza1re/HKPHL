import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { standingsCol, getDocs, query, orderBy } from '../firebase/firebase'

export default function StandingsScreen() {
  const [data, setData] = useState<any[]>([])
  useEffect(() => {
    async function load() {
      const q = query(standingsCol, orderBy("wins", "desc"))
      const snap = await getDocs(q)
      setData(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    }
    load()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={i => i.id}
        renderItem={({ item, index }) => (
          <Text>{index + 1}. {item.team} W:{item.wins} L:{item.losses}</Text>
        )}
      />
    </View>
  )
}
const styles = StyleSheet.create({ container: { flex:1, padding:16 } })