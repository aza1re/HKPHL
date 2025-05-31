import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TournamentsScreen from '../screens/TournamentsScreen';
import ScheduleScreen    from '../screens/ScheduleScreen';
import StandingsScreen   from '../screens/StandingsScreen';
import PlayerStatsScreen from '../screens/PlayerStatsScreen';
import TeamInfoScreen    from '../screens/TeamInfoScreen';
import TeamRegistrationScreen from '../screens/TeamRegistrationScreen';
import AdminScreen       from '../screens/AdminScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // @ts-expect-error this version only allows `undefined`
        id={'root'}
        screenOptions={{ headerShown: true }}
      >
        <Tab.Screen name="Tournaments" component={TournamentsScreen} />
        <Tab.Screen name="Schedule"    component={ScheduleScreen} />
        <Tab.Screen name="Standings"   component={StandingsScreen} />
        <Tab.Screen name="Stats"       component={PlayerStatsScreen} />
        <Tab.Screen name="Team Info"   component={TeamInfoScreen} />
        <Tab.Screen name="Register"    component={TeamRegistrationScreen} />
        <Tab.Screen name="Admin"       component={AdminScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}