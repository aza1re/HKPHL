import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useAdmin } from '../context/AdminContext';

type ShowcasesStackParamList = {
  Showcases: undefined;
  AddEvent: { onAdd: ({ name }: { name: string }) => void };
  Details: { name: string; logo: string };
};

type ShowcasesScreenNavigationProp = NativeStackNavigationProp<
  ShowcasesStackParamList,
  'Showcases'
>;

type Tournament = {
  name: string;
  logo: string;
};

const initialShowcases = [
  { name: 'Elite Showcase', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
  { name: 'Future Stars', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
];

const Tab = createMaterialTopTabNavigator();

function AllShowcases() {
  const navigation = useNavigation<ShowcasesScreenNavigationProp>();
  const { isAdmin } = useAdmin();
  const [showcases, setShowcases] = React.useState(initialShowcases);

  const handleAddEvent = ({ name }: { name: string }) => {
    setShowcases(prev => [
      ...prev,
      { name, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      {isAdmin && (
        <TouchableOpacity
          style={{
            backgroundColor: '#007bff',
            padding: 12,
            borderRadius: 8,
            marginBottom: 16,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('AddEvent', { onAdd: handleAddEvent })}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Event</Text>
        </TouchableOpacity>
      )}
      {showcases.map(showcase => (
        <TouchableOpacity
          key={showcase.name}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
          onPress={() => navigation.navigate('Details', { name: showcase.name, logo: showcase.logo })}
        >
          <Image
            source={{ uri: showcase.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{showcase.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function ChinaShowcases() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>China Showcases</Text>
    </View>
  );
}

function KoreaShowcases() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Korea Showcases</Text>
    </View>
  );
}

function JapanShowcases() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Japan Showcases</Text>
    </View>
  );
}

export default function ShowcasesScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: '#007bff' },
        tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        tabBarStyle: { backgroundColor: '#f3f3f3' },
      }}
    >
      <Tab.Screen name="All" component={AllShowcases} />
      <Tab.Screen name="China" component={ChinaShowcases} />
      <Tab.Screen name="Korea" component={KoreaShowcases} />
      <Tab.Screen name="Japan" component={JapanShowcases} />
    </Tab.Navigator>
  );
}