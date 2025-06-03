import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'

const camps = [
  { id: '1', name: 'Elite Skills Camp', info: 'Ages 10–15', image: 'https://via.placeholder.com/80' },
]

export default function SummerCampsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={camps}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.text}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.info}</Text>
            </View>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { flexDirection: 'row', marginBottom: 12, backgroundColor: '#fafafa', borderRadius: 6, overflow: 'hidden' },
  image: { width: 80, height: 80 },
  text: { flex: 1, padding: 8 },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 14, color: '#666' },
})