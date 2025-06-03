import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const tournaments = [
  { id: '1', name: 'Winter Classic', type: 'Finals' },
  { id: '2', name: 'Spring Cup', type: 'Quarter-finals' },
];

export default function TournamentsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={tournaments}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.type}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  card: { padding: 12, marginBottom: 8, backgroundColor: '#eee', borderRadius: 6 },
  title: { fontSize: 16, fontWeight: '600' },
  subtitle: { fontSize: 14, color: '#555' },
});