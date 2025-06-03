import React from 'react'
import { View, Text, StyleSheet, Linking, TouchableOpacity } from 'react-native'

export default function ContactUsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Contact Us</Text>
      <TouchableOpacity onPress={() => Linking.openURL('mailto:support@hockeyapp.com')}>
        <Text style={styles.link}>support@hockeyapp.com</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://hockeyapp.example.com')}>
        <Text style={styles.link}>www.hockeyapp.example.com</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex:1, alignItems:'center', justifyContent:'center', padding:16 },
  header: { fontSize:18, fontWeight:'700', marginBottom:12 },
  link: { color:'#0066cc', fontSize:16, marginTop:8 }
})