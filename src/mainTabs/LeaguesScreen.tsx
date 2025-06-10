import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAdmin } from '../context/AdminContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const initialLeagues = [
  {
    name: 'Asia Cup',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg',
  },
  {
    name: 'Winter Classic',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg',
  },
];

type LeaguesStackParamList = {
  Leagues: undefined;
  AddEvent: { onAdd: ({ name }: { name: string }) => void };
  Details: { name: string; logo: string };
};

type LeaguesScreenNavigationProp = NativeStackNavigationProp<
  LeaguesStackParamList,
  'Leagues'
>;

export default function LeaguesScreen() {
  const navigation = useNavigation<LeaguesScreenNavigationProp>();
  const { isAdmin } = useAdmin();
  const [leagues, setLeagues] = useState(initialLeagues);

  const handleAddEvent = ({ name }: { name: string }) => {
    setLeagues(prev => [
      ...prev,
      { name, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' }, // Default logo
    ]);
  };

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
          onPress={() => navigation.navigate('AddEvent', { onAdd: handleAddEvent })}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Event</Text>
        </TouchableOpacity>
      )}
      {leagues.map(league => (
        <TouchableOpacity
          key={league.name}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
          onPress={() => navigation.navigate('Details', { name: league.name, logo: league.logo })}
        >
          <Image
            source={{ uri: league.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{league.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}