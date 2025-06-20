import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

// --- Tab Screens ---
function TournamentHome({ name }: { name: string }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' }}
        style={{ width: 120, height: 120, marginBottom: 16 }}
      />
      <Text style={{ fontSize: 16 }}>Welcome to the tournament!</Text>
    </View>
  );
}

function TeamsScreen() {
  // Generate teams A-J, all with the same logo
  const allTeams = Array.from({ length: 10 }, (_, i) => ({
    name: `Team ${String.fromCharCode(65 + i)}`,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg',
  }));

  // Randomly assign teams to divisions
  const shuffled = [...allTeams].sort(() => Math.random() - 0.5);
  const divisions = {
    U13: shuffled.slice(0, 3),
    U15: shuffled.slice(3, 6),
    U18: shuffled.slice(6, 10),
  };

  const handleTeamPress = (team: { name: string }) => {
    Alert.alert('Team Details', `Team details for ${team.name} coming soon!`);
  };

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {Object.entries(divisions).map(([division, teams]) => (
        <View key={division} style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>{division}</Text>
          {teams.map(team => (
            <View
              key={team.name}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#f3f3f3',
                borderRadius: 8,
                marginBottom: 8,
                padding: 8,
              }}
            >
              <Image
                source={{ uri: team.logo }}
                style={{ width: 36, height: 36, borderRadius: 18, marginRight: 12, borderWidth: 1, borderColor: '#ccc' }}
              />
              <Text
                onPress={() => handleTeamPress(team)}
                style={{
                  fontSize: 16,
                  color: '#333',
                  flex: 1,
                  paddingVertical: 8,
                  textAlign: 'left',
                }}
              >
                {team.name}
              </Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function ScheduleScreen() {
  // Example schedule data
  const schedule = [
    { time: '09:00', match: 'Team A vs Team B', division: 'U13', location: 'Rink 1' },
    { time: '10:00', match: 'Team C vs Team D', division: 'U13', location: 'Rink 2' },
    { time: '11:00', match: 'Team E vs Team F', division: 'U15', location: 'Rink 1' },
    { time: '12:00', match: 'Team G vs Team H', division: 'U15', location: 'Rink 2' },
    { time: '13:00', match: 'Team I vs Team J', division: 'U18', location: 'Rink 1' },
    { time: '14:00', match: 'Team A vs Team C', division: 'U18', location: 'Rink 2' },
  ];

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Schedule</Text>
      {schedule.map((item, idx) => (
        <View
          key={idx}
          style={{
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            padding: 12,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{item.match}</Text>
          <Text style={{ fontSize: 14, color: '#555' }}>
            Division: {item.division}
          </Text>
          <Text style={{ fontSize: 14, color: '#555' }}>
            Time: {item.time} &bull; Location: {item.location}
          </Text>
        </View>
      ))}
    </View>
  );
}

function ScoreScreen() {
  // Example scores data
  const scores = [
    { match: 'Team A vs Team B', division: 'U13', score: '2 - 1' },
    { match: 'Team C vs Team D', division: 'U13', score: '0 - 0' },
    { match: 'Team E vs Team F', division: 'U15', score: '3 - 2' },
    { match: 'Team G vs Team H', division: 'U15', score: '1 - 4' },
    { match: 'Team I vs Team J', division: 'U18', score: '2 - 2' },
    { match: 'Team A vs Team C', division: 'U18', score: '1 - 3' },
  ];

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 16 }}>Scores</Text>
      {scores.map((item, idx) => (
        <View
          key={idx}
          style={{
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            padding: 12,
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{item.match}</Text>
          <Text style={{ fontSize: 14, color: '#555' }}>
            Division: {item.division}
          </Text>
          <Text style={{ fontSize: 16, color: '#222', marginTop: 4 }}>
            Score: {item.score}
          </Text>
        </View>
      ))}
    </View>
  );
}

function StandingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Standings</Text>
    </View>
  );
}

function StatisticsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Statistics</Text>
    </View>
  );
}

function MoreScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>More</Text>
    </View>
  );
}

// --- Main Template ---
const Tab = createBottomTabNavigator();

export default function TournamentTemplateScreen() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const router = useRouter();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Teams':
              return <MaterialCommunityIcons name="account-group" size={size} color={color} />;
            case 'Schedule':
              return <Ionicons name="calendar" size={size} color={color} />;
            case 'Score':
              return <FontAwesome5 name="trophy" size={size} color={color} />;
            case 'Home':
              return <Ionicons name="home" size={size} color={color} />;
            case 'Standings':
              return <MaterialCommunityIcons name="format-list-numbered" size={size} color={color} />;
            case 'Statistics':
              return <Ionicons name="stats-chart" size={size} color={color} />;
            case 'More':
              return <Ionicons name="ellipsis-horizontal" size={size} color={color} />;
            default:
              return null;
          }
        },
        tabBarLabelStyle: { fontSize: 12 },
      })}
    >
      <Tab.Screen
        name="Teams"
        component={TeamsScreen}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
      />
      <Tab.Screen
        name="Score"
        component={ScoreScreen}
      />
      <Tab.Screen
        name="Home"
        options={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity
                onPress={() => router.replace('/(tabs)/Tournaments')}
                style={{
                  marginRight: 8,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  padding: 6,
                  elevation: 2,
                }}
              >
                <Ionicons name="arrow-back" size={24} color="#333" />
              </TouchableOpacity>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>Home</Text>
            </View>
          ),
        }}
      >
        {() => <TournamentHome name={name ?? 'Tournament'} />}
      </Tab.Screen>
      <Tab.Screen
        name="Standings"
        component={StandingsScreen}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
      />
    </Tab.Navigator>
  );
}