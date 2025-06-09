import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ChinaScreen from '../mainTabs/ChinaScreen'
import AddEvent from '../modules/AddEvent'
import KoreaScreen from '../mainTabs/KoreaScreen'
import JapanScreen from '../mainTabs/JapanScreen'
import MoreScreen from '../mainTabs/MoreScreen'
import LoginScreen from '../modules/LoginScreen'


// 1) Define ParamLists
type ChinaStackParamList = {
  China: undefined
  AddEvent: undefined
}
type KoreaStackParamList = {
  Korea: undefined
}
type JapanStackParamList = {
  Japan: undefined
}
type MoreStackParamList = {
  More: undefined
  Login: undefined
}
type RootTabParamList = {
  China: undefined
  Korea: undefined
  Japan: undefined
  More: undefined
}


// 2) Create navigators, specifying <ParamList, ID>
const ChinaStackNav = createNativeStackNavigator<ChinaStackParamList,'ChinaStack'>()
const KoreaStackNav = createNativeStackNavigator<KoreaStackParamList,'KoreaStack'>()
const JapanStackNav = createNativeStackNavigator<JapanStackParamList,'JapanStack'>()
const MoreStackNav = createNativeStackNavigator<MoreStackParamList,'MoreStack'>()
const Tab = createBottomTabNavigator<RootTabParamList, 'RootTabs'>()


function ChinaStack() {
  return (
    <ChinaStackNav.Navigator id="ChinaStack">
      <ChinaStackNav.Screen name="China" component={ChinaScreen} />
      <ChinaStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </ChinaStackNav.Navigator>
  )
}

function KoreaStack() {
  return (
    <KoreaStackNav.Navigator id="KoreaStack">
      <KoreaStackNav.Screen name="Korea" component={KoreaScreen} />
    </KoreaStackNav.Navigator>
  )
}

function JapanStack() {
  return (
    <JapanStackNav.Navigator id="JapanStack">
      <JapanStackNav.Screen name="Japan" component={JapanScreen} />
    </JapanStackNav.Navigator>
  )
}

function MoreStack() {
  return (
    <MoreStackNav.Navigator id="MoreStack">
      <MoreStackNav.Screen name="More" component={MoreScreen} />
      <MoreStackNav.Screen name="Login" component={LoginScreen} />
    </MoreStackNav.Navigator>
  )
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator id="RootTabs" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="China" component={ChinaStack} />
        <Tab.Screen name="Korea" component={KoreaStack} />
        <Tab.Screen name="Japan" component={JapanStack} />
        <Tab.Screen name="More"  component={MoreStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
