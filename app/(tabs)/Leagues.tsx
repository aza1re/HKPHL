import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useAdmin } from '../../context/AdminContext';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type LeaguesStackParamList = {
  Leagues: undefined;
  AddEvent: { onAdd: ({ name }: { name: string }) => void };
  Details: { name: string; logo: string };
};

type LeaguesScreenNavigationProp = NativeStackNavigationProp<
  LeaguesStackParamList,
  'Leagues'
>;

type League = {
  name: string;
  logo: string;
  tag: 'China' | 'Korea' | 'Japan';
};

const initialLeagues: League[] = [
  { name: 'Elite League', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'China' },
  { name: 'Future League', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'Korea' },
  { name: 'Samurai League', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'Japan' },
];

const Tab = createMaterialTopTabNavigator();

function AllLeagues() {
  const navigation = useNavigation<LeaguesScreenNavigationProp>();
  const { isAdmin } = useAdmin();
  const [leagues, setLeagues] = React.useState(initialLeagues);
  const router = useRouter();

  const handleAddEvent = ({ name }: { name: string }) => {
    setLeagues(prev => [
      ...prev,
      { name, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'China' }, // Default tag
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
          onPress={() => router.push(`/template/leagues/${encodeURIComponent(league.name)}`)}
        >
          <Image
            source={{ uri: league.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{league.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{league.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function ChinaLeagues() {
  const leagues = initialLeagues.filter(l => l.tag === 'China');
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
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
          onPress={() => router.push(`/template/leagues/${encodeURIComponent(league.name)}`)}
        >
          <Image
            source={{ uri: league.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{league.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{league.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function KoreaLeagues() {
  const leagues = initialLeagues.filter(l => l.tag === 'Korea');
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
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
          onPress={() => router.push(`/template/leagues/${encodeURIComponent(league.name)}`)}
        >
          <Image
            source={{ uri: league.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{league.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{league.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function JapanLeagues() {
  const leagues = initialLeagues.filter(l => l.tag === 'Japan');
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
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
          onPress={() => router.push(`/template/leagues/${encodeURIComponent(league.name)}`)}
        >
          <Image
            source={{ uri: league.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{league.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{league.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

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

export default function LeaguesScreen() {
  const router = useRouter();
  const goToTournamentList = () => {
    router.replace('/Tournaments');
  };
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <CustomHeader title="Leagues" />
      <Tab.Navigator
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: '#007bff' },
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#f3f3f3' },
        }}
      >
        <Tab.Screen name="All" component={AllLeagues} />
        <Tab.Screen name="China" component={ChinaLeagues} />
        <Tab.Screen name="Korea" component={KoreaLeagues} />
        <Tab.Screen name="Japan" component={JapanLeagues} />
      </Tab.Navigator>
    </View>
  );
}