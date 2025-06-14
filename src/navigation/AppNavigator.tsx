import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import TournamentsScreen from '../maintabs/TournamentsScreen'
import ShowcasesScreen   from '../maintabs/ShowcasesScreen'
import LeaguesScreen     from '../maintabs/LeaguesScreen'
import FavoritesScreen   from '../maintabs/FavoritesScreen'
import MoreScreen        from '../maintabs/MoreScreen'
import AddEvent          from '../modules/AddEvent'
import LoginScreen       from '../modules/LoginScreen'

// 1) Define Param Lists
type TournamentsStackParamList = {
  Tournaments: undefined
  AddEvent: undefined
}
type ShowcasesStackParamList = {
  Showcases: undefined
  AddEvent: undefined
}
type LeaguesStackParamList = {
  Leagues: undefined
  AddEvent: undefined
}
type FavoritesStackParamList = {
  Favorites: undefined
}
type MoreStackParamList = {
  More: undefined
  Login: undefined
}
export type RootTabParamList = {
  Home: undefined;
  Tournaments: undefined
  Showcases: undefined
  Leagues: undefined
  Favorites: undefined
  More: undefined
  Login: undefined; // <-- Add this line
}

// 2) Create navigators
const RootStack           = createNativeStackNavigator()
const TournamentsStackNav = createNativeStackNavigator<TournamentsStackParamList>()
const ShowcasesStackNav   = createNativeStackNavigator<ShowcasesStackParamList>()
const LeaguesStackNav     = createNativeStackNavigator<LeaguesStackParamList>()
const FavoritesStackNav   = createNativeStackNavigator<FavoritesStackParamList>()
const MoreStackNav        = createNativeStackNavigator<MoreStackParamList>()
const Tab                  = createBottomTabNavigator<RootTabParamList>()

// 3) Stacks for each tab (no id props)
function TournamentsStack() {
  return (
    <TournamentsStackNav.Navigator>
      <TournamentsStackNav.Screen name="Tournaments" component={TournamentsScreen} />
      <TournamentsStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </TournamentsStackNav.Navigator>
  )
}

function ShowcasesStack() {
  return (
    <ShowcasesStackNav.Navigator>
      <ShowcasesStackNav.Screen name="Showcases" component={ShowcasesScreen} />
      <ShowcasesStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </ShowcasesStackNav.Navigator>
  )
}

function LeaguesStack() {
  return (
    <LeaguesStackNav.Navigator>
      <LeaguesStackNav.Screen name="Leagues" component={LeaguesScreen} />
      <LeaguesStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </LeaguesStackNav.Navigator>
  )
}

function FavoritesStack() {
  return (
    <FavoritesStackNav.Navigator>
      <FavoritesStackNav.Screen name="Favorites" component={FavoritesScreen} />
    </FavoritesStackNav.Navigator>
  )
}

function MoreStack() {
  return (
    <MoreStackNav.Navigator>
      <MoreStackNav.Screen name="More" component={MoreScreen} />
      <MoreStackNav.Screen name="Login" component={LoginScreen} />
    </MoreStackNav.Navigator>
  )
}

// 4) Bottom Tabs for main app
function MainTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Tournaments" component={TournamentsStack} />
      <Tab.Screen name="Showcases"   component={ShowcasesStack} />
      <Tab.Screen name="Leagues"     component={LeaguesStack} />
      <Tab.Screen name="Favorites"   component={FavoritesStack} />
      <Tab.Screen name="More"        component={MoreStack} />
    </Tab.Navigator>
  )
}

// 5) Root Stack including Login and MainTabs
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="Login" component={LoginScreen} />
        <RootStack.Screen name="Main"  component={MainTabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
