import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useAdmin } from '../../context/AdminContext';
import { useRouter } from 'expo-router';

type ShowcasesStackParamList = {
  Showcases: undefined;
  AddEvent: { onAdd: ({ name }: { name: string }) => void };
  Details: { name: string; logo: string };
};

type ShowcasesScreenNavigationProp = NativeStackNavigationProp<
  ShowcasesStackParamList,
  'Showcases'
>;

type Showcase = {
  name: string;
  logo: string;
  tag: 'China' | 'Korea' | 'Japan';
};

const initialShowcases: Showcase[] = [
  { name: 'Elite Showcase', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'China' },
  { name: 'Future Stars', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'Korea' },
  { name: 'Rising Sun', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'Japan' },
];

const Tab = createMaterialTopTabNavigator();

function AllShowcases() {
  const navigation = useNavigation<ShowcasesScreenNavigationProp>();
  const { isAdmin } = useAdmin();
  const [showcases, setShowcases] = React.useState(initialShowcases);
  const router = useRouter();

  const handleAddEvent = ({ name }: { name: string }) => {
    setShowcases(prev => [
      ...prev,
      { name, logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg', tag: 'China' }, // Default tag
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
          onPress={() => router.push(`/template/showcases-${encodeURIComponent(showcase.name)}`)}
        >
          <Image
            source={{ uri: showcase.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{showcase.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{showcase.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function ChinaShowcases() {
  const showcases = initialShowcases.filter(s => s.tag === 'China');
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
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
          onPress={() => router.push(`/template/showcases/${encodeURIComponent(showcase.name)}`)}
        >
          <Image
            source={{ uri: showcase.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{showcase.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{showcase.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function KoreaShowcases() {
  const showcases = initialShowcases.filter(s => s.tag === 'Korea');
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
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
          onPress={() => router.push(`/template/showcases/${encodeURIComponent(showcase.name)}`)}
        >
          <Image
            source={{ uri: showcase.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{showcase.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{showcase.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

function JapanShowcases() {
  const showcases = initialShowcases.filter(s => s.tag === 'Japan');
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
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
          onPress={() => router.push(`/template/showcases/${encodeURIComponent(showcase.name)}`)}
        >
          <Image
            source={{ uri: showcase.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <View>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{showcase.name}</Text>
            <Text style={{ fontSize: 14, color: '#555' }}>{showcase.tag}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
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