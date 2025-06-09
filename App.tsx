import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your screens
import ChinaScreen from "./src/mainTabs/ChinaScreen";
import KoreaScreen from "./src/mainTabs/KoreaScreen";
import JapanScreen from "./src/mainTabs/JapanScreen";
import MoreScreen from "./src/mainTabs/MoreScreen";
import LoginScreen from "./src/modules/LoginScreen";
import AddEvent from "./src/modules/AddEvent";

// 1) Define ParamLists
type ChinaStackParamList = {
  China: undefined
  AddEvent: undefined
};
type KoreaStackParamList = {
  Korea: undefined
};
type JapanStackParamList = {
  Japan: undefined
};
type MoreStackParamList = {
  More: undefined
  Login: undefined
};
type RootTabParamList = {
  China: undefined
  Korea: undefined
  Japan: undefined
  More: undefined
};

// 2) Create navigators
const ChinaStackNav = createNativeStackNavigator<ChinaStackParamList>();
const KoreaStackNav = createNativeStackNavigator<KoreaStackParamList>();
const JapanStackNav = createNativeStackNavigator<JapanStackParamList>();
const MoreStackNav = createNativeStackNavigator<MoreStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

function ChinaStack() {
  return (
    <ChinaStackNav.Navigator id={"ChinaStack" as any}>
      <ChinaStackNav.Screen name="China" component={ChinaScreen} />
      <ChinaStackNav.Screen name="AddEvent" component={AddEvent} options={{ title: 'Add Event' }} />
    </ChinaStackNav.Navigator>
  );
}

function KoreaStack() {
  return (
    <KoreaStackNav.Navigator id={"KoreaStack" as any}>
      <KoreaStackNav.Screen name="Korea" component={KoreaScreen} />
    </KoreaStackNav.Navigator>
  );
}

function JapanStack() {
  return (
    <JapanStackNav.Navigator id={"JapanStack" as any}>
      <JapanStackNav.Screen name="Japan" component={JapanScreen} />
    </JapanStackNav.Navigator>
  );
}

function MoreStack() {
  return (
    <MoreStackNav.Navigator id={"MoreStack" as any}>
      <MoreStackNav.Screen name="More" component={MoreScreen} />
      <MoreStackNav.Screen name="Login" component={LoginScreen} />
    </MoreStackNav.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator id={"TabNav" as any} screenOptions={{ headerShown: false }}>
        <Tab.Screen name="China" component={ChinaStack} />
        <Tab.Screen name="Korea" component={KoreaStack} />
        <Tab.Screen name="Japan" component={JapanStack} />
        <Tab.Screen name="More" component={MoreStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

