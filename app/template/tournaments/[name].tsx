import React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

// --- Tab Screens ---
function TournamentHome({ event }: { event: any }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Image source={{ uri: event.logo }} style={{ width: 120, height: 120, marginBottom: 16 }} />
      <Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 8 }}>{event.name}</Text>
      <Text style={{ fontSize: 16 }}>{event.details || 'Welcome to the tournament!'}</Text>
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
  const [event, setEvent] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchEvent() {
      const ref = doc(db, 'events', 'tournaments', 'items', name);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        setEvent(snap.data());
      }
      setLoading(false);
    }
    fetchEvent();
  }, [name]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!event) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Event not found.</Text>
      </View>
    );
  }

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
        {() => <TournamentHome event={event} />}
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