import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';

export default function TeamRegistrationScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Team Name</Text>
      <TextInput style={styles.input} placeholder="Enter name" />
      <Text style={styles.label}>Division</Text>
      <TextInput style={styles.input} placeholder="e.g. A, B, C" />
      <Text style={styles.label}>Coach Name</Text>
      <TextInput style={styles.input} placeholder="Coach" />
      <Button title="Submit Registration" onPress={() => {}} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { marginTop: 12, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 }
});