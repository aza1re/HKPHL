import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAdmin } from '../context/AdminContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

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

// For TournamentsScreen
type TournamentsStackParamList = {
  Tournaments: undefined;
  AddEvent: undefined;
};

type TournamentsScreenNavigationProp = NativeStackNavigationProp<
  TournamentsStackParamList,
  'Tournaments'
>;

export default function TournamentsScreen() {
  const navigation = useNavigation<TournamentsScreenNavigationProp>();
  const { isAdmin } = useAdmin();

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {isAdmin && (
        <TouchableOpacity
          style={{
            backgroundColor: '#007bff',
            padding: 12,
            borderRadius: 8,
            marginBottom: 16,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('AddEvent')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Event</Text>
        </TouchableOpacity>
      )}
      {tournaments.map((tournament) => (
        <View
          key={tournament.name}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
        >
          <Image
            source={{ uri: tournament.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{tournament.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}