import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

const favorites = [
  { id: '1', team: 'HK Wanderers' },
  { id: '2', team: 'Hong Kong Eagles' },
]

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row}>
            <Text style={styles.team}>{item.team}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { padding: 12, borderBottomWidth: 1, borderColor: '#ddd' },
  team: { fontSize: 16 },
})