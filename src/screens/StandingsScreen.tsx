import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const standings = [
  { id: '1', team: 'Team A', w: 10, l: 2, otw: 1, otl: 0, gd: 15 },
  // …
];

export default function StandingsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={standings}
        keyExtractor={i => i.id}
        renderItem={({ item, index }) => (
          <Text>{index + 1}. {item.team} – W{item.w}-L{item.l}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({ container: { flex: 1, padding: 16 } });