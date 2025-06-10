import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import TournamentsScreen from '../mainTabs/TournamentsScreen'
import ShowcasesScreen from '../mainTabs/ShowcasesScreen'
import LeaguesScreen from '../mainTabs/LeaguesScreen'
import FavoritesScreen from '../mainTabs/FavoritesScreen' // <-- create this if it doesn't exist
import MoreScreen from '../mainTabs/MoreScreen'
import AddEvent from '../modules/AddEvent'
import LoginScreen from '../modules/LoginScreen'


// 1) Define ParamLists
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
  Login: undefined
  Tournaments: undefined
  Showcases: undefined
  Leagues: undefined
  Favorites: undefined
  More: undefined
}

// 2) Create navigators
const TournamentsStackNav = createNativeStackNavigator<TournamentsStackParamList>()
const ShowcasesStackNav = createNativeStackNavigator<ShowcasesStackParamList>()
const LeaguesStackNav = createNativeStackNavigator<LeaguesStackParamList>()
const FavoritesStackNav = createNativeStackNavigator<FavoritesStackParamList>()
const MoreStackNav = createNativeStackNavigator<MoreStackParamList>()
const Tab = createBottomTabNavigator<RootTabParamList>()

type MoreScreenProps = {
  navigation: NativeStackNavigationProp<MoreStackParamList, 'More'>;
};


function TournamentsStack() {
  return (
    <TournamentsStackNav.Navigator id={"TournamentsStack" as any}>
      <TournamentsStackNav.Screen name="Tournaments" component={TournamentsScreen} />
      <TournamentsStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </TournamentsStackNav.Navigator>
  )
}

function ShowcasesStack() {
  return (
    <ShowcasesStackNav.Navigator id={"ShowcasesStack" as any}>
      <ShowcasesStackNav.Screen name="Showcases" component={ShowcasesScreen} />
      <ShowcasesStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </ShowcasesStackNav.Navigator>
  )
}

function LeaguesStack() {
  return (
    <LeaguesStackNav.Navigator id={"LeaguesStack" as any}>
      <LeaguesStackNav.Screen name="Leagues" component={LeaguesScreen} />
      <LeaguesStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </LeaguesStackNav.Navigator>
  )
}

function FavoritesStack() {
  return (
    <FavoritesStackNav.Navigator id={"FavoritesStack" as any}>
      <FavoritesStackNav.Screen name="Favorites" component={FavoritesScreen} />
    </FavoritesStackNav.Navigator>
  )
}

function MoreStack() {
  return (
    <MoreStackNav.Navigator id={"MoreStack" as any}>
      <MoreStackNav.Screen name="More" component={MoreScreen} />
      <MoreStackNav.Screen name="Login" component={LoginScreen} />
    </MoreStackNav.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator id={"AppNavigator" as any} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Tournaments" component={TournamentsStack} />
        <Tab.Screen name="Showcases" component={ShowcasesStack} />
        <Tab.Screen name="Leagues" component={LeaguesStack} />
        <Tab.Screen name="Favorites" component={FavoritesStack} />
        <Tab.Screen name="More" component={MoreStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
