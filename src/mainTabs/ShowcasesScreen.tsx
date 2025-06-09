import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAdmin } from '../context/AdminContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const showcases = [
  { name: 'Elite Showcase', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
  { name: 'Future Stars', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Football_%28soccer_ball%29.svg' },
];

// For ShowcasesScreen
type ShowcasesStackParamList = {
  Showcases: undefined;
  AddEvent: undefined;
};

type ShowcasesScreenNavigationProp = NativeStackNavigationProp<
  ShowcasesStackParamList,
  'Showcases'
>;

export default function ShowcasesScreen() {
  const navigation = useNavigation<ShowcasesScreenNavigationProp>();
  const { isAdmin } = useAdmin();

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
          onPress={() => navigation.navigate('AddEvent')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Event</Text>
        </TouchableOpacity>
      )}
      {showcases.map((showcase) => (
        <View
          key={showcase.name}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f3f3f3',
            borderRadius: 8,
            padding: 12,
            marginBottom: 16,
          }}
        >
          <Image
            source={{ uri: showcase.logo }}
            style={{ width: 48, height: 48, marginRight: 16, borderRadius: 24 }}
            resizeMode="contain"
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{showcase.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}