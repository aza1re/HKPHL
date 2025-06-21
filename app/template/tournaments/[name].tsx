import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ScrollView } from 'react-native';
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
    <ScrollView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 16 }}>
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
    </ScrollView>
  );
}

function ScheduleScreen() {
  // Example schedule data
  const schedule = [
    { time: '09:00', home: 'Team A', away: 'Team B', division: 'U13', location: 'Rink 1' },
    { time: '10:00', home: 'Team C', away: 'Team D', division: 'U13', location: 'Rink 2' },
    { time: '11:00', home: 'Team E', away: 'Team F', division: 'U15', location: 'Rink 1' },
    { time: '12:00', home: 'Team G', away: 'Team H', division: 'U15', location: 'Rink 2' },
    { time: '13:00', home: 'Team I', away: 'Team J', division: 'U18', location: 'Rink 1' },
    { time: '14:00', home: 'Team A', away: 'Team C', division: 'U18', location: 'Rink 2' },
  ];

  const logoUri = 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg';

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      {schedule.map((item, idx) => (
        <React.Fragment key={idx}>
          <View
            style={{
              backgroundColor: '#f3f3f3',
              borderRadius: 8,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
              <Image source={{ uri: logoUri }} style={{ width: 32, height: 32, borderRadius: 16, marginRight: 8 }} />
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginRight: 8 }}>{item.home}</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginHorizontal: 4 }}>vs</Text>
              <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 8 }}>{item.away}</Text>
              <Image source={{ uri: logoUri }} style={{ width: 32, height: 32, borderRadius: 16, marginLeft: 8 }} />
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 14, color: '#555' }}>
                Division: {item.division}
              </Text>
              <Text style={{ fontSize: 14, color: '#555' }}>
                Time: {item.time} &bull; Location: {item.location}
              </Text>
            </View>
          </View>
          {idx < schedule.length - 1 && (
            <View style={{ height: 1, backgroundColor: '#000', marginVertical: 4, marginHorizontal: 8 }} />
          )}
        </React.Fragment>
      ))}
    </ScrollView>
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
    <ScrollView style={{ flex: 1, padding: 24 }}>
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
    </ScrollView>
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

function CustomHomeButton(props: any) {
  const { logoUri, ...rest } = props;
  return (
    <TouchableOpacity
      style={styles.customButton}
      {...rest}
      activeOpacity={0.8}
    >
      <View style={styles.circle}>
        <Image source={{ uri: logoUri }} style={styles.logo} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
}

function CustomTabBar(props: any) {
  const { state, descriptors, navigation } = props;
  const { logo } = useLocalSearchParams();

  return (
    <View style={{ flexDirection: 'row', height: 70, backgroundColor: '#fff', elevation: 8 }}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined
          ? options.tabBarLabel
          : options.title !== undefined
          ? options.title
          : route.name;

        const isFocused = state.index === index;

        // Render the floating button for Home
        if (route.name === 'Home') {
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              onPress={() => navigation.navigate(route.name)}
              style={{
                top: -28,
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                zIndex: 10,
                width: 70,
              }}
              activeOpacity={0.8}
            >
              <View style={styles.circle}>
                <Image source={{ uri: logo as string }} style={styles.logo} resizeMode="contain" />
              </View>
            </TouchableOpacity>
          );
        }

        // Render normal tab buttons
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={() => navigation.navigate(route.name)}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}
          >
            {options.tabBarIcon &&
              options.tabBarIcon({ color: isFocused ? '#007AFF' : '#888', size: 24 })}
            <Text style={{ color: isFocused ? '#007AFF' : '#888', fontSize: 11, marginTop: 2 }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TournamentTemplateScreen() {
  const router = useRouter();
  const { name, logo } = useLocalSearchParams();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: true,
        headerStyle: { height: 60 },// <-- Add this line
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Teams':
              return <MaterialCommunityIcons name="account-group" size={size} color={color} />;
            case 'Schedule':
              return <Ionicons name="calendar" size={size} color={color} />;
            case 'Score':
              return <FontAwesome5 name="trophy" size={size} color={color} />;
            case 'Standings':
              return <MaterialCommunityIcons name="format-list-numbered" size={size} color={color} />;
            case 'Stats':
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
        options={{
          headerLeft: () => (
            <TouchableOpacity
              style={{ marginLeft: 16 }}
              onPress={() => {
                // Example: go back or open a drawer
                // router.back(); // If you want to go back
                // or do something else
              }}
            >
              <Ionicons name="arrow-back" size={24} color="#007AFF" />
            </TouchableOpacity>
          ),
          title: 'Teams', // Optional: set a custom title
        }}
      />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Score" component={ScoreScreen} />
      {/* Move Home here to make it the center tab */}
      <Tab.Screen
        name="Home"
        options={{
          tabBarButton: (props) => (
            <CustomHomeButton {...props} logoUri={logo as string} />
          ),
          tabBarLabel: '',
        }}
      >
        {() => <TournamentHome name={name as string} />}
      </Tab.Screen>
      <Tab.Screen name="Standings" component={StandingsScreen} />
      <Tab.Screen
        name="Stats"
        component={StatisticsScreen}
        options={{
          tabBarLabel: 'Stats',
        }}
      />
      <Tab.Screen name="More" component={MoreScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  customButton: {
    marginTop: -32, // Negative margin to float above the tab bar
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    zIndex: 10,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  logo: {
    width: 40,
    height: 40,
  },
});