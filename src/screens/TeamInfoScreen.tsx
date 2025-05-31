import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const standings = [
  { id: '1', team: 'Team A', w: 10, l: 2, otw: 1, otl: 0, gd: 15 },
];

export default function StandingsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={standings}
        keyExtractor={i => i.id}
        renderItem={({ item, index }) => (
          <View style={styles.row}>
            <Text style={styles.pos}>{index + 1}</Text>
            {/* <Image source={{ uri: item.logo }} style={styles.logo} /> */}
            <Text style={styles.team}>{item.team}</Text>
            <Text>{item.w}-{item.l}</Text>
            <Text>OTW {item.otw} / OTL {item.otl}</Text>
            <Text>GD {item.gd}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  pos: { width: 24 },
  logo: { width: 24, height: 24, marginRight: 8 },
  team: { flex: 1, fontWeight: '600' }
});