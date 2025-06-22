import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const screens = [
  'Notifications',
  'Need Help',
  'Contact Us',
] as const;

function CustomHeader({ title }: { title: string }) {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View style={customHeaderStyles.container}>
        <View style={customHeaderStyles.backButton} />
        <View style={customHeaderStyles.centerContainer}>
          <Text style={customHeaderStyles.title}>{title}</Text>
        </View>
        <View style={customHeaderStyles.rightSpace} />
      </View>
    </SafeAreaView>
  );
}

const customHeaderStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 62,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
  rightSpace: {
    width: 40,
  },
});

export default function MoreScreen() {
  const route = useRoute();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <CustomHeader title="More" />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
          More
        </Text>
      </View>
    </View>
  );
}


