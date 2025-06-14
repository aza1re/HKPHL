import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const screens = [
  'Notifications',
  'Need Help',
  'Contact Us',
] as const;

export default function MoreScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        {route.name}
      </Text>
    </View>
  );
}


