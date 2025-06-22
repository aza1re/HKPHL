import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet, ScrollView, SafeAreaView, Modal } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

// --- Tab Screens ---
function TournamentHome({ name }: { name: string }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <Image
        source={require('../../../assets/favicon.png')}
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
    logo: require('../../../assets/favicon.png'),
    division: i < 3 ? 'U13' : i < 6 ? 'U15' : 'U18',
    description: 'This is a sample team description. More info will be available soon.'
  }));

  // Randomly assign teams to divisions
  const shuffled = [...allTeams].sort(() => Math.random() - 0.5);
  const divisions = {
    U13: shuffled.slice(0, 3),
    U15: shuffled.slice(3, 6),
    U18: shuffled.slice(6, 10),
  };

  const [selectedTeam, setSelectedTeam] = React.useState<null | typeof allTeams[0]>(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const handleTeamPress = (team: typeof allTeams[0]) => {
    setSelectedTeam(team);
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, paddingHorizontal: 24, paddingTop: 16 }}>
        {Object.entries(divisions).map(([division, teams]) => (
          <View key={division} style={{ marginBottom: 24 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 8 }}>{division} Division</Text>
            {teams.map(team => (
              <TouchableOpacity
                key={team.name}
                style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f3f3f3', borderRadius: 8, padding: 12, marginBottom: 10 }}
                onPress={() => handleTeamPress(team)}
              >
                <Image source={team.logo} style={{ width: 40, height: 40, borderRadius: 20, marginRight: 12 }} />
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{team.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '85%', backgroundColor: '#fff', borderRadius: 16, padding: 24, alignItems: 'center', elevation: 8 }}>
            {selectedTeam && (
              <>
                <Image source={selectedTeam.logo} style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 16 }} />
                <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 4 }}>{selectedTeam.name}</Text>
                <Text style={{ fontSize: 16, color: '#555', marginBottom: 8 }}>{selectedTeam.division} Division</Text>
                <Text style={{ fontSize: 15, color: '#333', textAlign: 'center', marginBottom: 16 }}>{selectedTeam.description}</Text>
                <TouchableOpacity
                  style={{ backgroundColor: '#007bff', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 24 }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
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

  // Group by division
  const divisions = Array.from(new Set(schedule.map(s => s.division)));

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      {divisions.map(division => (
        <View key={division} style={{ marginBottom: 28 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{division} Division</Text>
          {schedule.filter(s => s.division === division).map((item, idx) => (
            <View key={idx} style={{ backgroundColor: '#f3f3f3', borderRadius: 8, padding: 14, marginBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.home} vs {item.away}</Text>
                <Text style={{ fontSize: 14, color: '#555', marginTop: 2 }}>Time: {item.time}   |   Location: {item.location}</Text>
              </View>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

function ScoreScreen() {
  // Example scores data
  const scores = [
    { time: '09:00', home: 'Team A', away: 'Team B', division: 'U13', location: 'Rink 1', score: '2 - 1' },
    { time: '10:00', home: 'Team C', away: 'Team D', division: 'U13', location: 'Rink 2', score: '0 - 0' },
    { time: '11:00', home: 'Team E', away: 'Team F', division: 'U15', location: 'Rink 1', score: '3 - 2' },
    { time: '12:00', home: 'Team G', away: 'Team H', division: 'U15', location: 'Rink 2', score: '1 - 4' },
    { time: '13:00', home: 'Team I', away: 'Team J', division: 'U18', location: 'Rink 1', score: '2 - 2' },
    { time: '14:00', home: 'Team A', away: 'Team C', division: 'U18', location: 'Rink 2', score: '1 - 3' },
  ];

  const logoUri = require('../../../assets/favicon.png');

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      {scores.map((item, idx) => (
        <React.Fragment key={idx}>
          <View
            style={{
              backgroundColor: '#f3f3f3',
              borderRadius: 12,
              padding: 24,
              marginBottom: 20,
              alignItems: 'center',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={logoUri} style={{ width: 64, height: 64, borderRadius: 32, marginBottom: 8 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{item.home}</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginHorizontal: 16, minWidth: 120 }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#000000', marginBottom: 4 }}>{item.score}</Text>
                <Text
                  style={{ fontSize: 18, color: '#555', marginBottom: 4, flexShrink: 0, flexWrap: 'nowrap' }}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.division} Division
                </Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={logoUri} style={{ width: 64, height: 64, borderRadius: 32, marginBottom: 8 }} />
                <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{item.away}</Text>
              </View>
            </View>
            <Text style={{ fontSize: 16, color: '#555', marginTop: 12 }}>
              Time: {item.time}   |   Location: {item.location}
            </Text>
          </View>
          {idx < scores.length - 1 && (
            <View style={{ height: 1, backgroundColor: '#000', marginVertical: 4, marginHorizontal: 8 }} />
          )}
        </React.Fragment>
      ))}
    </ScrollView>
  );
}

function StandingsScreen() {
  // Sample standings data
  const standings = [
    { team: 'Team A', division: 'U13', GP: 3, W: 2, L: 1, T: 0, PTS: 6 },
    { team: 'Team B', division: 'U13', GP: 3, W: 2, L: 1, T: 0, PTS: 6 },
    { team: 'Team C', division: 'U13', GP: 3, W: 1, L: 2, T: 0, PTS: 3 },
    { team: 'Team D', division: 'U15', GP: 3, W: 3, L: 0, T: 0, PTS: 9 },
    { team: 'Team E', division: 'U15', GP: 3, W: 1, L: 2, T: 0, PTS: 3 },
    { team: 'Team F', division: 'U18', GP: 3, W: 2, L: 0, T: 1, PTS: 7 },
    { team: 'Team G', division: 'U18', GP: 3, W: 1, L: 1, T: 1, PTS: 4 },
    { team: 'Team H', division: 'U18', GP: 3, W: 0, L: 2, T: 1, PTS: 1 },
  ];

  // Group by division
  const divisions = Array.from(new Set(standings.map(s => s.division)));

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      {divisions.map(division => (
        <View key={division} style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>{division} Standings</Text>
          <View style={{ flexDirection: 'row', backgroundColor: '#f3f3f3', borderRadius: 6, paddingVertical: 6, marginBottom: 2 }}>
            <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'left', paddingLeft: 8 }}>Team</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>GP</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>W</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>L</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>T</Text>
            <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>PTS</Text>
          </View>
          {standings.filter(s => s.division === division).map((row, idx) => (
            <View key={row.team} style={{ flexDirection: 'row', backgroundColor: idx % 2 === 0 ? '#fff' : '#f9f9f9', borderRadius: 6, paddingVertical: 6 }}>
              <Text style={{ flex: 2, textAlign: 'left', paddingLeft: 8 }}>{row.team}</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>{row.GP}</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>{row.W}</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>{row.L}</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>{row.T}</Text>
              <Text style={{ flex: 1, textAlign: 'center' }}>{row.PTS}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

function StatisticsScreen() {
  // Sample player stats data
  const stats = [
    { player: 'Alex Kim', team: 'Team A', GP: 3, G: 5, A: 2, PTS: 7, PIM: 0 },
    { player: 'Brian Lee', team: 'Team B', GP: 3, G: 3, A: 4, PTS: 7, PIM: 2 },
    { player: 'Chris Park', team: 'Team D', GP: 3, G: 4, A: 1, PTS: 5, PIM: 4 },
    { player: 'David Chen', team: 'Team F', GP: 3, G: 2, A: 3, PTS: 5, PIM: 0 },
    { player: 'Eric Wu', team: 'Team G', GP: 3, G: 1, A: 5, PTS: 6, PIM: 0 },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>Top Player Stats</Text>
      <View style={{ flexDirection: 'row', backgroundColor: '#f3f3f3', borderRadius: 6, paddingVertical: 6, marginBottom: 2 }}>
        <Text style={{ flex: 2, fontWeight: 'bold', textAlign: 'left', paddingLeft: 8 }}>Player</Text>
        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>Team</Text>
        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>GP</Text>
        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>G</Text>
        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>A</Text>
        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>PTS</Text>
        <Text style={{ flex: 1, fontWeight: 'bold', textAlign: 'center' }}>PIM</Text>
      </View>
      {stats.map((row, idx) => (
        <View key={row.player} style={{ flexDirection: 'row', backgroundColor: idx % 2 === 0 ? '#fff' : '#f9f9f9', borderRadius: 6, paddingVertical: 6 }}>
          <Text style={{ flex: 2, textAlign: 'left', paddingLeft: 8 }}>{row.player}</Text>
          <Text style={{ flex: 1, textAlign: 'center' }}>{row.team}</Text>
          <Text style={{ flex: 1, textAlign: 'center' }}>{row.GP}</Text>
          <Text style={{ flex: 1, textAlign: 'center' }}>{row.G}</Text>
          <Text style={{ flex: 1, textAlign: 'center' }}>{row.A}</Text>
          <Text style={{ flex: 1, textAlign: 'center' }}>{row.PTS}</Text>
          <Text style={{ flex: 1, textAlign: 'center' }}>{row.PIM}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

function MoreScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>More</Text>
    </View>
  );
}

// --- Custom Header ---
function CustomHeader({ title, onBack }: { title: string; onBack?: () => void }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={customHeaderStyles.container}>
        {onBack ? (
          <TouchableOpacity onPress={onBack} style={customHeaderStyles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#007AFF" />
          </TouchableOpacity>
        ) : (
          <View style={customHeaderStyles.backButton} />
        )}
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

// --- Main Template ---
const Tab = createBottomTabNavigator();

function CustomHomeButton(props: any) {
  // Use logoSource prop if provided, else fallback to favicon
  const logoSource = props.logoSource || require('../../../assets/favicon.png');
  return (
    <TouchableOpacity
      style={styles.customButton}
      {...props}
      activeOpacity={0.8}
    >
      <View style={styles.circle}>
        <Image source={logoSource} style={styles.logo} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
}

function CustomTabBar(props: any) {
  const { state, descriptors, navigation } = props;
  const { logo } = useLocalSearchParams();

  // Determine the logo source for the home button
  const logoSource = logo && typeof logo === 'string' && logo.startsWith('http')
    ? { uri: logo }
    : require('../../../assets/favicon.png');

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
                <Image source={logoSource} style={styles.logo} resizeMode="contain" />
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

  // Use logo from params if available, else fallback to favicon
  let logoSource = require('../../../assets/favicon.png');
  if (logo && typeof logo === 'string' && logo.startsWith('http')) {
    logoSource = { uri: logo };
  }

  const goToTournamentList = () => {
    router.replace('/Tournaments');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <CustomHeader
        title={name ? String(name) : 'Tournament'}
        onBack={goToTournamentList}
      />
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <CustomTabBar {...props} logoSource={logoSource} />}
        screenOptions={({ route }) => ({
          headerShown: false,
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
        <Tab.Screen name="Teams" component={TeamsScreen} />
        <Tab.Screen name="Schedule" component={ScheduleScreen} />
        <Tab.Screen name="Score" component={ScoreScreen} />
        <Tab.Screen
          name="Home"
          component={() => <TournamentHome name={name as string} />}
          options={{
            tabBarButton: (props) => (
              <CustomHomeButton {...props} logoSource={logoSource} />
            ),
            tabBarLabel: '',
          }}
        />
        <Tab.Screen name="Standings" component={StandingsScreen} />
        <Tab.Screen name="Stats" component={StatisticsScreen} options={{ tabBarLabel: 'Stats' }} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </View>
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