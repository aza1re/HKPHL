import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const games = [
  { id: '1', home: 'Team A', away: 'Team B', time: '14:00', period: '2', score: '1–2' },
];

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            {/* replace with <Image source={{ uri: item.logo }} /> */}
            <Text style={styles.team}>{item.home}</Text>
            <Text>{item.score}</Text>
            <Text style={styles.team}>{item.away}</Text>
            <Text style={styles.info}>{item.time} · P{item.period}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: {
    flexDirection: 'column',
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  team: { fontWeight: '600' },
  info: { color: '#666', marginTop: 4 }
});