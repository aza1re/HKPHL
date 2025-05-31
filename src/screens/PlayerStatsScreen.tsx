import React, { useState, useEffect } from 'react';
import { SectionList, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import { playersCol, query, where, onSnapshot } from '../firebase/firebase';

export default function TeamRegistrationScreen() {
  const [stats, setStats] = useState<any[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(query(playersCol), snap =>
      setStats(snap.docs.map(d => ({ id: d.id, ...d.data() })))
    );
    return unsub;
  }, []);

  const sections = [
    { title: 'Forwards', data: stats.filter(p => p.pos==='F') },
    { title: 'Defense',  data: stats.filter(p => p.pos==='D') },
    { title: 'Goalies',  data: stats.filter(p => p.pos==='G') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Team Name</Text>
      <TextInput style={styles.input} placeholder="Enter name" />
      <Text style={styles.label}>Division</Text>
      <TextInput style={styles.input} placeholder="e.g. A, B, C" />
      <Text style={styles.label}>Coach Name</Text>
      <TextInput style={styles.input} placeholder="Coach" />
      <Button title="Submit Registration" onPress={() => {}} />
      <SectionList
        sections={sections}
        keyExtractor={i=>i.id}
        renderSectionHeader={({section})=> <Text style={styles.header}>{section.title}</Text>}
        renderItem={({item})=>(
          <Text>
            {item.name} – {item.pos!=='G'
              ? `G${item.goals} A${item.assists} PIM${item.pim}`
              : `GAA${item.gaa} SV%${item.sv}`}
          </Text>
        )}
        style={{flex:1, padding:16}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { marginTop: 12, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 },
  header: { fontSize:18, fontWeight:'700', marginTop:16 }
});