import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens…
import TournamentsScreen  from '../screens/TournamentsScreen'
import SummerCampsScreen  from '../screens/SummerCampsScreen'
import HistoryScreen      from '../screens/HistoryScreen'
import FavouritesScreen   from '../screens/FavouritesScreen'
import LeagueScheduleScreen from '../screens/LeagueScheduleScreen'
import HKPHLStatsScreen     from '../screens/HKPHLStatsScreen'
import HKPHLPlayersScreen   from '../screens/HKPHLPlayersScreen'
import TeamRegistrationScreen from '../screens/TeamRegistrationScreen'
import NotificationsScreen     from '../screens/NotificationsScreen'
import NeedHelpScreen          from '../screens/NeedHelpScreen'
import ContactUsScreen         from '../screens/ContactUsScreen'


// 1) Define ParamLists
type DiscoverStackParamList = {
  Tournaments: undefined
  'Summer Camps': undefined
  History: undefined
  Favourites: undefined
}
type HKPHLStackParamList = {
  'League Schedule': undefined
  Stats: undefined
  Players: undefined
}
type MoreStackParamList = {
  'Team Registration': undefined
  Notifications: undefined
  'Need Help': undefined
  'Contact Us': undefined
}
type RootTabParamList = {
  Discover: undefined
  HKPHL: undefined
  More: undefined
}


// 2) Create navigators, specifying <ParamList, ID>
const DiscoverStackNav = createNativeStackNavigator<DiscoverStackParamList, 'DiscoverStack'>()
const HKPHLStackNav    = createNativeStackNavigator<HKPHLStackParamList,    'HKPHLStack'>()
const MoreStackNav     = createNativeStackNavigator<MoreStackParamList,     'MoreStack'>()
const Tab              = createBottomTabNavigator<RootTabParamList, 'RootTabs'>()


function DiscoverStack() {
  return (
    <DiscoverStackNav.Navigator id="DiscoverStack">
      <DiscoverStackNav.Screen name="Tournaments"  component={TournamentsScreen}  />
      <DiscoverStackNav.Screen name="Summer Camps" component={SummerCampsScreen}  />
      <DiscoverStackNav.Screen name="History"      component={HistoryScreen}      />
      <DiscoverStackNav.Screen name="Favourites"   component={FavouritesScreen}   />
    </DiscoverStackNav.Navigator>
  )
}

function HKPHLStack() {
  return (
    <HKPHLStackNav.Navigator id="HKPHLStack">
      <HKPHLStackNav.Screen name="League Schedule" component={LeagueScheduleScreen} />
      <HKPHLStackNav.Screen name="Stats"            component={HKPHLStatsScreen}     />
      <HKPHLStackNav.Screen name="Players"          component={HKPHLPlayersScreen}   />
    </HKPHLStackNav.Navigator>
  )
}

function MoreStack() {
  return (
    <MoreStackNav.Navigator id="MoreStack">
      <MoreStackNav.Screen name="Team Registration" component={TeamRegistrationScreen} />
      <MoreStackNav.Screen name="Notifications"     component={NotificationsScreen}     />
      <MoreStackNav.Screen name="Need Help"          component={NeedHelpScreen}          />
      <MoreStackNav.Screen name="Contact Us"         component={ContactUsScreen}         />
    </MoreStackNav.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator id="RootTabs" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Discover" component={DiscoverStack} />
        <Tab.Screen name="HKPHL"     component={HKPHLStack}     />
        <Tab.Screen name="More"      component={MoreStack}      />
      </Tab.Navigator>
    </NavigationContainer>
  )
}