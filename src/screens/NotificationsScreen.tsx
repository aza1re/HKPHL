import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const notes = [
  { id: '1', text: 'Schedule updated for March 5th' },
]

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={i => i.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.text}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, padding:16 },
  item: { paddingVertical:8, borderBottomWidth:1, borderColor:'#eee' },
})