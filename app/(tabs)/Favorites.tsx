import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

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

function CustomHeader({ title }: { title: string }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={customHeaderStyles.container}>
        <View style={customHeaderStyles.backButton} />
        <View style={customHeaderStyles.centerContainer}>
          <Text style={customHeaderStyles.title}>{title}</Text>
        </View>
        <View style={customHeaderStyles.rightSpace} />
      </View>
    </SafeAreaView>
  );
}

const customHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 62,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  rightSpace: {
    width: 40,
  },
});

export default function FavoritesScreen() {
  const router = useRouter();
  const goToTournamentList = () => {
    router.replace('/Tournaments');
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <CustomHeader title="Favorites" />
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
    </View>
  );
}