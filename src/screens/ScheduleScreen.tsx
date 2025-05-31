import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const games = [
  { id: '1', home: 'Team A', away: 'Team B', time: '14:00', period: '2', score: '1–2' },
  // …real data here
];

export default function ScheduleScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <Text>{item.home} vs {item.away}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex:1, padding:16 } });