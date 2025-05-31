import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function AdminScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      {/* replace with real auth form */}
      <Button title="Log in as Admin" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 20, marginBottom: 16, textAlign: 'center' }
});