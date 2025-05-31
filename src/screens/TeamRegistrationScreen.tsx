import React, { useState } from 'react'
import { ScrollView, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { teamsCol, addDoc } from '../firebase/firebase'

export default function TeamRegistrationScreen() {
  const [name, setName] = useState('')
  const [division, setDivision] = useState('')
  const [coach, setCoach] = useState('')

  async function onSubmit() {
    try {
      await addDoc(teamsCol, { name, division, coach, created: Date.now() })
      Alert.alert("Success", "Team registered!")
      setName(''); setDivision(''); setCoach('')
    } catch (err) {
      Alert.alert("Error", err.message)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Team Name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />
      <Text style={styles.label}>Division</Text>
      <TextInput style={styles.input} value={division} onChangeText={setDivision} />
      <Text style={styles.label}>Coach Name</Text>
      <TextInput style={styles.input} value={coach} onChangeText={setCoach} />
      <Button title="Submit Registration" onPress={onSubmit} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { marginTop: 12, fontWeight: '600' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, borderRadius: 4 },
})