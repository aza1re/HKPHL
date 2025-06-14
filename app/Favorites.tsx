import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

const tournaments = [
  {
    name: 'Asia Cup',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', // Example logo URL
  },
  {
    name: 'Winter Classic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg',
  },
  // Add more tournaments as needed
];

export default function FavoritesScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {tournaments.map((tournament) => (
        <TouchableOpacity
          key={tournament.name}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
          onPress={() => {
            // Handle tournament button press
          }}
        >
          <Image
            source={{ uri: tournament.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{tournament.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}