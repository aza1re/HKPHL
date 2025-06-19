import React from 'react';
import { View, Text, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
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
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>{name}</Text>
      <Text style={{ fontSize: 16 }}>Welcome to the tournament!</Text>
    </View>
  );
}

function TeamsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Teams</Text>
    </View>
  );
}

function ScheduleScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Schedule</Text>
    </View>
  );
}

function ScoreScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Score</Text>
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

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name="home" size={size} color={color} />;
            case 'Teams':
              return <MaterialCommunityIcons name="account-group" size={size} color={color} />;
            case 'Schedule':
              return <Ionicons name="calendar" size={size} color={color} />;
            case 'Score':
              return <FontAwesome5 name="trophy" size={size} color={color} />;
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
      <Tab.Screen name="Home">
        {() => <TournamentHome name={name ?? 'Tournament'} />}
      </Tab.Screen>
      <Tab.Screen name="Teams" component={TeamsScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Score" component={ScoreScreen} />
      <Tab.Screen name="Standings" component={StandingsScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}