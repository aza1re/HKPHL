import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const dummy = [
  { id: '1', name: 'Winter Classic', type: 'Finals' },
  { id: '2', name: 'Spring Cup', type: 'Quarter-final' },
];

export default function TournamentsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummy}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.type}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  card: { padding: 12, marginBottom: 8, backgroundColor: '#eee', borderRadius: 6 },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 14, color: '#555' },
});