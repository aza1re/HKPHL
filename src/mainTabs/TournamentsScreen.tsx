import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useAdmin } from '../context/AdminContext';

type TournamentsStackParamList = {
  Tournaments: undefined;
  AddEvent: { onAdd: ({ name }: { name: string }) => void };
  Details: { name: string; logo: string };
};

type TournamentsScreenNavigationProp = NativeStackNavigationProp<
  TournamentsStackParamList,
  'Tournaments'
>;

type Tournament = {
  name: string;
  logo: string;
};

const initialTournaments: Tournament[] = [
  { name: 'Asia Cup', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
  { name: 'Winter Classic', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
];

const Tab = createMaterialTopTabNavigator();

function AllTournaments() {
  const navigation = useNavigation<TournamentsScreenNavigationProp>();
  const { isAdmin } = useAdmin();
  const [tournaments, setTournaments] = React.useState<Tournament[]>(initialTournaments);

  const handleAddEvent = ({ name }: { name: string }) => {
    setTournaments(prev => [
      ...prev,
      { name, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
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
      {tournaments.map(tournament => (
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
          onPress={() => navigation.navigate('Details', { name: tournament.name, logo: tournament.logo })}
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

function ChinaTournaments() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function KoreaTournaments() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function JapanTournaments() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

export default function TournamentsScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: '#007bff' },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#f3f3f3' },
      }}
    >
      <Tab.Screen name="All" component={AllTournaments} />
      <Tab.Screen name="China" component={ChinaTournaments} />
      <Tab.Screen name="Korea" component={KoreaTournaments} />
      <Tab.Screen name="Japan" component={JapanTournaments} />
    </Tab.Navigator>
  );
}